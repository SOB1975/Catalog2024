

function sideBarBtn(){
  const sideBarBtn=document.getElementById('sb-btn');
  const sideBarBox=document.querySelector('.sidebar__box');

  if(!!sideBarBtn){
      sideBarBtn.addEventListener('click',function(event){
      sideBarBox.classList.toggle('none');
    })

  }
  
}
export default sideBarBtn;