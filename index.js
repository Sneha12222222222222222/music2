var n = document.querySelectorAll(".drum").length;
for (var i=0;i<n;i++){
  document.querySelectorAll(".drum")[i].addEventListener('click',mouseClick);

}
document.addEventListener("keypress",function(e){
  keyClick(e.key);

});

function mouseClick(){
var buttonInnerHTML = this.innerHTML;
  switch (buttonInnerHTML) {
    case 'w' : var audio = new Audio("sounds/snare.mp3")
    audio.play();
    break;
    case 'a' : var audio = new Audio("sounds/crash.mp3")
    audio.play();
    break;
    case 's' : var audio = new Audio("sounds/snare.mp3")
    audio.play();
    break;
    case 'd' : var audio = new Audio("sounds/kick-bass.mp3")
    audio.play();
    break;
    case 'j' : var audio = new Audio("sounds/crash.mp3")
    audio.play();
    break;
    case 'l' : var audio = new Audio("sounds/snare.mp3")
    audio.play();
    break;
    case 'k' : var audio = new Audio("sounds/crash.mp3")
    audio.play();
    break;

    default: alert("Wrong Button");
    break;
    
  }
}
function keyClick(key){
  
  switch (key) {
    case 'w' : var audio = new Audio("sounds/snare.mp3")
    audio.play();
    break;
    case 'a' : var audio = new Audio("sounds/crash.mp3")
    audio.play();
    break;
    case 's' : var audio = new Audio("sounds/snare.mp3")
    audio.play();
    break;
    case 'd' : var audio = new Audio("sounds/kick-bass.mp3")
    audio.play();
    break;
    case 'j' : var audio = new Audio("sounds/crash.mp3")
    audio.play();
    break;
    case 'l' : var audio = new Audio("sounds/snare.mp3")
    audio.play();
    break;
    case 'k' : var audio = new Audio("sounds/crash.mp3")
    audio.play();
    break;

    default: alert("Wrong Button");
    break;
  }
}