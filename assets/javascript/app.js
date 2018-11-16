$(".btnstart").on("click", function () {

});

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
$(document).ready(function () {


    $("input[type='radio']").click(function () {


        function start() {

            // DONE: Use setInterval to start the count here and set the clock to running.
              intervalId=setInterval(count,1000)
              
          };

        function  count() {
        
            stopwatch.time--;
            console.log(stopwatch.time);
    
             convertedtime=timeConverter(stopwatch.time);
             //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
           //        and save the result in a variable.
           console.log(convertedtime);
         //  TODO: Use the variable you just created to show the converted time in the "display" div.
          $("#display").text(convertedtime);
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

        function score() {
            var CtargetDiv = document.getElementById("correct-div");
            CtargetDiv.textContent="CorrectAnswers:";
            var CorrectAnswers = document.createElement("div");
            CorrectAnswers.textContent=correctanswers;
            CtargetDiv.appendChild(CorrectAnswers);
            var ItargetDiv = document.getElementById("Incorrect-div");
            ItargetDiv.textContent="InCorrectAnswers:";
            var inCorrectAnswers = document.createElement("div");
            inCorrectAnswers.textContent=Incorrectanswers;
            ItargetDiv.appendChild(inCorrectAnswers);
            //Stores Unanswered value
            var UtargetDiv = document.getElementById("Unanswered-div");
            UtargetDiv.textContent="Unanswered:";
            var notanswered = document.createElement("div");
            notanswered.textContent=unanswered;
            UtargetDiv.appendChild(notanswered);
        }

        start();
        correctanswers = $('input[value=CA]:checked').length;
        console.log("correct" + correctanswers);
        Incorrectanswers = $('input[value=IA]:checked').length;
        console.log("Incorrect" + Incorrectanswers);
        unanswered=2-(correctanswers+Incorrectanswers);
        console.log("Unanswered" + unanswered);
        score();
   
        
    });

});
