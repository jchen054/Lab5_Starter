// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();
function init() {
  let selector = document.getElementById('horn-select');
  selector.addEventListener('change', function() {
    let selected = this.value;
    document.querySelector('img').src = `assets/images/${selected}.svg`;
    document.querySelector('audio').src= `assets/audio/${selected}.mp3`;
  } )

  let sound = document.getElementById('volume');
  sound.addEventListener('change', function() {
    let volume = Number(this.value);
    console.log(volume);
    let display;
    if (volume === 0) {
      display = 'assets/icons/volume-level-0.svg';
    }
    else if (volume < 33) {
      display = 'assets/icons/volume-level-1.svg';
    }
    else if (volume < 67) {
      display = 'assets/icons/volume-level-2.svg';
    }
    else {
      display = 'assets/icons/volume-level-3.svg';
    }
    document.querySelector('audio').volume = volume/100;
    document.querySelectorAll('img')[1].src = display;
  })

  document.querySelector('button').addEventListener('click', function() {
    document.querySelector('audio').play();
    if (document.getElementById('horn-select').value == 'party-horn') {
      jsConfetti.addConfetti();
    }
  })
}