const projectsData = [
  {
    id: "intranet",
    company: "VIA DOLCE JOIAS",
    category: "ERP & Gestão",
    title: "Intranet ERP",
    shortDescription: "Centralização dos dados do ERP, sistema de contratos, geração de gráficos gerenciais, metas e filtros de clientes.",
    fullDescription: "Centralização de todos os dados do ERP em uma Intranet moderna com sistema de contratos integrado. Geração de gráficos em tempo real, gestão de metas individuais para cada colaborador e listas de clientes com filtros avançados, incluindo alertas para clientes sem movimentação (maleta) há X dias (atacado e consignado).",
    features: [
      { text: "Sistema de Contratos", colorClass: "text-primary" },
      { text: "Gráficos e Relatórios", colorClass: "text-primary" },
      { text: "Metas por Colaborador", colorClass: "text-primary" }
    ],
    techs: ["React", "Node.js", "PostgreSQL"],
    icon: "network",
    iconBgClass: "bg-blue-500/10",
    iconColorClass: "text-blue-400"
  },
  {
    id: "rh",
    company: "VIA DOLCE JOIAS",
    category: "Recursos Humanos",
    title: "Sistema de RH 360º",
    shortDescription: "Controle total desde o recrutamento até o ponto com QR Code, PDI, ocorrências, financeiro do funcionário e admissões.",
    fullDescription: "Sistema de RH completo com cadastro de funcionários, processos de admissão, gestão de vagas, Plano de Desenvolvimento Individual (PDI), registro de ocorrências, faltas, férias, controle financeiro do funcionário (para a empresa) e controle de ponto com QR Code integrado.",
    features: [
      { text: "Ponto via QR Code", colorClass: "text-secondary" },
      { text: "Controle Financeiro e Férias", colorClass: "text-secondary" },
      { text: "Vagas, PDI e Ocorrências", colorClass: "text-secondary" }
    ],
    techs: ["Vue.js", "Firebase", "QR Code API"],
    icon: "users",
    iconBgClass: "bg-purple-500/10",
    iconColorClass: "text-purple-400"
  },
  {
    id: "garantias",
    company: "VIA DOLCE JOIAS",
    category: "Controle Operacional",
    title: "Garantias & Personalizados",
    shortDescription: "Substituição de processos manuais com papel por um banco de dados dedicado. Controle de ganhos com banho/consertos e migração de planilha de 8 mil linhas.",
    fullDescription: "Substituição total de processos manuais (papel e pastas) por um sistema dedicado. Migração de uma planilha de 8 mil linhas desde 2015. Facilita a criação de pedidos de personalização (colares, pulseiras), controle de orçamentos (banho/conserto) e lucros, tudo em nuvem via Firebase.",
    features: [
      { text: "Controle Financeiro de Consertos", colorClass: "text-orange-400" },
      { text: "Fim do uso de pastas e papéis", colorClass: "text-orange-400" },
      { text: "Firebase Cloud Storage", colorClass: "text-orange-400" }
    ],
    techs: ["Vanilla JS", "Firebase Auth", "Cloud Firestore"],
    icon: "wrench",
    iconBgClass: "bg-orange-500/10",
    iconColorClass: "text-orange-400"
  },
  {
    id: "app",
    company: "VIA DOLCE JOIAS",
    category: "Mobile & Web App",
    title: "Refatoração de App",
    shortDescription: "Reescrita completa do aplicativo de PHP/Bootstrap para React e Vite, modernizando a interface e melhorando a performance.",
    fullDescription: "Atualização completa da linguagem e arquitetura do aplicativo mobile/web da empresa. O sistema anterior era construído em PHP com Bootstrap e foi totalmente recriado e modernizado utilizando React e Vite, entregando muito mais performance e escalabilidade.",
    features: [
      { text: "React + Vite", colorClass: "text-emerald-400" },
      { text: "UI/UX Modernizado", colorClass: "text-emerald-400" },
      { text: "Integração com MySQL/PostgreSQL", colorClass: "text-emerald-400" }
    ],
    techs: ["React", "Vite", "Tailwind CSS"],
    icon: "smartphone",
    iconBgClass: "bg-emerald-500/10",
    iconColorClass: "text-emerald-400"
  },
  {
    id: "pinturas",
    company: "DGS PINTURAS",
    category: "Gestão de Obras",
    title: "Gestão de Obras & CRM",
    shortDescription: "Substituição do bloco de notas por um sistema completo de gestão de clientes, serviços, funcionários e geração de PDF de orçamentos.",
    fullDescription: "Sistema de gestão que substituiu anotações em blocos de notas do celular. Inclui gestão de clientes, serviços, obras, funcionários, assinaturas digitais, orçamentos e geração automatizada de PDFs detalhando custos de material e mão de obra.",
    features: [
      { text: "Geração Automática de PDFs", colorClass: "text-cyan-400" },
      { text: "Assinatura Digital do Cliente", colorClass: "text-cyan-400" },
      { text: "Controle de Materiais e Serviços", colorClass: "text-cyan-400" }
    ],
    techs: ["Next.js", "Prisma", "PDF-lib"],
    icon: "paint-roller",
    iconBgClass: "bg-cyan-500/10",
    iconColorClass: "text-cyan-400"
  },
  {
    id: "suplementos",
    company: "LGS SUPLEMENTOS",
    category: "Estoque & Leads",
    title: "Controle de Estoque & Leads",
    shortDescription: "Sistema para cadastro de clientes e leads com controle de estoque atualizado e geração de tabelas de uso personalizadas.",
    fullDescription: "Planejamento e desenvolvimento de um sistema completo para controle de estoque e CRM para loja de suplementos. Cadastro de clientes/leads com geração de tabela de uso recomendada baseada no peso, idade e aptidão física do cliente.",
    features: [
      { text: "Gestão de Inventário", colorClass: "text-emerald-400" },
      { text: "Tabela de Uso por Peso/Idade", colorClass: "text-emerald-400" },
      { text: "Acompanhamento de Leads", colorClass: "text-emerald-400" }
    ],
    techs: ["Supabase", "React", "Chart.js"],
    icon: "dumbbell",
    iconBgClass: "bg-emerald-500/10",
    iconColorClass: "text-emerald-400"
  },
  {
    id: "lp-ai",
    company: "VIA DOLCE JOIAS",
    category: "Marketing & IA",
    imageCount: 2,
    title: "LP & Estúdio Fotográfico IA",
    shortDescription: "Criação de LP que aumentou a captação em 20%. Sistema de IA usando Gemini e OpenAI para transformar fotos amadoras de produtos em imagens profissionais de estúdio.",
    fullDescription: "Criação de Landing Page que aumentou a captação de leads em 20%. Desenvolvimento de um sistema integrado onde o usuário envia fotos simples de produtos e o sistema retorna imagens com estilo 100% profissional. Utiliza tokens do Gemini (Google AI Studio) e API OpenAI, economizando milhares de reais em assinaturas externas.",
    features: [
      { text: "+20% Captação de Leads", colorClass: "text-indigo-400" },
      { text: "Google AI Studio (Gemini)", colorClass: "text-indigo-400" },
      { text: "OpenAI API Image Gen", colorClass: "text-indigo-400" }
    ],
    techs: ["Next.js", "OpenAI API", "Gemini API"],
    icon: "sparkles",
    iconBgClass: "bg-indigo-500/10",
    iconColorClass: "text-indigo-400"
  },
  {
    id: "planner",
    company: "Fatec",
    category: "Produtividade",
    title: "Super Planner Acadêmico",
    shortDescription: "Sistema de produtividade completo com notas estilo Notion, rotina, treinos, finanças, técnica Pomodoro e mapas mentais.",
    fullDescription: "Plataforma completa para estudantes gerenciarem a vida acadêmica. Notas estilo Notion, diários de humor, snippets de código, planejamento de rotina/treinos, guarda de PDFs, watchlists de cursos, certificados. Inclui gestão financeira, técnica Pomodoro com sons, estatísticas de estudo, sistema de decisões (Prós e Contras / Matriz Ponderada) e gamificação (XP e ranking).",
    features: [
      { text: "Notas e Snippets (Notion-like)", colorClass: "text-sky-400" },
      { text: "Finanças e Calculadora de Invest.", colorClass: "text-sky-400" },
      { text: "Pomodoro, Flashcards e Mapas Mentais", colorClass: "text-sky-400" }
    ],
    techs: ["React", "Redux", "Supabase RLS"],
    icon: "book-open",
    iconBgClass: "bg-sky-500/10",
    iconColorClass: "text-sky-400"
  },
  {
    id: "cofre",
    company: "Fatec",
    category: "Segurança & Gamificação",
    title: "Cofre Pessoal & Gamificação",
    shortDescription: "Módulo de segurança para senhas/cartões, matriz de decisões ponderada e comunidade com sistema de XP, loja e ranking.",
    fullDescription: "Módulo de alta segurança integrado ao Planner Acadêmico, focado na privacidade do usuário. Permite que os usuários guardem senhas e dados de cartões com total segurança criptográfica dentro da plataforma. Também inclui loja de XP para personalização de perfil.",
    features: [
      { text: "Cofre Criptografado de Senhas", colorClass: "text-yellow-500" },
      { text: "Matriz Ponderada de Decisões", colorClass: "text-yellow-500" },
      { text: "Ranking XP e Loja Virtual", colorClass: "text-yellow-500" }
    ],
    techs: ["Web Crypto API", "Node.js", "Supabase"],
    icon: "shield-check",
    iconBgClass: "bg-yellow-500/10",
    iconColorClass: "text-yellow-400"
  }
];

