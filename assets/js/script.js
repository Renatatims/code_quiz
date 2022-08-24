//***Variables***//

//variable viewHighScores Element //
var viewHighscoresEl = document.getElementById("viewHighscores");

//variable TimeCount Element //
var timeCountEl = document.querySelector(".timeCount");
var timeX = document.getElementById("time");
var secondsLeft = 75;

//variable Main Intro Element - Coding Quiz//

var mainEl = document.querySelector(".quiz");

var introEl = document.querySelector(".intro");

//Variable Start Button //

var startButton = document.getElementById("startQuiz");

//variable Questions Element //

var questionsEl = document.querySelector(".questions");


//variable Alternatives Element//

var alternativesEl = document.querySelector(".alternatives");

//Alternatives 1,2,3,4 - created under class "alternatives"//
var alternative1 = document.createElement("li");
var alternative2 = document.createElement("li");
var alternative3 = document.createElement("li");
var alternative4 = document.createElement("li");

//Object Questions  - questions, alternatives and correct Answer for each question //

var questions = [
	{
		question: "Which of the following are JavaScript Data Types?",
		alternativesQuiz: ["number", "string", "boolean", "all of the above"],
		correctAnswer: alternative4,
	},
	{
		question: "How to stop an interval timer in Javascript?",
		alternativesQuiz: ["clearInterval", "clearTimer", "intervalOver", "None of the above"],
		correctAnswer: alternative1,
	},
	{
		question: " Commonly used data types DO NOT include ",
		alternativesQuiz: ["strings", "booleans", "alerts", "numbers"],
		correctAnswer: alternative3,
	},
	{
		question: "Arrays in JavaScript can be used to store___",
		alternativesQuiz: ["numbers and strings", "other arrays", "booleans", "All of the above"],
		correctAnswer: alternative4,
	},
	{
		question: "Which function is used to serialize an object into a JSON string in Javascript?",
		alternativesQuiz: ["stringify()", "parse()", "convert()", "None of the above"],
		correctAnswer: alternative1,
	},
];


//Message Variable - Correct or Wrong depending on User's selection//

var messageEl = document.getElementById("message");

//quizEnd Element //

var quizEndEl = document.getElementById("quizEnd");

//Message Total Score Element // 
var messageTotalEl = document.getElementById("totalScore");

//User's name Input//
var submitScoreEl = document.getElementById("submitScore");
var inputBox = document.createElement("input");
var btnSubmit = document.createElement("button");


//Variable Score Board - Display User's name and Scores

var scoreBoard = document.getElementById("scoreBoard");


var userScoreBoard = document.getElementById("userScoreBoard");

//Button "Go Back" to Start the Quiz again 
var btnGoBack = document.createElement("button");

//Button Clear HighScores
var btnClear = document.createElement("button");



//Variable for the questions index//
var qCounter = 0;

//Function to display Questions//
function displayQuestion() {
	if (qCounter < 5) {
		questionsEl.textContent = questions[qCounter].question;
		alternative1.textContent = "1. " + questions[qCounter].alternativesQuiz[0];
		alternative2.textContent = "2. " + questions[qCounter].alternativesQuiz[1];
		alternative3.textContent = "3. " + questions[qCounter].alternativesQuiz[2];
		alternative4.textContent = "4. " + questions[qCounter].alternativesQuiz[3];
		alternativesEl.appendChild(alternative1);
		alternativesEl.appendChild(alternative2);
		alternativesEl.appendChild(alternative3);
		alternativesEl.appendChild(alternative4);

	} else {
		quizEndEl.textContent = "All Done!";
		messageTotalEl.textContent = "Your Final Score is " + totalScore
		alternativesEl.style.display = "none";
		questionsEl.style.display = "none";
		btnSubmit.textContent = "Submit";
		submitScoreEl.appendChild(inputBox);
		submitScoreEl.appendChild(btnSubmit);
		inputBox.addEventListener("click", function () {
			messageEl.style.display = "none";
		})

	}
};

//Variable for the User's Total Score. If User gets a correct answer equivalents to 20 points//
var totalScore = 0;

/*Event Listener to Alternatives Element - depending on which alternative the User clicks*/

alternativesEl.addEventListener("click", function (event) {
	var userClick = event.target;

	//*check if user clicked the correct answer*/
	/*If the user clicks on the correct answer - 20 points increment and "correct!" message is displayed. */
	if (userClick === questions[qCounter].correctAnswer) {
		totalScore = totalScore + 20;
		messageEl.textContent = "Correct!";

	/*If wrong answer is clicked - than "wrong!" message is displayed and 10 seconds penalty applied in the timer */
	} else {
		secondsLeft = secondsLeft - 10;
		messageEl.textContent = "Wrong!";
	}
	//console.log(event);

	//console.log(event.target.textContent)

	/*Moves to the next question*/

	qCounter++;
	
	displayQuestion();

})

//Event Listener added to the Start Button//

startButton.addEventListener("click", function () {

	var timer = setInterval(function () {
		secondsLeft--;
		timeX.textContent = secondsLeft + " seconds left";
		if (secondsLeft === 0) {
			clearInterval(timer);
			timeX.textContent = "Time ended!";
			/* sendMessage();*/
		} else if (qCounter > 4) {
			clearInterval(timer);
			timeCountEl.textContent = "Quiz ended!";
		}
	}, 1000);

	introEl.style.display = "none";
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

viewHighscoresEl.addEventListener("click", function () {
	mainEl.textContent = "Total Score = " + totalScore;

});

// Variable to Store User's name + User's score
var highScoreArray = [];

//	Function Function Display Score //

function displayScore (){
	userScoreBoard.innerHtml = "";
	for (var i = 0; i < highScoreArray.length; i++) {
  var highScoreList = highScoreArray[i];
	var liScores = document.createElement("li");
	liScores.textContent = highScoreList;
	liScores.setAttribute = ("data-index", i)
	userScoreBoard.appendChild(liScores);

	}	

}

// Function Init
function init() {
	var storedScore = JSON.parse(localStorage.getItem("highScoreArray"));
	if (storedScore !== null){
		highScoreArray = storedScore
}

}

// Function saveScore
function saveScore (){
	// save this info in the local Storage
	localStorage.setItem("highScoreArray", JSON.stringify(highScoreArray));
}


// Event Listener to Submit button once it is clicked

btnSubmit.addEventListener("click", function (event) {
	event.preventDefault();
	quizEndEl.textContent = "Highscores";
	scoreBoard.appendChild(btnGoBack);
	scoreBoard.appendChild(btnClear);
	submitScoreEl.style.display = "none";
	btnGoBack.textContent = "Go Back";
	btnClear.textContent = "Clear Highscores";
	var inputUserName = inputBox.value.trim() + "\n" + totalScore;
	if (inputUserName === "" ){
		return;
	}
	highScoreArray.push(inputUserName);
	inputBox.value = "";

	saveScore();
	displayScore();
	
});

//call Init function so the name and score can be saved to the Highscores section//

init();


btnGoBack.addEventListener("click", function () {
	document.location.reload();
});




