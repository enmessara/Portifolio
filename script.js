document.addEventListener('DOMContentLoaded', () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mobile menu
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    const setMenu = open => {
        menu.classList.toggle('active', open);
        toggle.setAttribute('aria-expanded', String(open));
    };
    toggle.addEventListener('click', () => setMenu(!menu.classList.contains('active')));
    document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

    // Reveal project cards (CSS-free fallback: visible if reduced motion)
    const cards = document.querySelectorAll('.project-card');
    if (!reduceMotion && 'IntersectionObserver' in window) {
        const reveal = new IntersectionObserver(entries => {
            entries.forEach(en => {
                if (en.isIntersecting) {
                    en.target.style.opacity = '1';
                    en.target.style.transform = 'translateY(0)';
                    reveal.unobserve(en.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            reveal.observe(card);
        });
    }

    // Navbar background on scroll
    const nav = document.querySelector('.navbar');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Active nav link while scrolling
    const links = [...document.querySelectorAll('.nav-link')];
    if ('IntersectionObserver' in window) {
        const spy = new IntersectionObserver(entries => {
            entries.forEach(en => {
                if (en.isIntersecting) {
                    links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + en.target.id));
                }
            });
        }, { rootMargin: '-40% 0px -55% 0px' });
        links.forEach(l => {
            const s = document.querySelector(l.getAttribute('href'));
            if (s) spy.observe(s);
        });
    }

    // Contact form: opens the visitor's email app. To receive messages directly,

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const d = new FormData(form);
        const body = encodeURIComponent(d.get('message') + '\n\nFrom: ' + d.get('name') + ' (' + d.get('email') + ')');
        document.getElementById('form-note').textContent = 'Opening your email app...';
        window.location.href = 'mailto:bensonngugi@proton.me?subject=' + encodeURIComponent('Portfolio enquiry from ' + d.get('name')) + '&body=' + body;
    });

    // Theme toggle (dark default, remembered)
    const root = document.documentElement;
    const themeBtn = document.getElementById('theme-toggle');
    const paintTheme = () => {
        const light = root.dataset.theme === 'light';
        themeBtn.innerHTML = light ? '&#9790;' : '&#9728;';
        themeBtn.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
    };
    paintTheme();
    themeBtn.addEventListener('click', () => {
        root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
        try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
        paintTheme();
    });

    // Project filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const groups = document.querySelectorAll('.category-section');
    filterBtns.forEach(btn => btn.addEventListener('click', () => {
        const f = btn.dataset.filter;
        filterBtns.forEach(b => {
            const on = b === btn;
            b.classList.toggle('is-active', on);
            b.setAttribute('aria-pressed', String(on));
        });
        groups.forEach(g => { g.hidden = !(f === 'all' || g.id === f); });
    }));

});
