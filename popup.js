const works = [
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: 'image/works1-big.png',
    technologies: ['html', 'css', 'JavaScript'],
    linkLive: 'https://larryivc.github.io/portfolio/',
    linkCode: 'https://github.com/LarryIVC/portfolio',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: 'image/works2.png',
    technologies: ['html', 'Ruby on rails','css', 'JavaScript'],
    linkLive: 'https://larryivc.github.io/portfolio/',
    linkCode: 'https://github.com/LarryIVC/portfolio',
  },
  {
    name: 'Facebook 360',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: 'image/works3.png',
    technologies: ['html', 'Ruby on rails','css', 'JavaScript'],
    linkLive: 'https://larryivc.github.io/portfolio/',
    linkCode: 'https://github.com/LarryIVC/portfolio',
  },
  {
    name: 'Uber Navigation',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: 'image/works4.png',
    technologies: ['html', 'Ruby on rails','css', 'JavaScript'],
    linkLive: 'https://larryivc.github.io/portfolio/',
    linkCode: 'https://github.com/LarryIVC/portfolio',

  }
];

const openPopup = document.querySelectorAll('.btn-work');
const popupContainer = document.querySelector('.popup-principal');

for (let pointer = 0; pointer < works.length; pointer++ ){

  openPopup[pointer].addEventListener('click', () => {
    let htmlContent = `<div class="popup-details">
          <div class="popup-image">
            <img id="popup-close" src="../image/btn-x1.svg" alt="Close button">
            <h2 class="title-works">${works[pointer].name}</h2>
            <div class="sub-box">
              <h3>CANOPY</h3>
              <ul>
                <li>Back End Dev</li>
                <li>2015</li>
              </ul>
            </div>
            <img class="img-snapshot" src="${works[pointer].image}" alt="Snapshoot 1">
          </div>
          <div class="popup-desc">
            <div class="popup-text">
              <p class="popup-txt">${works[pointer].description}</p>
            </div>
            <div class="popup-footer">
              <ul class="small-button">
                <li>${works[pointer].technologies[0]}</li>
                <li>${works[pointer].technologies[1]}</li>
                <li>${works[pointer].technologies[2]}</li>                              
            </ul>
            <hr class="popup-line">
            <div class="action">              
              <a href="${works[pointer].linkLive}" class="btn-live see-button">See Live <img src="image/ico-live.svg" alt="Button See Live"></a>
              <a href="${works[pointer].linkCode}" class="btn-code see-button">See Code <img src="image/ico-gitHub.svg" alt="Button See Code"></a>
            </div>
            </div>
          </div>
        </div>`;
    popupContainer.innerHTML=htmlContent;
    
    const closePopup =document.getElementById('popup-close');
    popupContainer.classList.add('popup-show');
    blurContainer.classList.add('blurize');
    mainContainer.classList.add('blurize');

    closePopup.addEventListener('click', () => {
      popupContainer.classList.remove('popup-show');
      blurContainer.classList.remove('blurize');
      mainContainer.classList.remove('blurize');
      
    });
    
  });
  
}



