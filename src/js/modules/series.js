// все продукты в series-1
const seriesOne = document.querySelectorAll('[data-series="series-1"]');
// 
const inYearBtn26 = document.getElementById('inyear-26');
// кнопка series-1
const seriesOneBtn = document.getElementById('series-1');
//все продукты
const productAll = document.querySelectorAll('.product');
// все продукты в series-2
const seriesTwo = document.querySelectorAll('[data-series="series-2"]');
// кнопка series-2
const seriesTwoBtn = document.getElementById('series-2');
// все продукты в series-3
const seriesThree = document.querySelectorAll('[data-series="series-3"]');
// кнопка series-3
const seriesThreeBtn = document.getElementById('series-3');
// все продукты в series-4
const seriesFour = document.querySelectorAll('[data-series="series-4"]');
// кнопка series-4
const seriesFourBtn = document.getElementById('series-4');
// все продукты в series-5
const seriesFive = document.querySelectorAll('[data-series="series-5"]');
// кнопка series-5
const seriesFiveBtn = document.getElementById('series-5');
// все продукты в series-6
const seriesSix = document.querySelectorAll('[data-series="series-6"]');
// кнопка series-6
const seriesSixBtn = document.getElementById('series-6');
// все продукты в series-7
const seriesSeven = document.querySelectorAll('[data-series="series-7"]');
// кнопка series-7
const seriesSevenBtn = document.getElementById('series-7');
// все продукты в series-8
const seriesEight = document.querySelectorAll('[data-series="series-8"]');
// кнопка series-8
const seriesEightBtn = document.getElementById('series-8');
// все продукты в series-9
const seriesNine = document.querySelectorAll('[data-series="series-9"]');
// кнопка series-9
const seriesNineBtn = document.getElementById('series-9');
// кнопка series-10
const seriesTenBtn = document.getElementById('series-10');

const sideBar = document.querySelector('.sidebar');

function seriesFilter(){

  if(!!seriesOneBtn){

    seriesOneBtn.addEventListener('click',function(event){
      // console.log('visible-1');
      
      sideBar.classList.remove('visible');
      sideBar.classList.remove('none');

      if(!!inYearBtn26){
        inYearBtn26.checked = true;
      }

      productAll.forEach(function(item){
        item.classList.add('none');
      })

      seriesOne.forEach(function(item,index){
        item.classList.remove("none");
        item.children[1].children[0].innerHTML=index+1;
      })
    
  })
  }

  if(!!seriesTwoBtn){

    seriesTwoBtn.addEventListener('click',function(event){
      sideBar.classList.remove('visible');

      if(!!inYearBtn26){
        inYearBtn26.checked = true;
      }

      productAll.forEach(function(item){
        item.classList.add('none');
      })

      seriesTwo.forEach(function(item,index){
        item.classList.remove("none");
        item.children[1].children[0].innerHTML=index+1;
      })
    
  })
  }

  if(!!seriesThreeBtn){

    seriesThreeBtn.addEventListener('click',function(event){
      sideBar.classList.remove('visible');

      if(!!inYearBtn26){
        inYearBtn26.checked = true;
      }

      productAll.forEach(function(item){
        item.classList.add('none');
      })

      seriesThree.forEach(function(item,index){
        item.classList.remove("none");
        item.children[1].children[0].innerHTML=index+1;
      })
    
  })
  }

  if(!!seriesFourBtn){

    seriesFourBtn.addEventListener('click',function(event){
      sideBar.classList.remove('visible');

      if(!!inYearBtn26){
        inYearBtn26.checked = true;
      }

      productAll.forEach(function(item){
        item.classList.add('none');
      })

      seriesFour.forEach(function(item,index){
        item.classList.remove("none");
        item.children[1].children[0].innerHTML=index+1;
      })
    
  })
  }

  if(!!seriesFiveBtn){

    seriesFiveBtn.addEventListener('click',function(event){
      sideBar.classList.remove('visible');

      if(!!inYearBtn26){
        inYearBtn26.checked = true;
      }

      productAll.forEach(function(item,index){
        item.classList.add('none');
      })

      seriesFive.forEach(function(item,index){
        item.classList.remove("none");
        item.children[1].children[0].innerHTML=index+1;
      })
    
  })
  }

  if(!!seriesSixBtn){

    seriesSixBtn.addEventListener('click',function(event){
      sideBar.classList.remove('visible');

      if(!!inYearBtn26){
        inYearBtn26.checked = true;
      }

      productAll.forEach(function(item){
      item.classList.add('none');
      })

      seriesSix.forEach(function(item,index){
        item.classList.remove("none");
        item.children[1].children[0].innerHTML=index+1;
      })
    
  })
  }

  if(!!seriesSevenBtn){

    seriesSevenBtn.addEventListener('click',function(event){
      sideBar.classList.remove('visible');

      if(!!inYearBtn26){
        inYearBtn26.checked = true;
      }

      productAll.forEach(function(item){
        item.classList.add('none');
      })

      seriesSeven.forEach(function(item,index){
        item.classList.remove("none");
        item.children[1].children[0].innerHTML=index+1;
      })
    
  })
  }

  if(!!seriesEightBtn){

    seriesEightBtn.addEventListener('click',function(event){
      sideBar.classList.remove('visible');

      if(!!inYearBtn26){
        inYearBtn26.checked = true;
      }

      productAll.forEach(function(item){
        item.classList.add('none');
      })

      seriesEight.forEach(function(item,index){
        item.classList.remove("none");
        item.children[1].children[0].innerHTML=index+1;
      })
    
  })
  }

  if(!!seriesNineBtn){

    seriesNineBtn.addEventListener('click',function(event){
      sideBar.classList.remove('visible');

      if(!!inYearBtn26){
        inYearBtn26.checked = true;
      }

      productAll.forEach(function(item){
        item.classList.add('none');
      })

      seriesNine.forEach(function(item,index){
        item.classList.remove("none");
        item.children[1].children[0].innerHTML=index+1;
      })
    
  })
  }

  if(!!seriesTenBtn){

    seriesTenBtn.addEventListener('click',function(event){
      sideBar.classList.remove('visible');
      if(!!inYearBtn26){
        inYearBtn26.checked = true;
      }

      productAll.forEach(function(item,index){
        item.classList.remove('none');
        item.children[1].children[0].innerHTML=index+1;
      })
    
  })
  }
  
}

export default seriesFilter;