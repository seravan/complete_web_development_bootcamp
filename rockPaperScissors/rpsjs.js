var computerNumber=0;

function computerPlay(){
    var randInt=Math.floor(Math.random()*3);
    if(randInt===0){
        $("#p2").attr("class","fas fa-hand-rock fa-5x emo");
        computerNumber=0;
    }
    else if(randInt===1){
        $("#p2").attr("class","fas fa-hand-paper fa-5x emo");
        computerNumber=1;
    }
    else if(randInt===2){
        $("#p2").attr("class","fas fa-hand-scissors fa-5x emo");
        computerNumber=2;
    } 
}

$(document).keydown(function(event){

    var userNumber=0;
    var keycode = event.keyCode;
    if(keycode===82){
        $("#p1").attr("class","fas fa-hand-rock fa-5x emo");
        userNumber=0;
    }
    else if(keycode===80){
        $("#p1").attr("class","fas fa-hand-paper fa-5x emo");
        userNumber=1;
    }
    else if(keycode===83){
        $("#p1").attr("class","fas fa-hand-scissors fa-5x emo");
        userNumber=2;
    }
    else{
        userNumber=3;
    }

    if(userNumber===3){
        $(".mainHead").text("Improper selection, refresh to start again");
    }

    computerPlay();

    if(userNumber===computerNumber){
        $(".mainHead").text("Draw!!!");
    }
    else if(userNumber===0&&computerNumber===1){
        $(".mainHead").text("Computer Won");
    }
    else if(userNumber===0&&computerNumber===2){
        $(".mainHead").text("You Won");
    }
    else if(userNumber===1&&computerNumber===0){
        $(".mainHead").text("You Won");
    }
    else if(userNumber===1&&computerNumber===2){
        $(".mainHead").text("Computer Won");
    }
    else if(userNumber===2&&computerNumber===0){
        $(".mainHead").text("Computer Won");
    }
    else if(userNumber===2&&computerNumber===1){
        $(".mainHead").text("You Won");
    }

});
