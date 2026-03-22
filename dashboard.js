document.addEventListener('DOMContentLoaded', () => {
    // ======= INITIALIZE LUCIDE =======
    if (window.lucide) {
        lucide.createIcons();
    }

    // ======= INITIALIZE SUPABASE =======
    const supabaseUrl = CONFIG.SUPABASE_URL;
    const supabaseKey = CONFIG.SUPABASE_KEY;
    const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

    // ======= AUTHENTICATION =======
    const loginContainer = document.getElementById('login-container');
    const dashboardContent = document.getElementById('dashboard-content');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    const loginSubmitBtn = document.getElementById('login-submit-btn');
    const logoutBtn = document.getElementById('logout-btn');

    // Check session on load
    checkSession();

    // Listen for auth state changes
    supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') {
            handleSession(session);
        } else if (event === 'SIGNED_OUT') {
            handleSession(null);
        }
    });

    async function checkSession() {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
            console.error('Error checking session:', error);
            return;
        }
        handleSession(session);
    }

    function handleSession(session) {
        if (session) {
            // User is logged in
            loginContainer.classList.add('hidden');
            dashboardContent.classList.remove('hidden');
            logoutBtn.classList.remove('hidden');
            fetchLeads();
            fetchTrackingLinks();
            fetchAnalytics(); // Default to "all" filter initially
            setupAnalyticsFilters();
        } else {
            // User is not logged in
            loginContainer.classList.remove('hidden');
            dashboardContent.classList.add('hidden');
            logoutBtn.classList.add('hidden');
            
            // Re-initialize Lucide icons in the login form if it's shown
            if (window.lucide) {
                window.lucide.createIcons();
            }
        }
    }

    // Login logic
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        loginError.classList.add('hidden');
        loginSubmitBtn.disabled = true;
        const originalBtnText = loginSubmitBtn.innerHTML;
        loginSubmitBtn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i>';
        if (window.lucide) window.lucide.createIcons();

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (error) {
                throw error;
            }
            
            // Clear form
            loginForm.reset();
            
        } catch (error) {
            console.error('Login error:', error);
            loginError.textContent = error.message === 'Invalid login credentials' ? 'Credenciais inválidas.' : 'Erro ao fazer login. Tente novamente.';
            loginError.classList.remove('hidden');
        } finally {
            loginSubmitBtn.disabled = false;
            loginSubmitBtn.innerHTML = originalBtnText;
            if (window.lucide) window.lucide.createIcons();
        }
    });

    // Logout logic
    logoutBtn.addEventListener('click', async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Logout error:', error);
            alert('Erro ao sair. Tente novamente.');
        }
    });


    // ======= FETCH AND RENDER LEADS =======
    const tableBody = document.getElementById('leads-table-body');
    const totalLeadsSpan = document.getElementById('total-leads');

    async function fetchLeads() {
        try {
            // Fetch data from 'leads' table, ordered by most recent
            const { data, error } = await supabase
                .from('leads')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;

            renderLeads(data);
            
            totalLeadsSpan.textContent = `${data.length} Lead(s)`;
        } catch (error) {
            console.error('Error fetching leads:', error);
            tableBody.innerHTML = `
                <tr>
                    <td colspan="4" class="p-8 text-center text-red-500 font-medium">
                        <div class="flex flex-col items-center justify-center gap-2">
                            <i data-lucide="alert-triangle" class="w-8 h-8"></i>
                            <span>Erro ao carregar leads. Verifique o console.</span>
                        </div>
                    </td>
                </tr>
            `;
            if (window.lucide) lucide.createIcons();
            totalLeadsSpan.textContent = 'Erro';
        }
    }

    function renderLeads(leads) {
        if (!leads || leads.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="4" class="p-8 text-center text-[var(--color-text-muted)]">
                        <div class="flex flex-col items-center justify-center gap-2">
                            <i data-lucide="inbox" class="w-8 h-8 opacity-50"></i>
                            <span>Nenhum lead cadastrado ainda.</span>
                        </div>
                    </td>
                </tr>
            `;
            if (window.lucide) lucide.createIcons();
            return;
        }

        tableBody.innerHTML = ''; // Clear loading state

        leads.forEach(lead => {
            // Format date safely
            let dateStr = 'Data inválida';
            if (lead.created_at) {
                const date = new Date(lead.created_at);
                dateStr = date.toLocaleDateString('pt-BR', {
                    day: '2-digit', month: '2-digit', year: 'numeric',
                    hour: '2-digit', minute: '2-digit'
                });
            }

            const tr = document.createElement('tr');
            tr.className = 'hover:bg-[var(--color-section-alt)] transition-colors duration-200';

            tr.innerHTML = `
                <td class="p-4 whitespace-nowrap text-sm text-[var(--color-text-muted)]">
                    <div class="flex items-center gap-2">
                        <i data-lucide="calendar" class="w-4 h-4"></i> ${dateStr}
                    </div>
                </td>
                <td class="p-4">
                    <div class="flex flex-col">
                        <span class="font-bold text-[var(--color-heading)]">${escapeHTML(lead.name || 'Sem nome')}</span>
                        <a href="mailto:${escapeHTML(lead.email || '')}" class="text-sm text-primary hover:underline flex items-center gap-1 mt-1">
                            <i data-lucide="mail" class="w-3 h-3"></i> ${escapeHTML(lead.email || 'Sem email')}
                        </a>
                    </div>
                </td>
                <td class="p-4 whitespace-nowrap">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium bg-blue-500/10 text-blue-500 border border-blue-500/20">
                        <i data-lucide="building" class="w-3.5 h-3.5"></i>
                        ${escapeHTML(lead.company || 'Não informada')}
                    </span>
                </td>
                <td class="p-4 text-sm text-[var(--color-text)] max-w-xs md:max-w-md lg:max-w-lg">
                    <p class="truncate cursor-pointer hover:whitespace-normal hover:bg-[var(--color-bg)] hover:p-2 hover:rounded-md transition-all duration-300" title="${escapeHTML(lead.message || '')}">
                        ${escapeHTML(lead.message || 'Sem mensagem')}
                    </p>
                </td>
            `;

            tableBody.appendChild(tr);
        });

        if (window.lucide) {
            lucide.createIcons();
        }
    }

    // ======= TRACKING LINKS LOGIC =======
    const trackingForm = document.getElementById('tracking-form');
    const trackingTableBody = document.getElementById('tracking-table-body');
    const campaignFilter = document.getElementById('campaign-filter');

    trackingForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('track-name').value;
        const tag = document.getElementById('track-tag').value;
        const campaign = document.getElementById('track-campaign').value;

        try {
            const { data, error } = await supabase
                .from('tracking_links')
                .insert([{ name, tag, campaign }]);

            if (error) {
                if (error.code === '23505') { // Unique violation
                    alert('Erro: Já existe um link com esta Tag (Parâmetro URL). Escolha outra.');
                } else {
                    throw error;
                }
                return;
            }

            // Success
            trackingForm.reset();
            fetchTrackingLinks(); // Refresh table
            
        } catch (error) {
            console.error('Error creating tracking link:', error);
            alert('Erro ao criar link. Verifique o console.');
        }
    });

    async function fetchTrackingLinks() {
        try {
            const { data, error } = await supabase
                .from('tracking_links')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;

            renderTrackingLinks(data);
            updateCampaignFilterOptions(data);
            
        } catch (error) {
            console.error('Error fetching tracking links:', error);
            trackingTableBody.innerHTML = `<tr><td colspan="4" class="p-4 text-center text-red-500">Erro ao carregar links.</td></tr>`;
        }
    }

    function renderTrackingLinks(links) {
        if (!links || links.length === 0) {
            trackingTableBody.innerHTML = `<tr><td colspan="4" class="p-4 text-center text-[var(--color-text-muted)]">Nenhum link criado ainda.</td></tr>`;
            return;
        }

        trackingTableBody.innerHTML = '';
        const baseUrl = window.location.origin;

        links.forEach(link => {
            const generatedUrl = `${baseUrl}?ref=${escapeHTML(link.tag)}`;
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-[var(--color-section-alt)] transition-colors duration-200';

            tr.innerHTML = `
                <td class="p-4 font-medium text-[var(--color-heading)]">${escapeHTML(link.name)}</td>
                <td class="p-4">
                    <div class="flex items-center gap-2">
                        <input type="text" readonly value="${generatedUrl}" class="bg-[var(--color-bg)] text-xs text-[var(--color-text-muted)] px-2 py-1 rounded border border-[var(--color-border)] w-48 focus:outline-none">
                        <button onclick="navigator.clipboard.writeText('${generatedUrl}').then(() => alert('Link copiado!'))" class="text-primary hover:text-primary-dark transition-colors" title="Copiar Link">
                            <i data-lucide="copy" class="w-4 h-4"></i>
                        </button>
                    </div>
                </td>
                <td class="p-4 text-sm text-[var(--color-text-muted)]">${escapeHTML(link.campaign || '-')}</td>
                <td class="p-4">
                    <button class="text-red-500 hover:text-red-700 transition-colors delete-link-btn" data-id="${link.id}" title="Excluir Link">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </td>
            `;
            trackingTableBody.appendChild(tr);
        });

        // Add delete listeners
        document.querySelectorAll('.delete-link-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                if (confirm('Tem certeza que deseja excluir este link? O rastreamento de acessos futuros por essa tag não será mais filtrado nominalmente.')) {
                    try {
                        const { error } = await supabase.from('tracking_links').delete().eq('id', id);
                        if (error) throw error;
                        fetchTrackingLinks(); // Refresh
                    } catch (error) {
                        console.error('Error deleting link:', error);
                        alert('Erro ao excluir link.');
                    }
                }
            });
        });

        if (window.lucide) lucide.createIcons();
    }

    function updateCampaignFilterOptions(links) {
        // Keep "all" and "none" (direct), then append the dynamic ones
        let optionsHTML = `
            <option value="all">Todas as origens</option>
            <option value="none">Tráfego Direto (Sem tag)</option>
        `;
        
        if (links && links.length > 0) {
            optionsHTML += `<optgroup label="Campanhas Ativas">`;
            links.forEach(link => {
                optionsHTML += `<option value="${escapeHTML(link.tag)}">${escapeHTML(link.name)} (${escapeHTML(link.tag)})</option>`;
            });
            optionsHTML += `</optgroup>`;
        }
        
        // Save currently selected value to restore after update
        const currentVal = campaignFilter.value;
        campaignFilter.innerHTML = optionsHTML;
        
        // Try to restore previous selection if it still exists
        const optionExists = Array.from(campaignFilter.options).some(opt => opt.value === currentVal);
        if (optionExists) campaignFilter.value = currentVal;
    }

    function setupAnalyticsFilters() {
        campaignFilter.addEventListener('change', (e) => {
            fetchAnalytics(e.target.value);
        });
    }

    // ======= FETCH AND RENDER ANALYTICS =======
    async function fetchAnalytics(filterTag = 'all') {
        try {
            let query = supabase.from('analytics').select('*');
            
            // Apply filtering logic
            if (filterTag === 'none') {
                query = query.is('tracking_tag', null);
            } else if (filterTag !== 'all') {
                query = query.eq('tracking_tag', filterTag);
            }

            const { data, error } = await query;

            if (error) throw error;

            let views = 0;
            let whatsapp = 0;
            let forms = 0;

            if (data) {
                data.forEach(event => {
                    if (event.event_type === 'page_view') views++;
                    if (event.event_type === 'whatsapp_click') whatsapp++;
                    if (event.event_type === 'form_submit') forms++;
                });
            }

            // Animate number transition
            document.getElementById('stat-views').textContent = views;
            document.getElementById('stat-whatsapp').textContent = whatsapp;
            document.getElementById('stat-forms').textContent = forms;

        } catch (error) {
            console.error('Error fetching analytics:', error);
            document.getElementById('stat-views').textContent = 'Erro';
            document.getElementById('stat-whatsapp').textContent = 'Erro';
            document.getElementById('stat-forms').textContent = 'Erro';
        }
    }

    // Helper to prevent XSS
    function escapeHTML(str) {
        if (!str) return '';
        return str.toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // ======= THEME TOGGLE (Same logic as main page) =======
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.documentElement.classList.remove('light-mode');
        if (themeIcon) themeIcon.setAttribute('data-lucide', 'sun');
    } else {
        document.documentElement.classList.add('light-mode');
        if (themeIcon) themeIcon.setAttribute('data-lucide', 'moon');
    }

    if (window.lucide) {
        window.lucide.createIcons();
    }

    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('light-mode');
        const isLightMode = document.documentElement.classList.contains('light-mode');
        
        const newIcon = document.createElement('i');
        newIcon.id = 'theme-icon';
        newIcon.className = 'w-5 h-5';
        
        if (isLightMode) {
            localStorage.setItem('theme', 'light');
            newIcon.setAttribute('data-lucide', 'moon');
        } else {
            localStorage.setItem('theme', 'dark');
            newIcon.setAttribute('data-lucide', 'sun');
        }
        
        themeToggleBtn.innerHTML = '';
        themeToggleBtn.appendChild(newIcon);

        if (window.lucide) {
            window.lucide.createIcons();
        }
    });
});