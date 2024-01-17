var playing;
var score;
var trialsleft;
var step;
var action;
var fruits = ['anaar','banana','cherry','grapes','mango','orange','pineapple','watermelon'];
$(function(){
$("#startreset").click(function(){
    if(playing == true){

        location.reload();
    }
    else{
        playing = true;

        score = 0;

        $("#scorevalue").html(score);

        $("#trialsleft").show();
        trialsleft = 3;
        addHearts();

        $("#gameOver").hide();

        $("#startreset").html("Reset Game");

        startAction();
    }
});
$("#fruit1").mouseover(function(){
    score++;
    $("#scorevalue").html(score);
    $("#slicesound")[0].play();
    
    clearInterval(action);
    
    $("#fruit1").hide("explode" , 200);
    
   setTimeout(startAction , 500);
    
});

function addHearts(){
    $("#trialsleft").empty();
    for(i =0 ; i< trialsleft ; i++){
                $("#trialsleft").append('<img  src="images/life.png" class="life">');
            }
}

function startAction(){
    $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({'left':Math.round(450*Math.random()),'top':-50});
    
    step = 1+ Math.round(5*Math.random());
    
    action = setInterval(function(){
       $("#fruit1").css('top',$("#fruit1").position().top + step); 
        
        if($("#fruit1").position().top > $("#fruitscontainer").height()){
            if(trialsleft>1){
                $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({'left':Math.round(450*Math.random()),'top':-50});
    
    step = 1+ Math.round(5*Math.random());
                
                trialsleft--;
                
                addHearts();
            }
            else{
                playing = false;
                
                $("#startreset").html("Start Game");
                
                $("#gameOver").show();
                $("#gameOver").html('<p>game over ! </p><p>your score is : '+score+'</p>');
                $("#trialsleft").hide();
                
                stopAction();
            }
        }
    }, 10);
}


function chooseFruit(){
    $("#fruit1").attr('src' , 'images/'+ fruits[Math.round(7*Math.random())] +'.png');
}

function stopAction(){
    clearInterval(action);
    $("#fruit").hide();
}
});