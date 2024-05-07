// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  // TODO
  const speechBot = window.speechSynthesis;
  const writtenText = document.getElementById("text-to-speak");
  const imageLocation = document.querySelector('img[src="assets/images/smiling.png"]');
  const selectedVoice = document.getElementById("voice-select");
  const button = document.querySelector("button");
  let voices = [];
  function populateVoiceList() {
    voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }


const selectedOption = selectedVoice.selectedOptions[0].getAttribute("data-name");
const voiceSelection = voices.find(voice => voice.name === selectedOption);

  button.addEventListener('click', () => {
    const utter = new SpeechSynthesisUtterance(writtenText.value);
    utter.voice = voiceSelection;
    imageLocation.src = "assets/images/smiling-open.png";
    utter.onend = () => {
      imageLocation.src = "assets/images/smiling.png";
    }
    speechBot.speak(utter);   
  });
}

