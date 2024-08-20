const productAll =document.querySelectorAll('.product__number');
function productNumber(){

productAll.forEach(function(item, index){

  if(!!item){
    item.innerHTML=index+1;
  }
  
})

}
export default productNumber;