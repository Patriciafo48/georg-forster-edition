// Animation beim Seitenladen
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        el.style.opacity = 1;
    });
});

// Scroll zu Sektionen
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        window.location.href = 'about.html';
    });
}
