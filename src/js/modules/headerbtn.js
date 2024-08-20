
function headerBtn() {

  const headerBtn=document.querySelector('.header__btn');
  const header=document.getElementById('header');
  const popupBox=document.querySelector('.popup-box');

  if(!!headerBtn){
      headerBtn.addEventListener('click',function(event){
  // console.log('Нажал');
      popupBox.classList.toggle('none');
      header.classList.add('none');
    })
  }

  
  
}
export default headerBtn;