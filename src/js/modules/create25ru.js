function create25ru(){
// JSON file
const coins25ru =[
  {
    "img": "./../img/coins/russia/yubilee/25ru/2011/sochi.jpg",
    "md": "./../img/other/spmd-m.jpg",
    "text": "Эмблема Игр",
    "title": "25 рублей 2011",
    // "desc":  "Стоимость:",
    "price": "139",
    "count": "1",
    "info": "В наличии",
    "color": "product__on",
    "dataseries": "series-1",
    "datayear": "year-1",
    "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5514-0004"
  },
  {
    "img": "./../img/coins/russia/yubilee/25ru/2011/sochicolor.jpg",
    "md": "./../img/other/spmd-m.jpg",
    "text": "Эмблема Игр",
    "title": "25 рублей 2011",
    // "desc":  "Стоимость:",
    "price": "139",
    "count": "1",
    "info": "В наличии",
    "color": "product__on",
    "dataseries": "series-1",
    "datayear": "year-1",
    "link": "https://cbr.ru/cash_circulation/memorable_coins/coins_base/ShowCoins/?cat_num=5514-0004"
  }

];

const userDataString = JSON.stringify(coins25ru);
// console.log(userDataString);
const parsUserData25ru = JSON.parse(userDataString)
// console.log(parsUserData[0].img);
// console.log(parsUserData25ru.length);

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
  //add children for cardTop and add class card__status
  cardTop.appendChild(cardStatus).className="card__status";
  // creat card count
  let cardCount = document.createElement('div');
  //add children for cardTop and add class card__count
  cardTop.appendChild(cardCount).className="card__count";
  // careate card number
  let cardNumber = document.createElement('span');
  //add children for cardCount and add span
  cardCount.appendChild(cardNumber);
  // save number for card
  cardNumber.innerHTML = i+1;
  
  
}

// var inputDeveloper = document.getElementById('new-developers');
// const createBtn = document.getElementById('crbtn');
// //============================================================================ 
// //============================================================================ 
// // top card block

// //card status
// let cardStatus = document.createElement('div');
// card count
 
// // card number
// let cardNumber = document.createElement('span');
// //============================================================================
// //card body
// let cardBody = document.createElement('div');
// let cardImg = document.createElement('img');
// let cardImgSign = document.createElement('img');
//============================================================================
//card info
// let cardInfo = document.createElement('div');
// let cardTitle = document.createElement('h3');
// let cardDesc = document.createElement('div');
// let cardPrice = document.createElement('div');
// let cardBoxOne = document.createElement('div');
// let cardBoxTwo = document.createElement('div');
// let cardBoxThree = document.createElement('div');
// let cardPriceSaleTxt = document.createElement('span');
// let cardPriceSale = document.createElement('div');
// let cardPriceSaleSpan = document.createElement('span');
// let cardPriceCountTxt = document.createElement('span');
// let cardPriceCount = document.createElement('div');
// let cardPriceCountSpan = document.createElement('span');

// console.log(card);

// form top card block
// cardTop.className="card__top";
// cardStatus.className="card__status";
// cardStatus.className= parsUserData[0].color;
// cardStatus.className= parsUserData.color;
// cardCount.className="card__count"
// cardNumber.className="card__number"
// products.appendChild(card);
// card.appendChild(cardTop);
// cardTop.appendChild(cardStatus);
// cardTop.appendChild(cardCount);
// cardCount.appendChild(cardNumber);
// cardNumber.innerHTML= NumberCard;
// ===============================================================================
// from card body
// card.appendChild(cardBody);
// cardBody.className="card__body";
// cardBody.appendChild(cardImg);
// cardBody.appendChild(cardImgSign);
// cardImg.className="card__img";
// cardImgSign.className="card__imgsign";
// cardImg.setAttribute("src", parsUserData[0].img);
// cardImgSign.setAttribute("src",parsUserData[0].md);
//==================================================================================
// for card info
// card.appendChild(cardInfo);
// cardInfo.className = "card__info";
// cardInfo.appendChild(cardTitle);
// cardTitle.className = "card__title";
// cardTitle.innerHTML = parsUserData[0].title;
// cardInfo.appendChild(cardDesc);
// cardDesc.className = "card__desc";
// cardDesc.innerHTML = parsUserData[0].text;
// cardInfo.appendChild(cardPrice);
// cardPrice.className = "card__price";
// cardPrice.appendChild(cardBoxOne);
// cardPrice.appendChild(cardBoxTwo);
// cardPrice.appendChild(cardBoxThree);
// cardBoxOne.classList = "card__box";
// cardBoxTwo.classList = "card__box";
// cardBoxThree.classList = "card__box";
// cardBoxOne.appendChild(cardPriceSaleTxt);
// cardBoxOne.appendChild(cardPriceSale);
// cardPriceSaleTxt.classList = "card__price-txt";
// cardPriceSaleTxt.innerHTML = "Стоимость:";
// cardPriceSale.classList = "card__price-sale";
// cardPriceSale.innerHTML = parsUserData[0].price;
// cardPriceSale.appendChild(cardPriceSaleSpan);
// cardPriceSaleSpan.innerHTML = " ₽";
// cardBoxTwo.appendChild(cardPriceCountTxt);
// cardPriceCountTxt.classList = "card__price-countxt";
// cardPriceCountTxt.innerHTML = "Количество:";
// cardBoxTwo.appendChild(cardPriceCount);
// cardPriceCount.classList = "card__price-count";
// cardPriceCount.innerHTML = parsUserData[0].count;
// cardPriceCount.appendChild(cardPriceCountSpan);
// cardPriceCountSpan.innerText = " Шт";
//  console.log(products);
  
//  console.log(createBtn);

  // function createNewElement(developer){
    
    
    // let img = document.createElement('img');
    // // console.log(img);
    
    
    // cardTop.className="card__top";
    // img.className = "card__img";
    // img.setAttribute("src","./../img/25RU21-1.png");
    // card.appendChild(cardTop);
    // cardBox.appendChild(img);
    // products.appendChild(card);
    // console.log(card); 
    // console.log(!!products);
    // console.log(cardBox);
    // document.body.main.appendChild(card);
    // return card;
  }
  // createNewElement();

  // console.log(createNewElement());
  // if(inputDeveloper.value){
  //     var listItem = createNewElement(inputDeveloper.value);
  //       products.appendChild(listItem);
 
  //       inputDeveloper.value = "";
        
        
  //   }

//  if(!!createBtn){
//   // console.log('true');
  
//   createBtn.addEventListener('click',()=>{
//     // console.log('Нажал');
//     createNewElement();
    
    
//     // console.log(products);
    
    
//   })
 
// }


   
// }
export default create25ru;