const works = [
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    smalldesc:'Exploring the future of media in Facebook`\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    image: 'image/works1-big.png',
    technologies: ['html', 'css', 'JavaScript'],
    linkLive: 'https://larryivc.github.io/portfolio/',
    linkCode: 'https://github.com/LarryIVC/portfolio',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    smalldesc:'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: 'image/works2.png',
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    linkLive: 'https://larryivc.github.io/portfolio/',
    linkCode: 'https://github.com/LarryIVC/portfolio',
  },
  {
    name: 'Facebook 360',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    smalldesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'image/works3.png',
    technologies: ['html', 'css', 'JavaScript', 'Ruby on rails'],
    linkLive: 'https://larryivc.github.io/portfolio/',
    linkCode: 'https://github.com/LarryIVC/portfolio',
  },
  {
    name: 'Uber Navigation',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    smalldesc: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: 'image/works4.png',
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    linkLive: 'https://larryivc.github.io/portfolio/',
    linkCode: 'https://github.com/LarryIVC/portfolio',

  },
];
// cards
const worksContainer = document.querySelector('.works');
let cardWorks =``;
works.forEach((datos, index) => {
  cardWorks  += `<div class="works1 `;  
  if(index % 2 !== 0){
    cardWorks += `reverse`;
  }
  cardWorks += `" id="portfolio">
<div class="div-img">
<img class="img-works" src="${datos.image}" alt="Avocode Snapshoot">                    
</div>
<div class="work-desc">
    <h2 class="title-works">${datos.name}</h2>
    <div class="sub-box">
        <h3>CANOPY</h3>
        <ul>
            <li>Back End Dev</li>
            <li>2015</li>
        </ul>                        
    </div>
    <p class="des-p">${datos.smalldesc}</p>
    <ul class="small-button">`;

    for(let label=0;label<datos.technologies.length; label +=1){
      cardWorks += `<li>${datos.technologies[label]}</li>`;
    }
    cardWorks += `</ul>
    <button type="button" class="see-button btn-work">See Project</button>
</div>
</div>`;
});

worksContainer.innerHTML= cardWorks;
// end cards

const openPopup = document.querySelectorAll('.btn-work');
const popupContainer = document.querySelector('.popup-principal');

for (let pointer = 0; pointer < works.length; pointer += 1) {
  openPopup[pointer].addEventListener('click', () => {
    let htmlContent = `<div class="popup-details">
          <div class="popup-image">
            <img id="popup-close" src="image/btn-x1.svg" alt="Close button">
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
              <ul class="small-button">`;
              

    for(let popupLabel=0; popupLabel < works[pointer].technologies.length; popupLabel += 1) {
      htmlContent += `<li>${works[pointer].technologies[popupLabel]}</li>`;
    }

    htmlContent += `                                            
            </ul>
            <hr class="popup-line">
            <div class="action">              
              <a href="${works[pointer].linkLive}" class="btn-live see-button">See Live <img src="image/ico-live.svg" alt="Button See Live"></a>
              <a href="${works[pointer].linkCode}" class="btn-code see-button">See Code <img src="image/ico-gitHub.svg" alt="Button See Code"></a>
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
