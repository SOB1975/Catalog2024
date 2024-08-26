function create25ru(){
// JSON file
const coins25ru =[
  {
    "img": "./../img/coins/russia/yubilee/25ru/2011/sochi.jpg",
    "imgrev": "./../img/coins/russia/yubilee/25ru/2011/revers.jpg",
    "md": "./../img/other/spmd-m.jpg",
    "text": "Эмблема Игр",
    "title": "25 рублей 2011",
    "price": "139",
    "count": "1",
    "info": "В наличии",
    "color": "product__on",
    "dataseries": "series-5",
    "datayear": "year-1",
    "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0001"
  },
  {
    "img": "./../img/coins/russia/yubilee/25ru/2011/sochicolor.jpg",
    "imgrev": "./../img/coins/russia/yubilee/25ru/2011/revers.jpg",
    "md": "./../img/other/spmd-m.jpg",
    "text": "Эмблема Игр (цветная)",
    "title": "25 рублей 2011",
    "price": "890",
    "count": "0",
    "info": "Отсутствует",
    "color": "product__off",
    "dataseries": "series-5",
    "datayear": "year-1",
    "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0002"
  },
  {
    "img": "./../img/coins/russia/yubilee/25ru/2012/talisman.jpg",
    "imgrev": "./../img/coins/russia/yubilee/25ru/2012/revers.jpg",
    "md": "./../img/other/spmd-m.jpg",
    "text": "Талисманы и Эмблема Игр",
    "title": "25 рублей 2012",
    "price": "89",
    "count": "1",
    "info": "В наличии",
    "color": "product__on",
    "dataseries": "data-series = series-5",
    "datayear": "data-year = year-2",
    "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0003"
  },
  {
    "img": "./../img/coins/russia/yubilee/25ru/2012/talismancolor.jpg",
    "imgrev": "./../img/coins/russia/yubilee/25ru/2012/revers.jpg",
    "md": "./../img/other/spmd-m.jpg",
    "text": "Талисманы и Эмблема Игр (цветная)",
    "title": "25 рублей 2012",
    "price": "1240",
    "count": "0",
    "info": "Отсутствует",
    "color": "product__off",
    "data": "data-absent = absent",
    "dataseries": "data-series = series-5",
    "datayear": "data-year = year-2",
    "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0004"
  },
  {
    "img": "./../img/coins/russia/yubilee/25ru/2013/sochi.jpg",
    "md": "./../img/other/spmd-m.jpg",
    "title": "25 рублей 2013",
    "text": "Эмблема XXII Олимпийских зимних игр Сочи",
    "price": "70",
    "count": "0",
    "info": "Отсутствует",
    "color": "product__off",
    "data": "data-absent = absent",
    "dataseries": "data-series = series-5",
    "datayear": "data-year = year-3",
    "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0009"
  }

];

const userDataString = JSON.stringify(coins25ru);
const parsUserData25ru = JSON.parse(userDataString)

// находим контейнер для карточек
const products = document.querySelector('.products');

for(let i=0;i<parsUserData25ru.length;i++){
  
  if(!!products){
  // create card 
  let card = document.createElement('div');  
    // top card block
  let cardTop = document.createElement('div');
  // add children for products and add class card
  products.appendChild(card).className="card";
  //add attribute for card
  card.setAttribute("data-series", parsUserData25ru[i].dataseries);
  card.setAttribute("data-year", parsUserData25ru[i].datayear);
  //add children cardTop for card and add class card__top
  card.appendChild(cardTop).className="card__top";
  //careate card status
  let cardStatus = document.createElement('div');
  // creat card count
  let cardCount = document.createElement('div');
  //add children for cardTop and add class card__count
  cardTop.appendChild(cardCount).className="card__count";
  // add number in count
  cardCount.innerHTML = i+1;
  // create card link
  let cardLink = document.createElement('a');
  //add children for card and add class card__link
  card.appendChild(cardLink).className="card__link";
  // add atributte href and target
  cardLink.setAttribute("href", parsUserData25ru[i].link);
  cardLink.setAttribute("target", "_blank");
  // create card body
  let cardBody = document.createElement('div');
  // creat swiper
  let swiper=document.createElement('div');
  // creat swiper wrapper
  let swiperWrapper=document.createElement('div');
  // create swiper-slide
  let swiperSlideOne=document.createElement('div');
  // create swiper-slide
  let swiperSlideTwo=document.createElement('div');
  // create swiper-scrollbar
  let swiperScrollbar=document.createElement('div');
  // 
  swiper.appendChild(swiperScrollbar).className="swiper-scrollbar card__scrollbar";
  // add children swiper for card and class swiper card__swiper 
  cardBody.appendChild(swiper).className= "swiper card__swiper";
  // add children swiper wrappee for swiper and class swiper-wrapper
  swiper.appendChild(swiperWrapper).className="swiper-wrapper card__wrapper";
  // add children swiper-slide for swiper-wrapper and class swiper-slide
  swiperWrapper.appendChild(swiperSlideOne).className="swiper-slide card__slide";
  // add children swiper-slide for swiper-wrapper and class swiper-slide
  swiperWrapper.appendChild(swiperSlideTwo).className="swiper-slide card__slide";
  // add children cardBody for card and class card__body 
  card.appendChild(cardBody).className="card__body";
  // create card img
  let cardImg = document.createElement('img');
  // create card img revers
  let cardImgRevers = document.createElement('img');
  // 
  swiperSlideTwo.appendChild(cardImgRevers).className="card__img";
  // add children cardImg  for cardBody and class card__img
  swiperSlideOne.appendChild(cardImg).className="card__img";
  // add attribute src for card__img
  cardImgRevers.setAttribute("src", parsUserData25ru[i].imgrev);
  // add attribute src for card__img
  cardImg.setAttribute("src", parsUserData25ru[i].img);
  // create ImgSign
  let cardImgSign = document.createElement('img');
  // add img slide
  card.appendChild(cardImgSign).className="card__imgsign";
  // add children cardImgSign  for cardBody and class card__imgsign
  cardImgSign.setAttribute("src", parsUserData25ru[i].md);
  // create card info
  let cardInfo = document.createElement('div');
  //add children for card and add class card__info
  card.appendChild(cardInfo).className="card__info";
  // create card info top
  let cardInfoTop = document.createElement('div');
  cardInfo.appendChild(cardInfoTop).className="card__info-top";
  // create title
  let cardTitle = document.createElement('h3');
  // add children for cardInfo and class card__title
  cardInfoTop.appendChild(cardTitle).className="card__title"
  // add content title
  cardTitle.innerText=parsUserData25ru[i].title;
  // create description
  let cardDesc = document.createElement('div');
  // add children for cardInfo and class card__desc
  cardInfoTop.appendChild(cardDesc).className="card__desc";
  // add content desription
  cardDesc.innerText=parsUserData25ru[i].text;

  // bottom
  let cardInfoBottom = document.createElement('div');
  cardInfo.appendChild(cardInfoBottom).className="card__info-bottom";  
  // create Box Items
  let cardBoxOne = document.createElement('div');
  let cardBoxTwo = document.createElement('div');
  let cardBoxThree = document.createElement('div');
  // add children for cardInfo and class card__box
  cardInfoBottom.appendChild(cardBoxOne).className="card__box";
  cardInfoBottom.appendChild(cardBoxTwo).className="card__box";
  cardInfoBottom.appendChild(cardBoxThree).className="card__box";
  // create price sale text
  let cardPriceSaleTxt = document.createElement('span');
  // add children for cardBoxOne and span
  cardBoxOne.appendChild(cardPriceSaleTxt);
  // add content cardPriceSaleTxt
  cardPriceSaleTxt.innerText="Стоимость:"
  // create price sale
  let cardPriceSale = document.createElement('div');
  // add children for cardBoxOne and class card__price
  cardBoxOne.appendChild(cardPriceSale).className="card__price";
  // add price sale
  cardPriceSale.innerHTML= parsUserData25ru[i].price;
  // create span
  let cardPriceSaleSpan = document.createElement('span');
  // add span and content
  cardPriceSale.appendChild(cardPriceSaleSpan).innerText=" ₽";

  let cardPriceCountTxt = document.createElement('span');
  let cardPriceCount = document.createElement('div');
  let cardPriceCountSpan = document.createElement('span');

  cardBoxTwo.appendChild(cardPriceCountTxt).innerText="Количество:";
  cardBoxTwo.appendChild(cardPriceCount).innerHTML=parsUserData25ru[i].count;
  cardPriceCount.appendChild(cardPriceCountSpan).innerText=" Шт";

  let cardPriceAllTxt = document.createElement('span');
  let cardPriceAll = document.createElement('div');
  let cardPriceAllSpan = document.createElement('span');

  cardBoxThree.appendChild(cardPriceAllTxt).innerText="За все:";
  cardBoxThree.appendChild(cardPriceAll).innerHTML=parsUserData25ru[i].count*parsUserData25ru[i].price;
  cardPriceAll.appendChild(cardPriceAllSpan).innerText=" ₽";

  // console.log(parsUserData25ru[i].count);
  let bool = Boolean(Number(parsUserData25ru[i].count));
  // console.log(bool);
  
  if(bool){
    cardTop.appendChild(cardStatus).className="card__status-on";
    cardStatus.setAttribute("title", parsUserData25ru[i].info);
  }else{
    cardTop.appendChild(cardStatus).className="card__status-off";
    cardStatus.setAttribute("title", parsUserData25ru[i].info);
  }
  }
  
  
}

}

export default create25ru;