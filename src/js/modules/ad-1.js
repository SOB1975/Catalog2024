function adOne() {
  const adOne=document.getElementById('ad-one');
  const adTwo=document.getElementById('ad-two');
  const adThree=document.getElementById('ad-three');
  const asrOne=document.getElementById('asr-one');
  const asrTwo=document.getElementById('asr-two');
  const asrThree=document.getElementById('asr-three');

  if(!!adOne){
    adOne.addEventListener('click',function(event){
    asrOne.classList.remove('none');
    asrTwo.classList.add('none');
    asrThree.classList.add('none');
  })
  }
  
  if(!!adTwo){
    adTwo.addEventListener('click',function(event){
    asrOne.classList.add('none');
    asrTwo.classList.remove('none');
    asrThree.classList.add('none');
  })
  }
  
  if(!!adThree){
    adThree.addEventListener('click',function(event){
    asrOne.classList.add('none');
    asrTwo.classList.add('none');
    asrThree.classList.remove('none');
  })
  }
  
}

export default adOne;