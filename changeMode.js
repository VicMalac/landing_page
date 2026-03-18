document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Verifica tema salvo ou prefência do sistema
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        document.documentElement.classList.add('light-mode');
        themeIcon.setAttribute('data-lucide', 'moon');
    } else {
        themeIcon.setAttribute('data-lucide', 'sun');
    }

    // Re-renderiza ícones do Lucide
    if (window.lucide) {
        window.lucide.createIcons();
    }

    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('light-mode');
        
        const isLightMode = document.documentElement.classList.contains('light-mode');
        
        if (isLightMode) {
            localStorage.setItem('theme', 'light');
            themeIcon.setAttribute('data-lucide', 'moon');
        } else {
            localStorage.setItem('theme', 'dark');
            themeIcon.setAttribute('data-lucide', 'sun');
        }

        // Atualiza o ícone
        if (window.lucide) {
            window.lucide.createIcons();
        }
    });
});
