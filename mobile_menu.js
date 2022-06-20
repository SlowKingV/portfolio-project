const btnClose = document.getElementById('nav-close');
const btnOpen = document.getElementById('nav-open');
const linksContainer = document.querySelector('.links-container');
const header = document.getElementById('toolbar');
const menuItems = document.querySelectorAll('.nav-links');

const toolbarStyle = () => {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) header.classList.add('header-bg');
  else header.classList.remove('header-bg');
};
const closeMenu = () => {
  linksContainer.classList.remove('show-container');
};
const openMenu = () => {
  linksContainer.classList.add('show-container');
};

btnClose.addEventListener('click', closeMenu);
btnOpen.addEventListener('click', openMenu);
menuItems.forEach((item) => {
  item.addEventListener('click', closeMenu);
});

window.onscroll = toolbarStyle;
window.onload = toolbarStyle;
