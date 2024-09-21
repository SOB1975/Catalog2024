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
const id5ruyub = document.getElementById('5ruyub');
import json5ruyub from './modules/5ruyubjson.js';
const id2ruyub = document.getElementById('2ruyub');
import json2ruyub from './modules/2ruyubjson.js';
const id1ruyub = document.getElementById('1ruyub');
import json1ruyub from './modules/1ruyubjson.js';
const id1kopru = document.getElementById('1kopru');
import json1kopru from './modules/1koprujson.js';
const id5kopru = document.getElementById('5kopru');
import json5kopru from './modules/5koprujson.js';
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
if(!!id5ruyub){
  createContent(json5ruyub(),id5ruyub);
}
if(!!id2ruyub){
  createContent(json2ruyub(),id2ruyub);
}
if(!!id1ruyub){
  createContent(json1ruyub(),id1ruyub);
}
if(!!id1kopru){
  createContent(json1kopru(),id1kopru);
}
if(!!id5kopru){
  createContent(json5kopru(),id5kopru);
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
// import productCalc from './modules/productcalc.js';
// productCalc();
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


