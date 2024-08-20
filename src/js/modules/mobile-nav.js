// for series
const mobileNavBtn = document.querySelector('.mobile__series');
const sidebar = document.querySelector('.sidebar');
const sidebarBtnAll = document.querySelectorAll('.sidebar__btn');
// for filter
const mobileFilterBtn = document.querySelector('.mobile__filter');
const sideBarCat = document.querySelector('.sidebar__cat');
const sideBarFilter = document.querySelector('.sidebar__filter');

function mobileNav() {
  // open and close series
  if(!!mobileNavBtn){
      mobileNavBtn.addEventListener('click',function(){

        sidebar.classList.remove('none');
        sidebar.classList.toggle('visible');
        // sidebar.classList.add('visible');
        sideBarFilter.classList.add('none');
        // sideBarFilter.classList.toggle('none');
        sideBarCat.classList.remove('none');
        
        // sidebarBtnAll.forEach(function(item){
        //   item.classList.toggle('series');
        //   const seriesAll = document.querySelectorAll('.series');
        //   seriesAll.forEach(function(item){
        //     item.addEventListener('click', function(){
        //       sidebar.classList.add('none');
        //       // sidebar.classList.remove('visible');
        //       sideBarFilter.classList.remove('visible-1');
        //     })
        //   })
      
        // })
    })
    
  }
  // open and close filter
  if(!!mobileFilterBtn){
    mobileFilterBtn.addEventListener('click', ()=>{
      sideBarFilter.classList.remove('none');
      sideBarCat.classList.add('none');
      // sideBarCat.classList.toggle('none');
      sidebar.classList.toggle('visible');
      // sidebar.classList.add('visible');
      // sidebar.classList.remove('visible');
      sideBarFilter.classList.add('visible');
      // sideBarBox.classList.toggle('none');
    })
  }
  
}

export default mobileNav;