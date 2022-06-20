const btnClose = document.getElementById('nav-close');
const btnOpen = document.getElementById('nav-open');
const linksContainer = document.querySelector('.links-container');
const header = document.getElementById('toolbar');

const toolbarStyle = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) header.classList.add('header-bg');
    else header.classList.remove('header-bg');
}

btnClose.addEventListener('click', () => {
    linksContainer.classList.remove('show-container');
});

btnOpen.addEventListener('click', () => {
    linksContainer.classList.add('show-container');
});

window.onscroll = toolbarStyle;
window.onload = toolbarStyle;
