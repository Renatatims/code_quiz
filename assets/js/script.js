var questionsEl = document.querySelector(".questions");
var startButton = document.getElementById("startQuiz");
var timeX = document.getElementById ("time")
var secondsLeft = 75;
var alternatives = document.querySelector(".alternatives");

var alternative1 = document.getElementById("alternative1");
var alternative2 = document.getElementById("alternative2");
var alternative3 = document.getElementById("alternative3");
var alternative4 = document.getElementById("alternative4");


var questions = [
    {question: "Which of the following are JavaScript Data Types?",
    alternatives: ["a", "b", "c", "d"],
    correctAnswer: "a",
    },
    {question: "What are all the types of Pop up boxes available in JavaScript?",
    aleternatives: ["a", "b", "c", "d"],
    correctAnswer: "b",
    },
    {question: " What is '====' operator? ",
    aleternatives: ["a", "b", "c", "d"],
    correctAnswer: "c",
    },
    {question: "Arrays in JavaScript can be used to store___",
    aleternatives: ["a", "b", "c", "d"],
    correctAnswer: "d",
    },
    {question: "Which function is used to serialize an object into a JSON string in Javascript?",
    aleternatives: ["a", "b", "c", "d"],
    correctAnswer: "e",
    },
];


var qCounter = 0;

function displayQuestion (){
    questionsEl.textContent = questions[qCounter].question;
    alternative1.textContent = "1. A";
    alternative2.textContent = "2. B";
   alternative3.textContent = "3. C";
   alternative4.textContent = "4. D";

}

alternatives.addEventListener("click", function(event){
    console.log(event);
    console.log(event.target.textContent)
  //*check if user clicked the correct answer*/
  /*if the user clicks correct answer - moves to the next question */ 
/*if wrong - than worng displayed - timer -10 seconds - move to the next question */

qCounter ++;
displayQuestion ();


 })



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
    
    /*startButton.setVisible(false);*/

     displayQuestion();   
     
   
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

