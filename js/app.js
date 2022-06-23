// Define elements needed for interaction
const btnOpen = document.getElementById('nav-open');
const linksContainer = document.querySelector('.links-container');
const header = document.getElementById('toolbar');
const worksSection = document.getElementById('works');

const closeMenuItems = {}; // Store elements that will close menu on click
closeMenuItems.btnClose = document.getElementById('nav-close');
closeMenuItems.linksContainer = linksContainer;
document.querySelectorAll('.nav-links').forEach((item, index) => {
  closeMenuItems[`navLink${index}`] = item;
});

// Page interaction functions
const toolbarStyle = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) header.classList.add('header-bg');
  else header.classList.remove('header-bg');
};
const setToInactive = () => {
  linksContainer.classList.remove('active');
};
const setToActive = () => {
  linksContainer.classList.add('active');
};

// Add listener to elements
btnOpen.addEventListener('click', setToActive);
Object.keys(closeMenuItems).forEach((key) => {
  const element = closeMenuItems[key];
  element.addEventListener('click', setToInactive);
});

// Toolbar update
window.onscroll = toolbarStyle;
window.onload = toolbarStyle;

// WORKS SECTION POPULATE
// Data to use
const data = [
  {
    index: 1,
    name: 'Tonic',
    info: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details: "A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tags: ['html', 'css', 'javaScript'],
  },
  {
    index: 2,
    name: 'Multi-Post Stories',
    info: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    details: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
  },
  {
    index: 3,
    name: 'Facebook 360',
    info: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    details: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
  },
  {
    index: 4,
    name: 'Uber Navigation',
    info: ['Uber', 'Lead Developer', '2018'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    details: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
  },
  {
    index: 5,
    name: 'Test Project Card',
    info: ['Enterprise', 'Lead Developer', '2022'],
    description: 'Test description for this project card.',
    details: "Test description for this project card. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tags: ['html', 'Ruby on rails', 'css', 'javaScript', 'Python'],
  },
];

// Build HTML for each card as needed
const createHtmlCard = (cardData) => {
  let infoElements = '';
  let tagElements = '';

  cardData.info.forEach((value, index) => {
    if (index > 0) infoElements = infoElements.concat('<li class="dot"></li>\n');
    infoElements = infoElements.concat(`      <li class="info-item">${value}</li>`);
  });
  cardData.tags.forEach((value) => {
    tagElements = tagElements.concat(`      <li>${value}</li>\n`);
  });

  const htmlTemplate = `
<section class="card">
  <a href="javascript:void(0)" class="card-img-link" data-index="${cardData.index}"><img src="assets/work_${cardData.index}.png" alt="Preview of the project ${cardData.name}"></a>
  <div class="card-content">
    <h2>${cardData.name}</h2>
    <ul class="info">
${infoElements}
    </ul>
    <p class="description">${cardData.description}</p>
    <ul class="tags">
${tagElements}
    </ul>
    <button type="button" class="btn-more card-btn" data-index="${cardData.index}">See Project</button>
  </div>
</section>
`;

  return htmlTemplate;
};

// Create a card for each entry in 'data' and save it on a single string
let workSectionHtml = '';

data.forEach((cardData) => {
  workSectionHtml = workSectionHtml.concat(createHtmlCard(cardData));
});

worksSection.innerHTML = workSectionHtml;

// MODAL WINDOW

const seeMoreBtns = Array.from(document.getElementsByClassName('card-btn'))
  .concat(Array.from(document.getElementsByClassName('card-img-link')));
const modalPopup = document.getElementById('project-wrapper');

const insertProjectData = (data) => {
  const name = document.getElementById('project-name');
  const info = document.getElementById('project-info');
  const img = document.getElementById('project-img');
  const details = document.getElementById('project-details');
  const tags = document.getElementById('project-tags');

  let infoElements = '';
  let tagElements = '';
  data.info.forEach((value, index) => {
    if (index > 0) infoElements = infoElements.concat('<li class="dot"></li>\n');
    infoElements = infoElements.concat(`<li class="info-item">${value}</li>`);
  });
  data.tags.forEach((value) => {
    tagElements = tagElements.concat(`<li>${value}</li>\n`);
  });

  name.textContent = data.name;
  info.innerHTML = infoElements;
  img.setAttribute('src', `./assets/work_${data.index}.png`);
  img.setAttribute('alt', `Preview of the project ${data.name}`);
  details.textContent = data.details;
  tags.innerHTML = tagElements;
};

const disableScroll = () => {
  // Get the current page scroll position
  document.documentElement.classList.remove('smooth-scroll');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // if any scroll is attempted, set this to the previous value
  window.onscroll = () => {
    window.scrollTo(0, scrollTop);
  };
};

const enableScroll = () => {
  document.documentElement.classList.add('smooth-scroll');

  window.onscroll = toolbarStyle;
};

const openProject = (event) => {
  disableScroll();
  insertProjectData(data[event.currentTarget.dataset.index - 1]);
  modalPopup.classList.remove('d-none');
  modalPopup.scrollTop = 0;
  setTimeout(() => { modalPopup.classList.add('active'); }, 0);
};

seeMoreBtns.forEach((button) => {
  button.addEventListener('click', openProject);
});

const projectCloseBtn = document.getElementById('project-close');
const closeProject = (event) => {
  enableScroll();
  if (event.target !== event.currentTarget) return;
  modalPopup.classList.remove('active');
  setTimeout(() => { modalPopup.classList.add('d-none'); }, 300);
};

projectCloseBtn.addEventListener('click', closeProject);
modalPopup.addEventListener('click', closeProject);
