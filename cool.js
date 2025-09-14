const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const hamburger = document.getElementById('hamburger');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

        let menuOpen = false;

        function toggleMobileMenu() {
            menuOpen = !menuOpen;
            
            if (menuOpen) {
                mobileMenu.classList.add('active');
                hamburger.classList.add('active');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }

        mobileMenuBtn.addEventListener('click', toggleMobileMenu);

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menuOpen) {
                    toggleMobileMenu();
                }
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768 && menuOpen) {
                toggleMobileMenu();
            }
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        setTimeout(() => {
            document.querySelectorAll('.fade-in').forEach(el => {
                if (el.closest('section').id === '' || el.closest('section').classList.contains('min-h-screen')) {
                    el.classList.add('visible');
                }
            });
        }, 300);

        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 200;
                const sectionId = section.getAttribute('id');
            });

        });
