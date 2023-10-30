import works from './projects.js';

const worksContainer = document.querySelector('.works');
let cardWorks = '';
works.forEach((datos, index) => {
  cardWorks += '<div class="works1 revealing-image ';
  if (index % 2 !== 0) {
    cardWorks += 'reverse';
  }
  cardWorks += `" id="portfolio">
    <div class="div-img">
      <img class="img-works" src="${datos.image}" alt="${datos.name} Snapshoot" loading="lazy">                    
    </div>
    <div class="work-desc">
        <h2 class="title-works">${datos.name}</h2>
        <div class="sub-box">
            <h3>${datos.enterprise.toUpperCase()}</h3>
            <ul>
                <li>${datos.stack}</li>
                <li>${datos.year}</li>
            </ul>                        
        </div>
        <p class="des-p">${datos.smalldesc}</p>
  <ul class="small-button">`;

  for (let label = 0; label < datos.technologies.length; label += 1) {
    cardWorks += `<li>${datos.technologies[label]}</li>`;
  }
  cardWorks += `</ul>
        <button type="button" class="see-button btn-work">See Project</button>
    </div>
    </div>`;
});

worksContainer.innerHTML = cardWorks;
// end cards

const openPopup = document.querySelectorAll('.btn-work');
const popupContainer = document.querySelector('.popup-principal');

for (let pointer = 0; pointer < works.length; pointer += 1) {
  openPopup[pointer].addEventListener('click', () => {
    let htmlContent = `<div class="popup-details">
          <div class="popup-image">
            <svg id="popup-close" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 
                4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142
                12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976
                17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237
                18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342
                5.29289 5.29289Z"
                fill="currentColor"
              />
            </svg>
            <h2 class="title-works">${works[pointer].name}</h2>
            <div class="sub-box">
              <h3>${works[pointer].enterprise}</h3>
              <ul>
                <li>${works[pointer].stack}</li>
                <li>${works[pointer].year}</li>
              </ul>
            </div>
            <img class="img-snapshot" src="${works[pointer].image}" alt="Snapshoot 1" loading="lazy">
          </div>
          <div class="popup-desc">
            <div class="popup-text">
              <p class="popup-txt">${works[pointer].description}</p>
            </div>
            <div class="popup-footer">
              <ul class="small-button">`;

    for (let popupLabel = 0; popupLabel < works[pointer].technologies.length; popupLabel += 1) {
      htmlContent += `<li>${works[pointer].technologies[popupLabel]}</li>`;
    }

    htmlContent += `                                            
            </ul>
            <hr class="popup-line">
            <div class="action">              
              <a href="${works[pointer].linkLive}" class="btn-live see-button" target="_blank" rel="noopener">See Live <img src="image/ico-live.svg" alt="Button See Live"></a>
              <a href="${works[pointer].linkCode}" class="btn-code see-button"  target="_blank" rel="noopener">See Code <img src="image/ico-gitHub.svg" alt="Button See Code"></a>
            </div>
            </div>
          </div>
        </div>`;

    popupContainer.innerHTML = htmlContent;

    const closePopup = document.getElementById('popup-close');
    const firstContainer = document.getElementById('first-container');
    const mainPopup = document.getElementById('main');

    popupContainer.classList.add('popup-show');
    firstContainer.classList.add('blurize');
    mainPopup.classList.add('blurize');

    closePopup.addEventListener('click', () => {
      popupContainer.classList.remove('popup-show');
      firstContainer.classList.remove('blurize');
      mainPopup.classList.remove('blurize');
    });
  });
}
