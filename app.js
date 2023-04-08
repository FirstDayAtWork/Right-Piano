const pianoKeys = document.querySelectorAll(".piano-keys .key");
volSlider = document.querySelector(".slidecontainer input");
keyBox = document.querySelector(".keys-checkbox input");




let allKeys = [],
audio = new Audio("ManlyTunes2/A.wav"); // по дефолту аудио начинается с ноты ""



const playTune = (key) => {
    audio.src = `ManlyTunes2/${key}.wav`; // нужная нота по нажатию клавиши
    audio.play(); // воспроизвести звук

    const clickedKey = document.querySelector(`[data-key="${key}"]`); // шоб было видно как по клаве туц туц
   
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 130);
}

// показать/спрятать аудио плеер
var x = document.getElementById("myAudio");
function enableControls() { 
  x.controls = true;
  x.load();
} 

function disableControls() { 
  x.controls = false;
  x.load();
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); //добавляет data-key значение в allKeys
    // datakey -> playtune function
    key.addEventListener("click", () => playTune(key.dataset.key));
    
});


const movingVolume = (e) => {
    audio.volume = e.target.value;
     // слайдер контролит волюме
};

const hideKeys = () => {
    // прячем названия клавиш по нажатию чекбокса
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

// подрубаем пк клаву
const pressedKey = (e) => {
    if (e.repeat) return; // убирает глитч при зажатии клавиш
    // если нажатая клавиша в allKeys, то вызывает только playTune function
    if(allKeys.includes(e.key)) 
    playTune(e.key);
    
}

// function myFunction() {
//     document.getElementById("myDIV").style.backgroundColor = "lightblue";
//   }

keyBox.addEventListener("click", hideKeys);
volSlider.addEventListener("input", movingVolume);
document.addEventListener("keydown", pressedKey);


// код для дрампадов

var numberOfButtons = 
    document.querySelectorAll(".button").length;
  
for (var j = 0; j < numberOfButtons; j++) {
  
  document.querySelectorAll(".button")[j]
  .addEventListener("click", function() {
  
    var buttonStyle = this.innerHTML;
    sound(buttonStyle);
    animation(buttonStyle);
  });
}
  


  document.addEventListener("keydown", function(event) {
    if (event.repeat) return;
    sound(event.key);
    animation(event.key);
  });

 
function sound(key) {
 switch (key) {
    
    case "a":
      var sound1 = new Audio("KinkyDrums/A.wav");
      sound1.play();
      break;
  
    case "`":
      var sound2 = new Audio("KinkyDrums/`.wav");
      sound2.play();
      break;
  
    case "f":
      var sound3 = new Audio("KinkyDrums/f.wav");
      sound3.play();
      break;
  
    case "i":
      var sound4 = new Audio("KinkyDrums/I.wav");
      sound4.play();
      break;
  
    case "o":
      var sound5 = new Audio("KinkyDrums/O.wav");
      sound5.play();
      break;
  
    case "p":
      var sound6 = new Audio("KinkyDrums/P.wav");
      sound6.play();
      break;
  
    case "k":
      var sound7 = new Audio("KinkyDrums/K.wav");
      sound7.play();
      break;

      case "l":
      var sound7 = new Audio("KinkyDrums/L.wav");
      sound7.play();
      break;
  
    default: console.log(key);
    
  }
};





 




function animation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("animation");
  
  setTimeout(function() {
    activeButton.classList.remove("animation");
  }, 50);
}

