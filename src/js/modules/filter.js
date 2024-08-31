// //все продукты
// const productAll = document.querySelectorAll('.product');
// //номера всех продуктов
// const numberAll = document.querySelectorAll('.product__number')
// //кнопка year-1
// const inYearBtn1 = document.getElementById('inyear-1');
// // все продукты в year-1
// const yaer1all = document.querySelectorAll('[data-year="year-1"]');
// //кнопка year-2
// const inYearBtn2 = document.getElementById('inyear-2');
// // все продукты в year-2
// const yaer2all = document.querySelectorAll('[data-year="year-2"]');
// //кнопка year-3
// const inYearBtn3 = document.getElementById('inyear-3');
// // все продукты в year-3
// const yaer3all = document.querySelectorAll('[data-year="year-3"]');
// //кнопка year-4
// const inYearBtn4 = document.getElementById('inyear-4');
// // все продукты в year-4
// const yaer4all = document.querySelectorAll('[data-year="year-4"]');
// //кнопка year-5
// const inYearBtn5 = document.getElementById('inyear-5');
// // все продукты в year-5
// const yaer5all = document.querySelectorAll('[data-year="year-5"]');
// //кнопка year-6
// const inYearBtn6 = document.getElementById('inyear-6');
// // все продукты в year-6
// const yaer6all = document.querySelectorAll('[data-year="year-6"]');
// //кнопка year-7
// const inYearBtn7 = document.getElementById('inyear-7');
// // все продукты в year-6
// const yaer7all = document.querySelectorAll('[data-year="year-7"]');
// //кнопка year-8
// const inYearBtn8 = document.getElementById('inyear-8');
// // все продукты в year-8
// const yaer8all = document.querySelectorAll('[data-year="year-8"]');
// //кнопка year-9
// const inYearBtn9 = document.getElementById('inyear-9');
// // все продукты в year-9
// const yaer9all = document.querySelectorAll('[data-year="year-9"]');
// //кнопка year-10
// const inYearBtn10 = document.getElementById('inyear-10');
// // все продукты в year-10
// const yaer10all = document.querySelectorAll('[data-year="year-10"]');
// //кнопка year-11
// const inYearBtn11 = document.getElementById('inyear-11');
// // все продукты в year-11
// const yaer11all = document.querySelectorAll('[data-year="year-11"]');
// //кнопка year-12
// const inYearBtn12 = document.getElementById('inyear-12');
// // все продукты в year-12
// const yaer12all = document.querySelectorAll('[data-year="year-12"]');
// //кнопка year-13
// const inYearBtn13 = document.getElementById('inyear-13');
// // все продукты в year-13
// const yaer13all = document.querySelectorAll('[data-year="year-13"]');
// //кнопка year-14
// const inYearBtn14 = document.getElementById('inyear-14');
// // все продукты в year-14
// const yaer14all = document.querySelectorAll('[data-year="year-14"]');
// //кнопка year-15
// const inYearBtn15 = document.getElementById('inyear-15');
// // все продукты в year-15
// const yaer15all = document.querySelectorAll('[data-year="year-15"]');
// //кнопка year-16
// const inYearBtn16 = document.getElementById('inyear-16');
// // все продукты в year-16
// const yaer16all = document.querySelectorAll('[data-year="year-16"]');
// //кнопка year-17
// const inYearBtn17 = document.getElementById('inyear-17');
// // все продукты в year-17
// const yaer17all = document.querySelectorAll('[data-year="year-17"]');
// //кнопка year-18
// const inYearBtn18 = document.getElementById('inyear-18');
// // все продукты в year-18
// const yaer18all = document.querySelectorAll('[data-year="year-18"]');
// //кнопка year-19
// const inYearBtn19 = document.getElementById('inyear-19');
// // все продукты в year-19
// const yaer19all = document.querySelectorAll('[data-year="year-19"]');
// //кнопка year-20
// const inYearBtn20 = document.getElementById('inyear-20');
// // все продукты в year-20
// const yaer20all = document.querySelectorAll('[data-year="year-20"]');
// //кнопка year-21
// const inYearBtn21 = document.getElementById('inyear-21');
// // все продукты в year-21
// const yaer21all = document.querySelectorAll('[data-year="year-21"]');
// //кнопка year-22
// const inYearBtn22 = document.getElementById('inyear-22');
// // все продукты в year-22
// const yaer22all = document.querySelectorAll('[data-year="year-22"]');
// //кнопка year-23
// const inYearBtn23 = document.getElementById('inyear-23');
// // все продукты в year-23
// const yaer23all = document.querySelectorAll('[data-year="year-23"]');
// //кнопка year-24
// const inYearBtn24 = document.getElementById('inyear-24');
// // все продукты в year-24
// const yaer24all = document.querySelectorAll('[data-year="year-24"]');
// //кнопка year-25
// const inYearBtn25 = document.getElementById('inyear-25');
// // все продукты в year-25
// const yaer25all = document.querySelectorAll('[data-year="year-25"]');
// //кнопка year-26
// const inYearBtn26 = document.getElementById('inyear-26');

