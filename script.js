
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

