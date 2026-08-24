// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal-on-scroll
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));
} else {
    revealEls.forEach((el) => el.classList.add('in'));
}

// Mobile menu toggle — simple fallback: scroll nav links into a dropdown
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        const navlinks = document.querySelector('.navlinks');
        if (!navlinks) return;
        const isOpen = navlinks.style.display === 'flex';
        navlinks.style.cssText = isOpen
            ? ''
            : 'display:flex;flex-direction:column;position:absolute;top:76px;left:0;right:0;background:rgba(7,17,31,.97);padding:20px 24px;gap:18px;border-bottom:1px solid rgba(211,229,255,.13)';
    });
}
