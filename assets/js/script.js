var questions = document.querySelector(".questions");
var startButton = document.getElementById("startQuiz");
var timeX = document.querySelector (".time")
var secondsLeft = 75;
var alternatives = document.querySelector(".alternatives");

var alternative1 = document.getElementById("alternative1");
var alternative2 = document.getElementById("alternative2");
var alternative3 = document.getElementById("alternative3");
var alternative4 = document.getElementById("alternative4");


var question1 = "Which of the following are JavaScript Data Types?";
var question2 =  "What are all the types of Pop up boxes available in JavaScript?"
var question3 = " What is '====' operator? "
var question4 = "Arrays in JavaScript can be used to store___"
var question5 = "Which function is used to serialize an object into a JSON string in Javascript?"




startButton.addEventListener ("click", function () {
    var timer = setInterval (function() {
        secondsLeft--;
        timeX.textContent = secondsLeft + " seconds left";
        if (secondsLeft === 0) {
            clearInterval(timer);
            timeX.textContent = "Time ended!";
           /* sendMessage();*/
        }
    }, 1000);

        
   questions.textContent = question1;

   alternative1.addEventListener("click", function(){
   alternative1.textContent = "1. A";
 })

   alternative1.textContent = "1. A";
   alternative2.textContent = "2. B";
   alternative3.textContent = "3. C";
   alternative4.textContent = "4. D";


   startButton.textContent = "SUBMIT";
    
})


/*

function message1 (){
    var q1 = JSON.parse(localStorage.getItem("question1"));
     = q1;
}

*/
/*
function sendMessage (){
    questions.textContent = "Quiz over!"
    
}
*/

