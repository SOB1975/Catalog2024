// // Мобильная навигация
// // import mobileNav from './modules/mobile-nav.js';
// // mobileNav();
// document.body.appendChild('');
// console.log(document.body.appendChild(''));
// console.log('Жопен дропен');
const id25ru = document.getElementById('25ru');
import json25ru from './modules/25rujson.js';
const id10rubm = document.getElementById('10rubm');
import json10rubm from './modules/10rubmjson.js';
const id10rugvs = document.getElementById('10rugvs');
import json10rugvs from './modules/10rugvsjson.js';
//25ru create
import createContent from './modules/create25ru.js'; 
if(!!id25ru){
  createContent(json25ru(),id25ru);
}
if(!!id10rubm){
  createContent(json10rubm(),id10rubm);
}
if(!!id10rugvs){
  createContent(json10rugvs(),id10rugvs);
}

//json25ru
// console.log(json25ru());
// // Open close button catalog
import headerBtn from './modules/headerbtn.js';
headerBtn();
// // close aside
import popupClose from './modules/popup-close.js';
popupClose();
import adOne from './modules/ad-1.js';
adOne();
import sideBarBtn from './modules/sidebarbtn.js';
sideBarBtn();
// count products (coins,banknot,honors)
import productNumber from './modules/productnumber.js';
productNumber();
// calculator products
import productCalc from './modules/productcalc.js';
productCalc();
// filter series
// import seriesFilter from './modules/series.js';
// seriesFilter();
// filter for year
// import filter from './modules/filter.js';
// filter();
//mobile nav down
import mobileNav from './modules/mobile-nav.js';
mobileNav();
// mobile nav top
import mobileNavTop from './modules/mobilenav-top.js';
mobileNavTop();
//statistic on off
import statistic from './modules/statistic.js'; 
statistic();
//tabs switch
import tabs from './modules/tabs.js'; 
tabs();





// // import styles bundle
import 'swiper/css/bundle';
// // import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';


 var swiper = new Swiper(".productSwiper", {
      effect: "coverflow",
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });


var swiper = new Swiper(".card__swiper", {
      // loop: true,
      centeredSlides: true,
      spaceBetween: 0,
      grabCursor: true,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
        clickable: true,
      },
      
    });


