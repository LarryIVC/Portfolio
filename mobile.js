const modalOpen = document.getElementById('open-modal');
const modalContainer = document.getElementById('container-menu-modal');
const modalClose = document.getElementById('btn-close');
const blurContainer = document.getElementById('first-container');
const mainContainer = document.getElementById('main');

const liPortfolio = document.getElementById('li-portfolio');
const liAbout = document.getElementById('li-about');
const liContact = document.getElementById('li-contact');

function openModal() {
  blurContainer.classList.add('blurize');
  mainContainer.classList.add('blurize');
  modalContainer.classList.add('turn_on');
}

function closeModal() {
  modalContainer.classList.remove('turn_on');
  mainContainer.classList.remove('blurize');
  blurContainer.classList.remove('blurize');
}

modalOpen.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

liPortfolio.addEventListener('click', closeModal);
liAbout.addEventListener('click', closeModal);
liContact.addEventListener('click', closeModal);