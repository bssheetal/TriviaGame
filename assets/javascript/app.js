
//Declare Variables
var correctanswers = 0;
var Incorrectanswers = 0;
var unanswered = 0;
var TotalQuestions=3;
var convertedtime;
var stopwatch = {

    time: 60
}
var intervalId;

//  This code will run as soon as the page loads.
window.onload = function () {
    $(".btnstart").on("click", start());
    
}
function start() {

    // Use setInterval to start the count here and set the clock to running.
    intervalId = setInterval(count, 1000)
    
};


function count() {
//decrement time by 1
    stopwatch.time--;
    console.log(stopwatch.time);
//Got the current time, pass that into the stopwatch.timeConverter function,
    //        and save the result in a variable.
    convertedtime = timeConverter(stopwatch.time);

    console.log(convertedtime);
    //Show the converted time in the "display" div.
    $("#display").text(convertedtime);

    //If the stopwatch is 0 stop the Quiz and show the score
  if (stopwatch.time === 00) {
        console.log(stopwatch.time);
        stop();
        
        
    }
}

function stop() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
    //Once the clock is stopped fadeout the parent container which holds the questions
    $('#container').fadeOut(500);
    $("input[type=radio]").attr('disabled', true);
    //Once the clock stops calculate the current score and display them
    calscore();
    displayscore();
}

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

$("input[type='radio']").click(function () {
//Calculate the score each time radio button is selected
    calscore();
    
});

//Display the score by dynamically creating the html using jquery
function displayscore() {
    var div = $("<div>");
    div.append("All Done!");
    div.addClass("score-details");
    var NoofCorrectAnswers = $("<div>").text("CorrectAnswers: " + correctanswers);
    console.log(correctanswers);
    $("#Results").append(div);
    div.prepend('<hr />');
    div.append(NoofCorrectAnswers);
    var NoofInCorrectAnswers = $("<div>").text("InCorrectAnswers: " + Incorrectanswers);
    NoofCorrectAnswers.prepend('<hr />');
    NoofCorrectAnswers.append(NoofInCorrectAnswers);
    var NoofUnanswered = $("<div>").text("Unanswered: " + unanswered);
    NoofInCorrectAnswers.append(NoofUnanswered);
}

//On submit button click stop the clock
$(".btnsubmit").on("click", function(event)
{
    //this prevents default page refresh
    event.preventDefault();
    stop();

});

//Function to calculate score
function calscore()
{
    correctanswers = $('input[value=CA]:checked').length;   
    Incorrectanswers = $('input[value=IA]:checked').length;   
    unanswered = TotalQuestions - (correctanswers + Incorrectanswers);
}