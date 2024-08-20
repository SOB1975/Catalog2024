//показывает статистику в категории и коллекции 
const statisticBtn = document.getElementById('statistic');
const stat = document.querySelector('.statistic');
const catHead = document.querySelector('.category__header');

function statistic(){
  if(!!statisticBtn){
    statisticBtn.addEventListener('click',()=>{
    catHead.classList.remove('visible');
    stat.classList.add('visible');
    console.log('TEST');
    
  })
  }
}

export default statistic;