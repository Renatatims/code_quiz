var questionsEl = document.querySelector(".questions");
var startButton = document.getElementById("startQuiz");
var timeX = document.getElementById ("time")
var timeCount = document.querySelector (".timeCount")
var secondsLeft = 75;
var alternativesEl = document.querySelector(".alternatives");


/*
var alternative1 = document.getElementById("alternative1");
var alternative2 = document.getElementById("alternative2");
var alternative3 = document.getElementById("alternative3");
var alternative4 = document.getElementById("alternative4");

*/
var alternative1 = document.createElement("li");
var alternative2 = document.createElement("li");
var alternative3 = document.createElement("li");
var alternative4 = document.createElement("li");


var highscores = document.getElementById("highscores");

var messageEl = document.getElementById("message");


var main = document.querySelector(".quiz");

var score = document.getElementById ("title");
var messageTotal = document.getElementById ("totalScore");
var submitScore = document.getElementById ("submitScore");
var inputName = document.createElement("input");
var btnSubmit = document.createElement("button");
var btnGoBack = document.createElement("button");
var btnClear = document.createElement("button");
var scoreBoard = document.getElementById ("scoreBoard");

var userScoreBoard = document.getElementById("userScoreBoard");


var questions = [
    {question: "Which of the following are JavaScript Data Types?",
    alternativesQuiz: ["number", "string", "boolean", "all of the above"],
    correctAnswer: alternative4,
    },
    {question: "How to stop an interval timer in Javascript?",
    alternativesQuiz: ["clearInterval", "clearTimer", "intervalOver", "None of the above"],
    correctAnswer: alternative1,
    },
    {question: " Commonly used data types DO NOT include ",
    alternativesQuiz: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: alternative3,
    },
    {question: "Arrays in JavaScript can be used to store___",
    alternativesQuiz: ["numbers and strings", "other arrays", "booleans", "All of the above"],
    correctAnswer: alternative4,
    },
    {question: "Which function is used to serialize an object into a JSON string in Javascript?",
    alternativesQuiz: ["stringify()", "parse()", "convert()", "None of the above"],
    correctAnswer: alternative1,
    },
];


var qCounter = 0;

function displayQuestion (){
    if (qCounter<5){
    questionsEl.textContent = questions[qCounter].question;
    alternative1.textContent = "1. " + questions[qCounter].alternativesQuiz[0];
    alternative2.textContent = "2. " + questions[qCounter].alternativesQuiz[1];
    alternative3.textContent = "3. " + questions[qCounter].alternativesQuiz[2];
    alternative4.textContent = "4. " + questions[qCounter].alternativesQuiz[3];
    alternativesEl.appendChild(alternative1);
    alternativesEl.appendChild(alternative2);
    alternativesEl.appendChild(alternative3);
    alternativesEl.appendChild(alternative4);

}else{
 score.textContent = "All Done!";
 messageTotal.textContent = "Your Final Score is " + totalScore
 alternativesEl.style.display = "none";
 questionsEl.style.display = "none";
 btnSubmit.textContent = "Submit";
 submitScore.appendChild(inputName);
 submitScore.appendChild(btnSubmit);
 inputName.addEventListener("click", function (){
 messageEl.style.display = "none";  
})

}};

var totalScore = 0;

alternativesEl.addEventListener("click", function(event){
    var userClick = event.target;
  
    //*check if user clicked the correct answer*/
    /*if the user clicks correct answer - moves to the next question */
    if (userClick === questions[qCounter].correctAnswer){
        totalScore=totalScore+20;
        messageEl.textContent = "Correct!";


    /*if wrong - than wrong displayed - timer -10 seconds - move to the next question */    
    } else{
        secondsLeft = secondsLeft-10;
        messageEl.textContent = "Wrong!";
    }
    console.log(event);

    console.log(event.target.textContent)
  

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
        } else if (qCounter>4){
            clearInterval(timer);
            timeCount.textContent = "Quiz ended!";
        }
    }, 1000);
    
    startButton.style.display = "none";

     displayQuestion();   
     
   
});




/* THINKING - last question

function lastQuestion (){
    if (qCounter===5){
        questionsEl.textContent = "Highscore";
    }

    lastQuestion();

}
*/

highscores.addEventListener ("click", function (){
    main.textContent = "Total Score = " + totalScore;
   
});

//Once the user clicks the button "Submit" the following actions will occur:
// Highscores board with user's name and total score.


btnSubmit.addEventListener ("click", function (){
    score.textContent = "Highscores";
    scoreBoard.appendChild (btnGoBack);
    scoreBoard.appendChild (btnClear);
    submitScore.style.display = "none";
    btnGoBack.textContent = "Go Back";
    btnClear.textContent = "Clear Highscores";
    var userInputName = inputName.value.trim();
    localStorage.setItem ("inputName", userInputName);
    displayScore ();
});

btnGoBack.addEventListener ("click", function(){
    document.location.reload();
});

//* Display highScores*//

//*var hscores = [];*/

function displayScore (){
    
    var userScore = localStorage.getItem("inputName") + "\n" + totalScore;
    //*messageTotal.textContent = userScore;*/

    //* Display User's name and score*/
    userScoreBoard.innerHTML="";
    var liScores  = document.createElement ("li");
    liScores.textContent = userScore;
    userScoreBoard.appendChild(liScores);



/*
    for(var i=0; i<hscores; i++){
        var hscore = hscores[i];
    }*/
    
    //*liScores.push(userScore);*/

    btnClear.addEventListener ("click", function(){
        userScoreBoard.textContent = " ";
    });


};









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


/* Remove the list items from the UL list from the home page DONE!!*/
/* DONE! Insert "wrong and correct lines when user selects an answer" */ 
/* End the quiz (DONE!) and provide an input for the USer to insert his name and show the SCORE*/


/*Additions - TODO://

/*background to User name and score in the highscores board*/
/*Clear highscores*/
/*remove highscores and time from the highscores board*/
/* view Highscores - click and view lis*/
/* create an array for highscores*/