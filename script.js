document.addEventListener('DOMContentLoaded', () => {
    // Atualizar ano do copyright
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Initialize Lucide Icons
    lucide.createIcons();

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-lg', 'bg-dark/80', 'border-b', 'border-white/10');
            navbar.classList.remove('border-b-0');
        } else {
            navbar.classList.remove('shadow-lg', 'bg-dark/80', 'border-b', 'border-white/10');
            navbar.classList.add('border-b-0');
        }
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .animate-scale-y, .word-reveal').forEach((el) => {
        observer.observe(el);
    });

    // Word Reveal Delay Logic (add staggered delay to spans inside .word-reveal)
    document.querySelectorAll('.word-reveal').forEach((el) => {
        const spans = el.querySelectorAll('span');
        spans.forEach((span, index) => {
            span.style.transitionDelay = `${index * 100}ms`;
        });
    });

    // Parallax Blobs
    const blobs = document.querySelectorAll('.animate-blob');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    // Staggered Fade-In for Grid Cards
    const gridCardsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Apply a staggered delay based on index for the grid layout
                setTimeout(() => {
                    entry.target.classList.add('active');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.tilt-wrapper .glass-card').forEach((el) => {
        // Initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px) scale(0.95)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        gridCardsObserver.observe(el);
    });

    // Glow Interactive Effect
    document.querySelectorAll('.glow-effect').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    // 3D Tilt Effect
    document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate rotation (max 10 degrees)
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    // Scrollspy Highlight
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active', 'text-primary');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active', 'text-primary');
            }
        });
    });

    // Modal Logic
    const modal = document.getElementById('contactModal');
    const openBtns = document.querySelectorAll('.open-modal');
    const closeBtn = document.getElementById('closeModal');
    
    // Open modal
    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close modal function
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    };

    // Close on button click
    closeBtn.addEventListener('click', closeModal);

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Handle form submission (prevent default and simulate sending)
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Enviando...';
        lucide.createIcons();
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            submitBtn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i> Mensagem Enviada!';
            lucide.createIcons();
            submitBtn.classList.add('bg-green-500', 'hover:bg-green-600');
            submitBtn.classList.remove('bg-primary', 'hover:bg-blue-600');
            
            setTimeout(() => {
                closeModal();
                form.reset();
                // Reset button
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    lucide.createIcons();
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('bg-green-500', 'hover:bg-green-600');
                    submitBtn.classList.add('bg-primary', 'hover:bg-blue-600');
                }, 300);
            }, 1500);
        }, 1500);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Verifica tema salvo ou prefência do sistema
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.documentElement.classList.remove('light-mode');
        themeIcon.setAttribute('data-lucide', 'sun');
    } else {
        document.documentElement.classList.add('light-mode');
        themeIcon.setAttribute('data-lucide', 'moon');
    }

    // Re-renderiza ícones do Lucide
    if (window.lucide) {
        window.lucide.createIcons();
    }

    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('light-mode');
        
        const isLightMode = document.documentElement.classList.contains('light-mode');
        
        // As lucide.createIcons() replaces the original <i> element with an <svg>,
        // we must empty the button and insert a new <i> tag before re-rendering.
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

        // Atualiza o ícone
        if (window.lucide) {
            window.lucide.createIcons();
        }
    });
});
