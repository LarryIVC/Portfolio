const works = [
  {
    name: 'Pennywise',
    description: 'Pennywise: Manage your finances with ease. Track spending, set budgets, gain insights, and make informed decisions for financial freedom. Start today!',
    smalldesc: 'Manage your finances with ease, spendigs and budgets',
    image: 'image/pennywise.webp',
    technologies: ['erb', 'CSS', 'JavaScript', 'Ruby', 'Ruby on rails', 'PostgreSQL'],
    linkLive: 'https://rails-lb6q.onrender.com/',
    linkCode: 'https://github.com/LarryIVC/pennywise',
  },
  {
    name: 'Fast Land Racers',
    description: 'Fast-Lane-Racer is a car booking website that allows users to easily book a ride and travel to their desired destinations. User can reserve a car from the available cars by providing the date and city. Fast-Lane-Racer provides a seamless and reliable car booking experience.',
    smalldesc: 'Is a car booking website that allows users to easily book a ride and travel to their desired destinations.',
    image: 'image/mock-racer.webp',
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript', 'PostgreSQL', 'React', 'Redux'],
    linkLive: 'https://shiny-longma-bba6fb.netlify.app',
    linkCode: 'https://github.com/LarryIVC/Fast-Lane-Racers-front-end',
  },
  {
    name: 'Crypto Coinranking',
    description: 'Is a powerful web application designed specifically for crypto coins. It leverages the capabilities of React and Redux to provide comprehensive information about various cryptocurrencies.',
    smalldesc: 'Is a powerful web application designed specifically for crypto coins.',
    image: 'image/cryptomock.png',
    technologies: ['html', 'css', 'JavaScript', 'React', 'Redux'],
    linkLive: 'https://react-coin-coinranking.netlify.app/',
    linkCode: 'https://github.com/LarryIVC/react-coins',
  },
  {
    name: 'The Simpsons Fans Club',
    description: 'This project demonstrates my ability to use JavaScript, Webpack, and Jest, as well as reading and writing APIs using JSON.',
    smalldesc: 'This project demonstrates my ability to use JavaScript, Webpack, and Jest, as well as reading and writing APIs using JSON.',
    image: 'image/simpmock.jpeg',
    technologies: ['html', 'css', 'JavaScript'],
    linkLive: 'https://js-capstoneproject.netlify.app/',
    linkCode: 'https://github.com/LarryIVC/portfolio',
  },
];
// cards
const worksContainer = document.querySelector('.works');
let cardWorks = '';
works.forEach((datos, index) => {
  cardWorks += '<div class="works1 ';
  if (index % 2 !== 0) {
    cardWorks += 'reverse';
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
            <li>2023</li>
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

    for (let popupLabel = 0; popupLabel < works[pointer].technologies.length; popupLabel += 1) {
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