// Funções para lidar com as imagens usando fallback (.png -> .jpg -> .gif)
function createProjectImage(id) {
    const imgExtensions = ['.png', '.jpg', '.gif'];
    let currentIdx = 0;
    
    const imgElement = document.createElement('img');
    imgElement.className = "w-full h-48 object-cover object-top border-b border-[var(--color-border)] rounded-t-2xl transition-opacity duration-300";
    imgElement.alt = `Preview do projeto ${id}`;
    
    // Lazy loading properties for performance on slow connections
    imgElement.loading = "lazy";
    imgElement.decoding = "async";
    
    // Start with low opacity for smooth load transition
    imgElement.style.opacity = "0";

    // Fallback logic
    imgElement.onerror = function() {
        currentIdx++;
        if (currentIdx < imgExtensions.length) {
            this.src = `./imgs/${id}${imgExtensions[currentIdx]}`;
        } else {
            // Se nenhum funcionar, cria um placeholder ou esconde
            this.style.display = 'none';
        }
    };

    imgElement.onload = function() {
        this.style.opacity = "1";
    }
    
    // Tenta primeiro PNG
    imgElement.src = `./imgs/${id}${imgExtensions[0]}`;
    return imgElement;
}

// Renderizar cards no index.html
function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    projectsData.forEach((project, index) => {
        // Criar card container
        const card = document.createElement('div');
        // Define data-id e as classes para a animação do index.html (tilt, glow, scroll observer)
        card.setAttribute('data-id', project.id);
        card.className = "glass-card tilt-card cursor-pointer glow-effect rounded-2xl transition-all duration-300 glow-hover reveal-scale group relative overflow-hidden flex flex-col";
        // Aplica um pequeno delay dependendo do index para o efeito de cascata (como no HTML original)
        if (index % 3 === 1) card.classList.add('delay-100');
        if (index % 3 === 2) card.classList.add('delay-200');

        card.onclick = () => openProjectModal(project.id);

        // Top Image Wrapper
        const imgWrapper = document.createElement('div');
        imgWrapper.className = "w-full bg-[var(--color-section-alt)] flex items-center justify-center relative rounded-t-2xl";
        const img = createProjectImage(project.id);
        imgWrapper.appendChild(img);
        
        // Se a imagem não carregar, isso deixa o card com o design fallback
        const iconFallbackContainer = document.createElement('div');
        iconFallbackContainer.className = `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl flex items-center justify-center ${project.iconBgClass} project-icon-container opacity-0 transition-opacity`;
        iconFallbackContainer.innerHTML = `<i data-lucide="${project.icon}" class="${project.iconColorClass} w-8 h-8"></i>`;
        
        // Se a img for hidden (onerror total), mostra o icon fallback no lugar do topo cinza vazio
        img.addEventListener('error', function fallbackIcon() {
             if (img.style.display === 'none') {
                 imgWrapper.style.minHeight = "192px"; // 48 tailwind units
                 iconFallbackContainer.classList.remove('opacity-0');
             }
        });
        
        imgWrapper.appendChild(iconFallbackContainer);

        // Tag da empresa na imagem
        const companyTag = document.createElement('div');
        companyTag.className = "absolute top-4 right-4 bg-black/60 text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 backdrop-blur-md z-10 uppercase tracking-wide project-company";
        companyTag.textContent = project.company;
        imgWrapper.appendChild(companyTag);

        card.appendChild(imgWrapper);

        // Card Content Padding
        const contentDiv = document.createElement('div');
        contentDiv.className = "p-6 sm:p-8 flex flex-col flex-grow";

        // Categoria / Tipo
        const categoryLabel = document.createElement('span');
        categoryLabel.className = "text-xs font-semibold uppercase tracking-widest text-primary mb-2";
        categoryLabel.textContent = project.category;
        contentDiv.appendChild(categoryLabel);

        // Título
        const title = document.createElement('h3');
        title.className = "text-xl font-bold text-[var(--color-heading)] mb-3 project-title";
        title.textContent = project.title;
        contentDiv.appendChild(title);

        // Descrição
        const desc = document.createElement('p');
        desc.className = "text-[var(--color-text-muted)] text-sm mb-6 line-clamp-3 project-description";
        desc.setAttribute('data-full-text', project.fullDescription);
        desc.textContent = project.shortDescription;
        contentDiv.appendChild(desc);

        // Features list hidden div (usada pelo modal)
        const featuresUl = document.createElement('ul');
        featuresUl.className = "project-features hidden";
        project.features.forEach(feat => {
            const li = document.createElement('li');
            li.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4 ${feat.colorClass}"></i> ${feat.text}`;
            featuresUl.appendChild(li);
        });
        contentDiv.appendChild(featuresUl);

        // Separator e Techs (Rodapé do Card)
        const techDiv = document.createElement('div');
        techDiv.className = "mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2";
        project.techs.forEach(tech => {
            const techSpan = document.createElement('span');
            techSpan.className = "px-2.5 py-1 rounded-md bg-[var(--color-bg)] border border-[var(--color-border)] text-[10px] font-medium text-[var(--color-text-muted)]";
            techSpan.textContent = tech;
            techDiv.appendChild(techSpan);
        });
        contentDiv.appendChild(techDiv);

        card.appendChild(contentDiv);
        container.appendChild(card);
    });

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

