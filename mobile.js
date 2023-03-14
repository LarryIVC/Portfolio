const modalOpen = document.getElementById('open-modal');
const modalContainer = document.getElementById('container-menu-modal');
const modalClose = document.getElementById('btn-close');
const blurContainer = document.getElementById('first-container');
const mainContainer = document.getElementById('main');

const liPortfolio = document.getElementById('li-portfolio');
const liAbout = document.getElementById('li-about');
const liContact = document.getElementById('li-contact');

modalOpen.addEventListener('click',open_modal);
modalClose.addEventListener('click',close_modal);

liPortfolio.addEventListener('click',close_modal);
liAbout.addEventListener('click',close_modal);
liContact.addEventListener('click',close_modal);

function open_modal() {
  blurContainer.classList.add('blurize');
  mainContainer.classList.add('blurize');
  modalContainer.classList.add('turn_on');  
}

function close_modal() {  
  modalContainer.classList.remove('turn_on');
  mainContainer.classList.remove('blurize');
  blurContainer.classList.remove('blurize');
}

