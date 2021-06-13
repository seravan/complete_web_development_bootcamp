var randomnumber1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
if(randomnumber1===1){
    document.querySelector("body div img").setAttribute("src","images/dice1.png");
}
else if(randomnumber1===2){
    document.querySelector("body div img").setAttribute("src","images/dice2.png");
}
else if(randomnumber1===3){
    document.querySelector("body div img").setAttribute("src","images/dice3.png");
}
else if(randomnumber1===4){
    document.querySelector("body div img").setAttribute("src","images/dice4.png");
}
else if(randomnumber1===5){
    document.querySelector("body div img").setAttribute("src","images/dice5.png");
}
else if(randomnumber1===6){
    document.querySelector("body div img").setAttribute("src","images/dice6.png");
}

var randomnumber2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
if(randomnumber2===1){
    document.querySelector("#sec").setAttribute("src","images/dice1.png");
}
else if(randomnumber2===2){
    document.querySelector("#sec").setAttribute("src","images/dice2.png");
}
else if(randomnumber2===3){
    document.querySelector("#sec").setAttribute("src","images/dice3.png");
}
else if(randomnumber2===4){
    document.querySelector("#sec").setAttribute("src","images/dice4.png");
}
else if(randomnumber2===5){
    document.querySelector("#sec").setAttribute("src","images/dice5.png");
}
else if(randomnumber2===6){
    document.querySelector("#sec").setAttribute("src","images/dice6.png");
}

if(randomnumber1>randomnumber2){
    document.querySelector(".mainHead").innerHTML="Player-1 Wins!";
    document.querySelector(".capt").innerHTML="Refresh To Play Again";
}
else if(randomnumber2>randomnumber1){
    document.querySelector(".mainHead").innerHTML="Player-2 Wins!";
    document.querySelector(".capt").innerHTML="Refresh To Play Again";
}
else if(randomnumber2===randomnumber1){
    document.querySelector(".mainHead").innerHTML="DRAW !";
    document.querySelector(".capt").innerHTML="Refresh To Play Again";
}