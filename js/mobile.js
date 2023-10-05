import './popup.js';
import './storage.js';
import './formValidate.js';
import './darkMode.js';

const modalOpen = document.getElementById('open-modal');
const modalContainer = document.getElementById('container-menu-modal');
const modalClose = document.getElementById('btn-close');
const blurContainer = document.getElementById('first-container');
const mainContainer = document.getElementById('main');

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

const navigationLinks = document.querySelectorAll('.modal-item');

navigationLinks.forEach((link) => {
  link.addEventListener('click', closeModal);
});

modalOpen.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);