/* 
let d = new Date();
const THird = 30;
d.getDate();
 */ const butFront = document.querySelector('#ar-buttonFront');
const butBack = document.querySelector('#ar-button');
// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    butFront.style.display = 'block';

  } else {
    progressBar.classList.remove('hide');
    if (event.detail.totalProgress === 0) {
      event.target.querySelector('.center-pre-prompt').classList.add('hide');

    }
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);
butFront.addEventListener('click', function() {
  butBack.click();
});



    const date = '2022-11-30T00:00:00.000Z'
    let currentDate = Date.parse(new Date());
    let days = (currentDate - Date.parse(date))/86400000;       //86400000 - ms в дне
    let one = Math.round(days);
    console.log(one);
    
   function link (a) {
    
        if (a===5) {
            console.log(a);
           document.querySelector("#arBox").setAttribute("src", "./assets/patronnnn.glb");
           
        } else {
            if (a===6) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/Patron.glb");
            }
        }
        
    }
   if (one<29) {
    console.log(one);
    link(one);
   } else {
        one = Math.round(days)-29;
        if (one<29) {
            link(one);
        } else {
            console.log(fuck);
        }
        
   } 

 document.addEventListener('DOMContentLoaded', function(e){ // ждем окончание загрузки
    setTimeout(function(){
          let myElement = document.getElementById('ar-button') // ищем нужный элемент
          myElement.click() // клик!
      }, 0) // 5000 msec = 5 sec
  })
 

/* function changeLink (NowLink) {
    const date = '2022-11-02T00:00:00.000Z'
    let currentDate = Date.parse(new Date());
    let days = (currentDate - Date.parse(date))/86400000;       //86400000 - ms в дне
    let = DayBox;
    DayBox = Math.round(days);
    for (let i = DayBox; i<=29; i-29) {
       console.log(i);
    }
    return NowLink;
    
}
console.log(changeLink); */
