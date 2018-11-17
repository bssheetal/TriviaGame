var correctanswers = 0;
var Incorrectanswers = 0;
var unanswered = 0;
var stopwatch = {

    time: 60
}
var intervalId;
//var questions=["Which is the biggest state in USA?","Who invented C?"];
//var answers=[["Texas","Alaska","NY","CA"],["Newton","Dennis Park","Elon Musk","Dennis Ritchie"]];
//var arrcorrectanswer=["Alaska","Dennis Ritchie"];

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
    $("input[type=radio]").attr('disabled', true);
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


    correctanswers = $('input[value=CA]:checked').length;
    // console.log("correct" + correctanswers);
    Incorrectanswers = $('input[value=IA]:checked').length;
    //console.log("Incorrect" + Incorrectanswers);
    unanswered = 2 - (correctanswers + Incorrectanswers);
    // console.log("Unanswered" + unanswered);



});

function score() {
    var div = $("<div>");
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