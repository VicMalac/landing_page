document.addEventListener('DOMContentLoaded', () => {
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

    document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
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