document.addEventListener('DOMContentLoaded', renderProjects);

// Cache Global de Imagens Resolvidas para não testar a rede duas vezes (ex: modal)
window.projectImageCache = {};

// Global Modal Functions
window.activeModalProjectId = null;

window.openProjectModal = function(projectId) {
    window.activeModalProjectId = projectId;
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('projectModal');
    if (!modal) return;

    document.getElementById('modalProjectTitle').textContent = project.title;
    document.getElementById('modalProjectDescription').textContent = project.fullDescription;
    
    const companyBadge = document.getElementById('modalProjectCompany');
    if (companyBadge && project.company) {
        companyBadge.textContent = project.company;
        companyBadge.style.display = 'block';
    } else if (companyBadge) {
        companyBadge.style.display = 'none';
    }

    const modalIconContainer = document.getElementById('modalProjectIcon');
    if (modalIconContainer) {
        modalIconContainer.innerHTML = `<i data-lucide="${project.icon}" class="${project.iconColorClass} w-8 h-8"></i>`;
        modalIconContainer.className = `w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${project.iconBgClass}`;
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    // Features
    const modalFeatures = document.getElementById('modalProjectFeatures');
    if (modalFeatures) {
        modalFeatures.innerHTML = '';
        project.features.forEach(feat => {
            const li = document.createElement('li');
            li.className = "flex items-center gap-2 text-[var(--color-text-muted)] mb-2";
            li.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4 ${feat.colorClass}"></i> ${feat.text}`;
            modalFeatures.appendChild(li);
        });
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    // Imagem do Modal
    const imgContainer = document.getElementById('modalProjectImageContainer');
    const imgEl = document.getElementById('modalProjectImage');
    const scrollArea = document.getElementById('modalImageScrollArea');
    const scrollIndicator = document.getElementById('modalScrollIndicator');
    const thumbnailsContainer = document.getElementById('modalProjectThumbnails');
    
    if (imgContainer) imgContainer.classList.add('hidden');
    if (imgEl) imgEl.src = '';
    
    if (thumbnailsContainer) {
        thumbnailsContainer.innerHTML = '';
        thumbnailsContainer.classList.add('hidden');
    }
    
    const imgExtensions = ['.png', '.jpg', '.gif'];
    let validImages = [];

    const createThumbnail = (src, isFirst) => {
        const thumbWrapper = document.createElement('div');
        thumbWrapper.className = `shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 cursor-pointer transition-all hover:opacity-100 ${isFirst ? 'border-primary opacity-100' : 'border-transparent opacity-60'}`;
        thumbWrapper.onclick = () => {
            imgEl.src = src;
            Array.from(thumbnailsContainer.children).forEach(child => {
                child.classList.remove('border-primary', 'opacity-100');
                child.classList.add('border-transparent', 'opacity-60');
            });
            thumbWrapper.classList.remove('border-transparent', 'opacity-60');
            thumbWrapper.classList.add('border-primary', 'opacity-100');
        };

        const thumbImg = document.createElement('img');
        thumbImg.src = src;
        thumbImg.className = "w-full h-full object-cover";
        thumbWrapper.appendChild(thumbImg);
        
        return thumbWrapper;
    };

    const numImages = project.imageCount || 1;
    let loadedMainImage = false;
    let mainImgExtension = '';

    const loadImages = () => {
        if (window.activeModalProjectId !== project.id) return;

        // Check if images are already cached AND fully loaded
        if (window.projectImageCache[project.id] && window.projectImageCache[project.id].status === 'loaded') {
            const cachedImages = window.projectImageCache[project.id].images;
            
            if (cachedImages.length > 0) {
                imgContainer.classList.remove('hidden');
                imgEl.src = cachedImages[0];
                
                if (thumbnailsContainer && cachedImages.length > 1) {
                    thumbnailsContainer.classList.remove('hidden');
                    cachedImages.forEach((src, idx) => {
                        thumbnailsContainer.appendChild(createThumbnail(src, idx === 0));
                    });
                }
            } else {
                imgContainer.classList.add('hidden');
            }
            return; // Exit early since images are ready
        }
        
        // Se já está carregando em background por outro clique, não refaça os loaders,
        // apenas continue (ou você poderia se inscrever para receber o resultado,
        // mas em modals simples, basta deixar o background terminar e recarregar).
        if (window.projectImageCache[project.id] && window.projectImageCache[project.id].status === 'loading') {
            // Em uma situação ideal, você aguardaria a promise, mas para ser simples e não travar:
            // Vamos apenas rodar a lógica para garantir que a UI deste modal se preencha.
            // Para não causar chamadas de rede redundantes desnecessárias, deixaremos
            // o navegador cuidar do cache de imagem nativo.
        }

        // Initialize cache for this project as loading
        window.projectImageCache[project.id] = { status: 'loading', images: [] };
        let localLoadedImagesCount = 0;

        const checkCompletion = () => {
            if (localLoadedImagesCount === numImages || (!loadedMainImage && localLoadedImagesCount > 0)) {
                // Marcar cache como completo quando terminar
                window.projectImageCache[project.id].status = 'loaded';
            }
        };

        let mainImgExtIdx = 0;
        const tryMainImage = () => {
            if (window.activeModalProjectId !== project.id) return;

            if (mainImgExtIdx < imgExtensions.length) {
                const ext = imgExtensions[mainImgExtIdx];
                const src = `./imgs/${project.id}${ext}`;
                const tester = new Image();
                
                tester.onload = () => {
                    // Adiciona a imagem ao cache
                    window.projectImageCache[project.id].images.push(src);
                    localLoadedImagesCount++;
                    
                    if (window.activeModalProjectId !== project.id) {
                         checkCompletion();
                         return; // Continua carregando pro cache, mas para de mexer no DOM
                    }
                    
                    loadedMainImage = true;
                    mainImgExtension = ext;
                    
                    imgContainer.classList.remove('hidden');
                    imgEl.src = src;
                    
                    if (thumbnailsContainer && numImages > 1) {
                        thumbnailsContainer.appendChild(createThumbnail(src, true));
                    }
                    
                    if (numImages > 1) {
                        for (let i = 2; i <= numImages; i++) {
                            loadAdditionalImage(i);
                        }
                    } else {
                        checkCompletion();
                    }
                };
                tester.onerror = () => {
                    if (window.activeModalProjectId !== project.id) return;
                    mainImgExtIdx++;
                    tryMainImage();
                };
                tester.src = src;
            } else {
                imgContainer.classList.add('hidden');
                localLoadedImagesCount++; // marca como testado para fechar
                checkCompletion();
            }
        };

        const loadAdditionalImage = (index) => {
            const src = `./imgs/${project.id}-${index}${mainImgExtension}`;
            const tester = new Image();
            
            tester.onload = () => {
                // Adiciona ao cache incondicionalmente
                window.projectImageCache[project.id].images.push(src);
                localLoadedImagesCount++;
                checkCompletion();
                
                if (window.activeModalProjectId !== project.id) return;
                
                if (thumbnailsContainer) {
                    thumbnailsContainer.appendChild(createThumbnail(src, false));
                    // Ordenar as imagens e miniaturas caso terminem em ordens diferentes
                    if (window.projectImageCache[project.id].images.length > 1) {
                        thumbnailsContainer.classList.remove('hidden');
                    }
                }
            };
            tester.onerror = () => {
                localLoadedImagesCount++;
                checkCompletion();
            };
            tester.src = src;
        };

        tryMainImage();
    };

    loadImages();

    // Lógica Específica para Imagens Verticais (ex: 'app')
    if (scrollArea) {
        scrollArea.scrollTop = 0;
        
        if (project.id === 'app') {
            scrollArea.classList.add('max-h-[400px]', 'overflow-y-auto');
            scrollArea.classList.remove('overflow-hidden');
            
            if (scrollIndicator) {
                scrollIndicator.classList.remove('hidden');
                scrollIndicator.classList.remove('opacity-0');
                
                let isHidden = false;
                
                scrollArea.onscroll = () => {
                    const shouldHide = scrollArea.scrollTop > 10;
                    if (shouldHide && !isHidden) {
                        scrollIndicator.classList.add('opacity-0');
                        isHidden = true;
                    } else if (!shouldHide && isHidden) {
                        scrollIndicator.classList.remove('opacity-0');
                        isHidden = false;
                    }
                };
            }
        } else {
            scrollArea.classList.remove('max-h-[400px]', 'overflow-y-auto');
            scrollArea.classList.add('overflow-hidden');
            scrollArea.onscroll = null;
            if (scrollIndicator) {
                scrollIndicator.classList.add('hidden');
            }
        }
    }

    // Mostrar modal
    modal.classList.add('active');
    modal.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden'; 
};

// Funções para a imagem Fullscreen
window.openFullscreenImage = function(src) {
    const fsModal = document.getElementById('fullscreenImageModal');
    const fsImg = document.getElementById('fullscreenImage');
    
    if (fsModal && fsImg) {
        fsImg.src = src;
        fsModal.classList.remove('opacity-0', 'pointer-events-none');
        // Adiciona scale pra animação
        setTimeout(() => fsImg.classList.remove('scale-95'), 50);
    }
}

window.closeFullscreenImage = function() {
    const fsModal = document.getElementById('fullscreenImageModal');
    const fsImg = document.getElementById('fullscreenImage');
    
    if (fsModal && fsImg) {
        fsModal.classList.add('opacity-0', 'pointer-events-none');
        fsImg.classList.add('scale-95');
    }
}