// const sideBar = document.querySelector('.sidebar');
 
// function filter() {

//   if(!!inYearBtn1){

//     inYearBtn1.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn1.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer1all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
    
//   }

//   if(!!inYearBtn2){
//     inYearBtn2.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn2.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer2all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn3){
    
//     inYearBtn3.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn3.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer3all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn4){
    
//     inYearBtn4.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn4.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer4all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn5){
    
//     inYearBtn5.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn5.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer5all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn6){
    
//     inYearBtn6.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn6.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer6all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn7){
    
//     inYearBtn7.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn7.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer7all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn8){
    
//     inYearBtn8.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn8.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer8all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn9){
    
//     inYearBtn9.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn9.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer9all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn10){
    
//     inYearBtn10.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn10.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer10all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn11){
    
//     inYearBtn11.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn11.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer11all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn12){
    
//     inYearBtn12.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn12.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer12all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn13){
    
//     inYearBtn13.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn13.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer13all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn14){
    
//     inYearBtn14.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn14.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer14all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn15){
    
//     inYearBtn15.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn15.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer15all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn16){
    
//     inYearBtn16.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn16.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer16all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn17){
    
//     inYearBtn17.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn17.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer17all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn18){
    
//     inYearBtn18.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn18.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer18all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn19){
    
//     inYearBtn19.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn19.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer19all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn20){
    
//     inYearBtn20.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn20.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer20all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn21){
    
//     inYearBtn21.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn21.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer21all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn22){
    
//     inYearBtn22.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn22.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer22all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn23){
    
//     inYearBtn23.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn23.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer23all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn24){
    
//     inYearBtn24.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn24.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer24all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   if(!!inYearBtn25){
    
//     inYearBtn25.addEventListener('change',function(){
//       sideBar.classList.remove('visible');
//       if(inYearBtn25.checked){
//           productAll.forEach(function(item){
//           item.classList.add('none');
//         })
//         yaer25all.forEach(function(item,index){
//           item.classList.remove("none");
//           item.children[1].children[0].innerHTML=index+1;
//         })
//       }
//       else{
//           productAll.forEach(function(item){
//           item.classList.remove('none');
//         })
        
//       }
      
//     })
//   }

//   //кнопка year-1
//   // const inYearBtn1 = document.getElementById('inyear-1');
//   // console.log('Кнопка');
  

//   // if(!!inYearBtn26){
    
//   //   inYearBtn26.addEventListener('change',function(){
//   //     sideBar.classList.remove('visible');
//   //     if(inYearBtn26.checked){
//   //       console.log('TEST');
        
//   //         productAll.forEach(function(item){
//   //         // item.children[1].children[0].innerHTML=index+1;
//   //         numberAll.forEach(function (item,index) {
//   //           item.innerHTML=index+1;
//   //         })
//   //         item.classList.remove('none');
//   //       })
//   //     }
//   //   })
//   // }


// }
// export default filter;