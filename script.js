const butFront = document.querySelector('#ar-buttonFront');
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
    
        if (a===1) {
            console.log(a);
           document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
           document.querySelector("#arBox").setAttribute("ios-src", "./assets/PatronStay.usdz");
           
        }else {
            if (a===2) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
                document.querySelector("#arBox").setAttribute("ios-src", "./assets/PatronStay.usdz");
            }else {
              if (a===3) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
                document.querySelector("#arBox").setAttribute("ios-src", "./assets/PatronStay.usdz");
            } else {
              if (a===4) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
                document.querySelector("#arBox").setAttribute("ios-src", "./assets/PatronStay.usdz");
            } else {
              if (a===5) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
                document.querySelector("#arBox").setAttribute("ios-src", "./assets/PatronStay.usdz");
            } else {
              if (a===6) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
                document.querySelector("#arBox").setAttribute("ios-src", "./assets/PatronStay.usdz");
            } else {
              if (a===7) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
                document.querySelector("#arBox").setAttribute("ios-src", "./assets/PatronStay.usdz");
            } else {
              if (a===8) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
                document.querySelector("#arBox").setAttribute("ios-src", "./assets/PatronStay.usdz");
            } else {
              if (a===9) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
                document.querySelector("#arBox").setAttribute("ios-src", "./assets/PatronStay.usdz");
            } else {
              if (a===10) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
                document.querySelector("#arBox").setAttribute("ios-src", "./assets/PatronStay.usdz");
            } else {
              if (a===11) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
            } else {
              if (a===12) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
            } else {
              if (a===13) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
            } else {
              if (a===14) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
            } else {
              if (a===15) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
            } else {
              if (a===16) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
            } else {
              if (a===17) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
            } else {
              if (a===18) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
            } else {
              if (a===19) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
            } else {
              if (a===20) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
            } else {
              if (a===21) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
            } else {
              if (a===22) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
            } else {
              if (a===23) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
            } else {
              if (a===24) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
            } else {
              if (a===25) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
            } else {
              if (a===26) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
            } else {
              if (a===27) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
            } else {
              if (a===28) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
            } else {
              if (a===29) {
                console.log(a);
                document.querySelector("#arBox").setAttribute("src", "./assets/PatronStay.glb");
            }else {
             
                console.log(fuck);

            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
            }
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
        
   };
