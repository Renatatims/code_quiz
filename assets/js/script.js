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
    alternatives: ["number", "string", "boolean", "all of the above"],
    correctAnswer: alternatives[3],
    },
    {question: "How to stop an interval timer in Javascript?",
    alternatives: ["clearInterval", "clearTimer", "intervalOver", "None of the above"],
    correctAnswer: alternatives[0],
    },
    {question: " Commonly used data types DO NOT include ",
    alternatives: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: alternatives[2],
    },
    {question: "Arrays in JavaScript can be used to store___",
    alternatives: ["numbers and strings", "other arrays", "booleans", "All of the above"],
    correctAnswer: alternatives[3],
    },
    {question: "Which function is used to serialize an object into a JSON string in Javascript?",
    alternatives: ["stringify()", "parse()", "convert()", "None of the above"],
    correctAnswer: alternatives[0],
    },
];


var qCounter = 0;

function displayQuestion (){
    
    questionsEl.textContent = questions[qCounter].question;
    alternative1.textContent = "1. " + questions[qCounter].alternatives[0];
    alternative2.textContent = "2. " + questions[qCounter].alternatives[1];
    alternative3.textContent = "3. " + questions[qCounter].alternatives[2];
    alternative4.textContent = "4. " + questions[qCounter].alternatives[3];

}

var correct = 0;
var wrong = 0;

alternatives.addEventListener("click", function(event){
    var userClick = event.target.textContent;
  
    if (userClick === questions[qCounter].correctAnswer){
        correct++;
    } else{
        wrong--;
        secondsLeft = secondsLeft-10;
    }
    console.log(event);

    console.log(event.target.textContent)
  //*check if user clicked the correct answer*/
  /*if the user clicks correct answer - moves to the next question */ 
/*if wrong - than worng displayed - timer -10 seconds - move to the next question */

qCounter++;
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

