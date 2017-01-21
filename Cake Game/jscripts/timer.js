var secondsCounter = 0;
var timerInterval;
var startStopBtn = document.getElementById("startStopBtn");
var checkTimer;

setTimeout(function(){
  if(secondsCounter === 0) {
    clearInterval(timerInterval);
    //alert("You have 10 seconds to play after pressing start! Press Close to continue")
    $("#modalStart").modal('show');
  }
}, 500);

function incrementTimer() { 
  secondsCounter++;
 }

function toggleStartStop() {
  if(this.getAttribute("data-state") === "start") {
    this.innerHTML = "Stop";
    this.setAttribute("data-state", "stop");
    secondsCounter = 0;
    imageCounter = 0;
    timerInterval = setInterval(incrementTimer, 1000);
    checkTimer = setInterval(checkSecondsCounter, 1000);
    for(var i = 0; i < imagesCake.length; i++) {
      imagesCake[i].setAttribute("data-state", "notclicked");
      imagesCake[i].setAttribute("style", "border-color: white");
    }
  } else {
    this.innerHTML = "Start";
    this.setAttribute("data-state", "start");
    clearInterval(timerInterval);
    clearInterval(checkTimer);
    //alert("You stopped after " + secondsCounter + " seconds")
    $("#buttonsClickedStop").html(imageCounter);
    $("#stopGameModel").modal('show');
  }
}


//checks seconds counter, if >= 10 seconds it ends the game
function checkSecondsCounter() {
  if (secondsCounter >= 10)	  {
    startStopBtn.innerHTML = "Start";
    startStopBtn.setAttribute("data-state", "start");
    clearInterval(timerInterval); 
    clearInterval(checkTimer);
    //alert("Time is up " + secondsCounter + " seconds, you clicked " + imageCounter + " images");
    $("#buttonsClicked").html(imageCounter);
    $("#endGameModel").modal('show');

  } 
}

startStopBtn.addEventListener("click", toggleStartStop);

