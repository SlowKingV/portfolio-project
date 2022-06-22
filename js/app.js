/* Define elements needed for interaction */
const btnOpen = document.getElementById('nav-open');
const linksContainer = document.querySelector('.links-container');
const header = document.getElementById('toolbar');
const worksSection = document.getElementById('works');

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
const setToInactive = () => {
  linksContainer.classList.remove('active');
};
const setToActive = () => {
  linksContainer.classList.add('active');
};

/* Add listener to elements */
btnOpen.addEventListener('click', setToActive);
for (let item in closeMenuItems) {
  let element = closeMenuItems[item];
  element.addEventListener('click', setToInactive);
}

/* Toolbar update */
window.onscroll = toolbarStyle;
window.onload = toolbarStyle;

/* WORKS SECTION POPULATE */
/* Data to use */
const data = [
  {
    "index": 1,
    "name": "Tonic",
    "info": ["CANOPY", "Back End Dev", "2015"],
    "description": "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    "tags": ["html", "css", "javaScript"]
  },
  {
    "index": 2,
    "name": "Multi-Post Stories",
    "info": ["FACEBOOK", "Full Stack Dev", "2015"],
    "description": "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    "tags": ["html", "Ruby on rails", "css", "javaScript"]
  },
  {
    "index": 3,
    "name": "Facebook 360",
    "info": ["FACEBOOK", "Full Stack Dev", "2015"],
    "description": "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    "tags": ["html", "Ruby on rails", "css", "javaScript"]
  },
  {
    "index": 4,
    "name": "Uber Navigation",
    "info": ["Uber", "Lead Developer", "2018"],
    "description": "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    "tags": ["html", "Ruby on rails", "css", "javaScript"]
  }
];

/* Build HTML for each card as needed */
const createHtmlCard = (cardData) => {
  let infoElements = '';
  let tagElements = '';

  cardData.info.forEach((value) => {
    infoElements = infoElements.concat(`      <li class="info-item">${value}</li><li class="dot"></li>\n`);
  });
  cardData.tags.forEach((value) => {
    tagElements = tagElements.concat(`      <li>${value}</li>\n`)
  });

  let htmlTemplate = `
<section class="card">
  <a href="#"><img src="assets/work_${cardData.index}.png" alt="Preview of the project ${cardData.name}"></a>
  <div class="card-content">
    <h2>${cardData.name}</h2>
    <ul class="info">
${infoElements}
    </ul>
    <p class="description">${cardData.description}</p>
    <ul class="tags">
${tagElements}
    </ul>
    <button type="button" class="btn-more">See Project</button>
  </div>
</section>
`;

  return htmlTemplate;
}

/* Create a card for each entry in 'data' and save it on a single string */
let workSectionHtml = "";

data.forEach((cardData) => {
  workSectionHtml = workSectionHtml.concat(createHtmlCard(cardData));
});

worksSection.innerHTML = workSectionHtml;
