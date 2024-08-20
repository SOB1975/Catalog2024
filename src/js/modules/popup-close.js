
function popupClose() {

  const popupClose=document.getElementById('PopupClose');
  const popupBox=document.querySelector('.popup-box');
  const header=document.getElementById('header');

  if(!!popupClose){
      popupClose.addEventListener('click',function(event){
        popupBox.classList.toggle('none');
        header.classList.remove('none');
      })
  }
  
}
export default popupClose;