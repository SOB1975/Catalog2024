function tabs(){
  window.onload = () => {
  console.log('Все ресурсы загружены, как в барабане боевого револьвера готовы патроны');
};

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    console.log('Финал загрузка');
    
    // Показ спектакля будет окончен только тогда, когда примадонна закончит своё выступление.
  }
};
  var eventHandler = function(event){
    // console.log(event.type);
    // console.log(event.timeStamp);
    // console.log(document.readyState);
    var tabItems = document.querySelectorAll('.tab-item');
 
  tabItems.forEach(function(tab) {
    tab.addEventListener('click', function() {
      var tabId = this.getAttribute('data-tab');
      var content = document.getElementById(tabId);
 
      // Удаляем активный класс у текущих вкладок и контента
      document.querySelector('.tab-item.active').classList.remove('active');
      document.querySelector('.tab-pane.active').classList.remove('active');
 
      // Добавляем активный класс для выбранной вкладки и контента
      this.classList.add('active');
      content.classList.add('active');
    });
  });
  }
  console.log(document.readyState);
  document.addEventListener('readystatechange',eventHandler,false);
  document.addEventListener('DOMContentLoaded',eventHandler,false);
  window.addEventListener('load',eventHandler);

  
}

export default tabs;