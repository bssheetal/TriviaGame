

var correctanswers = 0;
var Incorrectanswers = 0;
var unanswered = 0;
var TotalQuestions=3;
var stopwatch = {

    time: 60
}
var intervalId;


window.onload = function () {
    $(".btnstart").on("click", start());
    
}
function start() {

    // Use setInterval to start the count here and set the clock to running.
    intervalId = setInterval(count, 1000)
    
};

function count() {

    stopwatch.time--;
    console.log(stopwatch.time);

    convertedtime = timeConverter(stopwatch.time);

    console.log(convertedtime);

    $("#display").text(convertedtime);
  if (stopwatch.time === 00) {
        console.log(stopwatch.time);
        stop();
        
        
    }
}

function stop() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
    $('#container').fadeOut(500);
    $("input[type=radio]").attr('disabled', true);
    calscore();
    score();
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

    calscore();
    
});

function score() {
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

$(".btnsubmit").on("click", function(event)
{
    event.preventDefault();
    stop();

});

function calscore()
{
    correctanswers = $('input[value=CA]:checked').length;   
    Incorrectanswers = $('input[value=IA]:checked').length;   
    unanswered = TotalQuestions - (correctanswers + Incorrectanswers);
}