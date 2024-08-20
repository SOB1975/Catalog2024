const mobileNavBtn = document.querySelector('.header__mb');
const catMenu = document.querySelector('.category__header');

function mobileNavTop(){
  if(!!mobileNavBtn){
    mobileNavBtn.addEventListener('click',()=>{
      catMenu.classList.toggle('visible');
    })
  }
}

export default mobileNavTop;