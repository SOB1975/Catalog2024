//счетчик количество всех продуктов в категории
const productCountAll=document.querySelectorAll('.product__count');
//коллекция количество продукта
const productCollAll=document.querySelector('.statistic__coll-stock');
//коллекция количество отсутствующих продуктов
const productCollAbsent=document.querySelector('.statistic__coll-absent');
//счетчик отсутствующих продуктов
const productCollCountAbsent=document.querySelectorAll('.product__status-circle--red');
//категория количество продукта 
const coinsCategory=document.querySelector('.statistic__cat-stock');
//стоимость всех продуктов в категории
const coinsCategoryPrice=document.querySelector('.statistic__cat-priceall');
//стоимость всех продуктов в коллекции
const coinsCollPrice=document.querySelector('.statistic__coll-priceall');
//цена отсутствующие продукты в категории
const productPriceAbsent=document.querySelector('.statistic__coll-priceabsent');
//Массив из цен на продукты
const arrayPrice = Array.from(document.querySelectorAll('.product__price'));
//Массив счетчика продуктов 
const arrayCount = Array.from(document.querySelectorAll('.product__count'));
//Массив из всех цен на продукты
const arrayPriceAll = Array.from(document.querySelectorAll('.product__price-all'));
//Массив из отсутствующих цен на продукт
const arrayPriceAbsentAll = Array.from(document.querySelectorAll('[data-absent=absent]')); 

  function productCalc(){
    //временные переменные
    let priceAllCategory = 0;
    let countAllColl = 0;
    let priceAllColl = 0;
    let priceAllCollAbsent = 0;
    // считаем общую стоимость текущего продукта
    for (let i = 0; i < arrayPriceAll.length; i++){
      arrayPriceAll[i].innerHTML = Number(arrayPrice[i].innerHTML) * Number(arrayCount[i].innerHTML);
      // считаем общую стоимость всех монет в каталоге
      priceAllCategory += Number(arrayPrice[i].innerHTML);
      if(!!coinsCategoryPrice){
        coinsCategoryPrice.innerHTML = priceAllCategory;
      }
      // считаем количество продукта в коллекции
      countAllColl += Number(arrayCount[i].innerHTML);
      if(!!productCollAll){
        productCollAll.innerHTML = countAllColl;
      }
      // считаем полную стоимость продукта в коллекции
      priceAllColl += Number(arrayPriceAll[i].innerHTML);
      if(!!coinsCollPrice){
        coinsCollPrice.innerHTML = priceAllColl;
      }
    }

    for(let i=0;i<arrayPriceAbsentAll.length;i++){
      // считаем полную стоимость отсутствующих продуктов в коллекции
      priceAllCollAbsent += Number(arrayPriceAbsentAll[i].innerHTML);
      if(!!productPriceAbsent){
        productPriceAbsent.innerHTML = priceAllCollAbsent;
      }
    }
    // записываем количество продукта в категории
    if(!!coinsCategory){
      coinsCategory.innerHTML = productCountAll.length;
    }
    // записываем количество отсутствующих продуктов в коллекции
    if(!!productCollAbsent){
      productCollAbsent.innerHTML = productCollCountAbsent.length;
    }
    
  }
export default productCalc;