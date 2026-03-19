document.addEventListener('DOMContentLoaded', () => {
    // ======= INITIALIZE LUCIDE =======
    if (window.lucide) {
        lucide.createIcons();
    }

    // ======= INITIALIZE SUPABASE =======
    const supabaseUrl = CONFIG.SUPABASE_URL;
    const supabaseKey = CONFIG.SUPABASE_KEY;
    const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

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

    // Load data
    fetchLeads();

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