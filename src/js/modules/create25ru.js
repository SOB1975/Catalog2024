function create25ru(){
// JSON file
const coins25ru =[
  {
    "img": "./../img/coins/russia/yubilee/25ru/2011/sochi.jpg",
    "md": "./../img/other/spmd-m.jpg",
    "text": "Эмблема Игр",
    "title": "25 рублей 2011",
    "price": "139",
    "count": "1",
    "info": "В наличии",
    "color": "product__on",
    "dataseries": "series-1",
    "datayear": "year-1",
    "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0001"
  },
  {
    "img": "./../img/coins/russia/yubilee/25ru/2011/sochicolor.jpg",
    "md": "./../img/other/spmd-m.jpg",
    "text": "Эмблема Игр",
    "title": "25 рублей 2011",
    "price": "139",
    "count": "1",
    "info": "В наличии",
    "color": "product__on",
    "dataseries": "series-1",
    "datayear": "year-1",
    "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5015-0002"
  }

];

const userDataString = JSON.stringify(coins25ru);
const parsUserData25ru = JSON.parse(userDataString)

// находим контейнер для карточек
const products = document.querySelector('.products');

for(let i=0;i<parsUserData25ru.length;i++){
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
  // add children cardBody for card and class card__body 
  card.appendChild(cardBody).className="card__body";
  // create card img
  let cardImg = document.createElement('img');
  // add children cardImg  for cardBody and class card__img
  cardBody.appendChild(cardImg).className="card__img";
  // add attribute src for card__img
  cardImg.setAttribute("src", parsUserData25ru[i].img);
  // create ImgSign
  let cardImgSign = document.createElement('img');
  cardBody.appendChild(cardImgSign).className="card__imgsign";
  // add children cardImgSign  for cardBody and class card__imgsign
  cardImgSign.setAttribute("src", parsUserData25ru[i].md);
  // create card info
  let cardInfo = document.createElement('div');
  //add children for card and add class card__info
  card.appendChild(cardInfo).className="card__info";
  // create title
  let cardTitle = document.createElement('h3');
  // add children for cardInfo and class card__title
  cardInfo.appendChild(cardTitle).className="card__title"
  // add content title
  cardTitle.innerText=parsUserData25ru[i].title;
  // create description
  let cardDesc = document.createElement('div');
  // add children for cardInfo and class card__desc
  cardInfo.appendChild(cardDesc).className="card__desc";
  // add content desription
  cardDesc.innerText=parsUserData25ru[i].text;
  // create Box Items
  let cardBoxOne = document.createElement('div');
  let cardBoxTwo = document.createElement('div');
  let cardBoxThree = document.createElement('div');
  // add children for cardInfo and class card__box
  cardInfo.appendChild(cardBoxOne).className="card__box";
  cardInfo.appendChild(cardBoxTwo).className="card__box";
  cardInfo.appendChild(cardBoxThree).className="card__box";
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

  if(parsUserData25ru[i].count){
    cardTop.appendChild(cardStatus).className="card__status-on";
    cardStatus.setAttribute("title", parsUserData25ru[i].info);
  }else{
    cardTop.appendChild(cardStatus).className="card__status-off";
    cardStatus.setAttribute("title", parsUserData25ru[i].info);
  }
}

}

export default create25ru;