/* Define elements needed for interaction */
const btnOpen = document.getElementById('nav-open');
const linksContainer = document.querySelector('.links-container');
const header = document.getElementById('toolbar');

const closeMenuItems = {} //Store elements that will close menu on click
closeMenuItems.btnClose = document.getElementById('nav-close');
closeMenuItems.linksContainer = linksContainer;
document.querySelectorAll('.nav-links').forEach((item, index) => {
  closeMenuItems[`navLink${index}`] = item;
});

/* Page interaction functions */
const toolbarStyle = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) header.classList.add('header-bg');
  else header.classList.remove('header-bg');
};
const closeMenu = () => {
  linksContainer.classList.remove('show-container');
};
const openMenu = () => {
  linksContainer.classList.add('show-container');
};

/* Add listener to elements */
btnOpen.addEventListener('click', openMenu);
for (let item in closeMenuItems) {
  closeMenuItems[item].addEventListener('click', closeMenu);
}

/* Toolbar update */
window.onscroll = toolbarStyle;
window.onload = toolbarStyle;

/* WORKS SECTION POPULATE */


const createHtmlCard = (data) => {
  let infoElements = '';
  let tagElements = '';

  data.info.forEach((value) => {
    infoElements = infoElements.concat(`      <li class="info-item">${value}</li><li class="dot"></li>\n`);
  });
  data.tags.forEach((value) => {
    tagElements = tagElements.concat(`      <li>${value}</li>\n`)
  });

  let htmlTemplate = `
<section class="card">
  <a href="#"><img src="assets/work_${data.index}.png" alt="Preview of the project ${data.name}"></a>
  <div class="card-content">
    <h2>${data.name}</h2>
    <ul class="info">
${infoElements}
    </ul>
    <p class="description">${data.description}</p>
    <ul class="tags">
${tagElements}
    </ul>
    <button type="button" class="btn-more">See Project</button>
  </div>
</section>
`;

  return htmlTemplate;
}