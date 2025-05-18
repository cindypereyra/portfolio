// Dark Mode Toggle
        const botonDarkMode = document.getElementById('botonDarkMode');
        const darkModeIcon = document.getElementById('darkModeIcon');
        const body = document.body;

        // Check for saved user preference or use system preference
        const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedMode = localStorage.getItem('darkMode');

        if (savedMode === 'dark' || (!savedMode && userPrefersDark)) {
            body.classList.add('dark-mode');

        }

        botonDarkMode.addEventListener('click', () => {
            body.classList.toggle('dark-mode');

            if (body.classList.contains('dark-mode')) {

                localStorage.setItem('darkMode', 'dark');
            } else {
                darkModeIcon.classList.remove('fa-sun');
                darkModeIcon.classList.add('fa-moon');
                localStorage.setItem('darkMode', 'light');
            }
        });

        // Mobile Menu Toggle

        
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('d-block'); 
            mobileMenu.classList.toggle('d-none'); 
        });


        // Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        // Si el href es solo "#", no hacer nada
        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        // Solo prevenir el default si el target existe
        if (targetElement) {
            e.preventDefault();

            // Cierra el menú móvil si está abierto
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.add('d-none');
            }

            // Hace scroll suave
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
