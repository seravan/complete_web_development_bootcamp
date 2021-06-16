function playSound(soundPath){
    var audio=new Audio(soundPath);
    audio.play();
}

function makeSound(key){
    switch(key){
        case "w":
            playSound("sounds/tom-1.mp3");
            break;
        case "a":
            playSound("sounds/tom-2.mp3");
            break;
        case "s":
            playSound("sounds/tom-3.mp3");
            break;
        case "d":
            playSound("sounds/tom-4.mp3");
            break;
        case "j":
            playSound("sounds/crash.mp3");
            break;
        case "k":
            playSound("sounds/kick-bass.mp3");
            break;
        case "l":
            playSound("sounds/snare.mp3");
            break;
        default:
            console.log(this.innerHTML);
    }
}

function buttonAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed"); 
    },100);
}

var totalDrumButtons=document.querySelectorAll(".drum").length;
// detects mouse click
for(var i=0;i<totalDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        var buttonInnerHtml=this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

//detects keyboard strokes
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});