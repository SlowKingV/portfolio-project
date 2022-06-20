const btnClose = document.getElementById('nav-close');
const btnOpen = document.getElementById('nav-open');
const linksContainer = document.querySelector('.links-container');

btnClose.addEventListener('click', () => {
    linksContainer.classList.remove('show-container');
});

btnOpen.addEventListener('click', () => {
    linksContainer.classList.add('show-container');
});