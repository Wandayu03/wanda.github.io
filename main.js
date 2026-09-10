const progressBar = document.querySelector('.scroll-progress');
const projectCards = document.querySelectorAll('.polaroid');
const emailLink = document.querySelector('[data-copy-email]');

function updateScrollProgress() {
    if (!progressBar) {
        return;
    }

    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0
        ? (window.scrollY / scrollableHeight) * 100
        : 0;

    progressBar.style.width = `${progress}%`;
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();

projectCards.forEach((card) => {
    card.addEventListener('click', () => {
        projectCards.forEach((projectCard) => projectCard.classList.remove('is-selected'));
        card.classList.add('is-selected');
    });
});


