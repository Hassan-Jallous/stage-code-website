(function () {
    const path = window.location.pathname;
    const isHome = path === '/' || path.endsWith('/index.html') || (path.endsWith('/') && !path.includes('.html'));
    const prefix = isHome ? '' : 'index.html';

    // Inject navbar CSS
    const style = document.createElement('style');
    style.textContent = `
        /* Mobile Menu Animations */
        #mobile-menu.menu-open {
            transform: translateY(0);
        }
        #mobile-menu-overlay.menu-open {
            opacity: 1;
            pointer-events: auto;
        }
        .mobile-nav-link {
            opacity: 0;
            transform: translateX(-20px);
        }
        #mobile-menu.menu-open .mobile-nav-link {
            animation: slideInNav 0.4s ease-out forwards;
        }
        @keyframes slideInNav {
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        /* Hamburger animation */
        .hamburger-line {
            transition: all 0.3s ease;
        }
        .hamburger-open .hamburger-line:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger-open .hamburger-line:nth-child(2) {
            opacity: 0;
        }
        .hamburger-open .hamburger-line:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
        }
    `;
    document.head.appendChild(style);

    function getNavbarHTML() {
        return `<nav class="fixed top-0 w-full z-50 transition-all duration-500" id="navbar">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
            <a href="${prefix || 'index.html'}" class="text-2xl font-serif font-bold text-white tracking-wider no-underline">STAGE CODE</a>
            <div class="hidden md:flex items-center space-x-8">
                <a href="${prefix}#problem" class="text-white/80 hover:text-moss transition-colors text-sm uppercase tracking-widest">Problem</a>
                <a href="${prefix}#leistungen" class="text-white/80 hover:text-moss transition-colors text-sm uppercase tracking-widest">Lösung</a>
                <a href="${prefix}#prozess" class="text-white/80 hover:text-moss transition-colors text-sm uppercase tracking-widest">Methode</a>
                <a href="${prefix}#kontakt" class="bg-moss text-burgundy px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white transition-all duration-300">Analyse buchen</a>
            </div>
            <button class="md:hidden text-white" id="mobile-menu-btn">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
        </div>
    </div>
    <!-- Mobile Menu Overlay -->
    <div class="md:hidden fixed inset-0 z-40 pointer-events-none opacity-0 transition-opacity duration-300" id="mobile-menu-overlay">
        <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
    </div>
    <!-- Mobile Menu Panel -->
    <div class="md:hidden fixed top-0 left-0 right-0 z-50 transform -translate-y-full transition-transform duration-500 ease-out" id="mobile-menu">
        <div class="bg-burgundy/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
            <div class="flex justify-between items-center px-6 h-20 border-b border-white/10">
                <div class="text-2xl font-serif font-bold text-white tracking-wider">STAGE CODE</div>
                <button class="text-white/80 hover:text-white transition-colors p-2" id="mobile-menu-close">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
            </div>
            <div class="px-6 py-8 space-y-2">
                <a href="${prefix}#problem" class="mobile-nav-link block text-white/90 hover:text-white hover:bg-white/10 py-4 px-4 rounded-xl transition-all duration-300 text-lg tracking-wide" style="animation-delay: 0.1s">
                    <span class="flex items-center gap-4">
                        <span class="w-8 h-8 rounded-lg bg-moss/20 flex items-center justify-center text-moss text-sm">01</span>
                        Problem
                    </span>
                </a>
                <a href="${prefix}#leistungen" class="mobile-nav-link block text-white/90 hover:text-white hover:bg-white/10 py-4 px-4 rounded-xl transition-all duration-300 text-lg tracking-wide" style="animation-delay: 0.2s">
                    <span class="flex items-center gap-4">
                        <span class="w-8 h-8 rounded-lg bg-moss/20 flex items-center justify-center text-moss text-sm">02</span>
                        Lösung
                    </span>
                </a>
                <a href="${prefix}#prozess" class="mobile-nav-link block text-white/90 hover:text-white hover:bg-white/10 py-4 px-4 rounded-xl transition-all duration-300 text-lg tracking-wide" style="animation-delay: 0.3s">
                    <span class="flex items-center gap-4">
                        <span class="w-8 h-8 rounded-lg bg-moss/20 flex items-center justify-center text-moss text-sm">03</span>
                        Methode
                    </span>
                </a>
                <div class="pt-4 mt-4 border-t border-white/10">
                    <a href="${prefix}#kontakt" class="mobile-nav-link block bg-moss text-burgundy py-4 px-6 rounded-xl text-center font-semibold text-lg hover:bg-white transition-all duration-300" style="animation-delay: 0.4s">
                        Analyse buchen
                    </a>
                </div>
            </div>
        </div>
    </div>
</nav>`;
    }

    function getFooterHTML() {
        return `<footer class="bg-burgundy border-t border-white/10 py-12">
    <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
            <div class="text-2xl font-serif font-bold text-white tracking-wide">STAGE CODE</div>
            <div class="text-white/50 text-sm">Entertainment, das wirkt.</div>

            <!-- Social Links -->
            <div class="flex items-center gap-4">
                <a href="https://www.instagram.com/stage_code/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-moss hover:text-burgundy transition-all duration-300 text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.youtube.com/@StageCodeAgency/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-moss hover:text-burgundy transition-all duration-300 text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/stage-code-agency/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-moss hover:text-burgundy transition-all duration-300 text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
            </div>

            <div class="flex items-center gap-6 text-sm text-white/60">
                <a href="impressum.html" class="hover:text-white transition-colors">Impressum</a>
                <a href="datenschutz.html" class="hover:text-white transition-colors">Datenschutz</a>
                <a href="agb.html" class="hover:text-white transition-colors">AGB</a>
            </div>

            <div class="text-white/30 text-xs">&copy; 2026 Stage Code. Alle Rechte vorbehalten.</div>
        </div>
    </div>
</footer>`;
    }

    function initNavbar() {
        const navbar = document.getElementById('navbar');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenuClose = document.getElementById('mobile-menu-close');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

        // Scroll effect
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) {
                navbar.classList.add('bg-burgundy/95', 'backdrop-blur-lg', 'shadow-lg');
            } else {
                navbar.classList.remove('bg-burgundy/95', 'backdrop-blur-lg', 'shadow-lg');
            }
        });

        // Mobile menu open
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', function () {
                mobileMenu.classList.add('menu-open');
                mobileMenuOverlay.classList.add('menu-open');
                document.body.style.overflow = 'hidden';
            });
        }

        // Mobile menu close
        function closeMobileMenu() {
            mobileMenu.classList.remove('menu-open');
            mobileMenuOverlay.classList.remove('menu-open');
            document.body.style.overflow = '';
        }

        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', closeMobileMenu);
        }

        if (mobileMenuOverlay) {
            mobileMenuOverlay.addEventListener('click', closeMobileMenu);
        }

        // Close on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });

        // Close mobile menu on link click
        var mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
        mobileLinks.forEach(function (link) {
            link.addEventListener('click', closeMobileMenu);
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(function (link) {
            link.addEventListener('click', function (e) {
                var targetId = this.getAttribute('href').substring(1);
                var targetEl = document.getElementById(targetId);
                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                    closeMobileMenu();
                }
            });
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        var navbarPlaceholder = document.getElementById('navbar-placeholder');
        if (navbarPlaceholder) {
            navbarPlaceholder.outerHTML = getNavbarHTML();
        }

        var footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.outerHTML = getFooterHTML();
        }

        initNavbar();
    });
})();
