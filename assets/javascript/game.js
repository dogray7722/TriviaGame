//Document function
$(document).ready(function() {

//Objects containing trivia questions and answers
var worldHistory = {
	question1: "",
	answerA: "", 
	answerB: "",
	answerC: "",
	answerD: "",

	question2: "",
	answerA: "", 
	answerB: "",
	answerC: "",
	answerD: "",

	question3: "",
	answerA: "", 
	answerB: "",
	answerC: "",
	answerD: "",
}

var geograpy = {
	question1: "Which country has legislative authority over Greenland?",
	answerA: "USA", 
	answerB: "Iceland",
	answerC: "Denmark",
	answerD: "Sweden",

	question2: "Which four countries border the Czech Republic?",
	answerA: "Germany, Poland, Austria, Slovenia", 
	answerB: "Germany, Poland, Austria, Slovakia",
	answerC: "Germany, Poland, Hungary, Austria",
	answerD: "Germany, Slovenia, Slovakia, Hungary",

	question3: "What is the capitol of Nigeria?",
	answerA: "Abuja", 
	answerB: "Nairobi",
	answerC: "Lagos",
	answerD: "Yaounde",

	question4: "Which river is the shortest?"
	answerA: "Yangtze"
	answerB: "Yellow"
	answerC: "Parana"
	answerD: "Congo"

}

var world languages = {
	question1: "",
	answer1: "",

	question2: "",
	answer2: "",

	question3: "",
	answer3: ""
}

var world foods = {
	question1: "",
	answer1: "",

	question2: "",
	answer2: "",

	question3: "",
	answer3: ""
}

var countDown;
var correctAnswers;
var incorrectAnswers;
var answersGuessed = [];


	function timer() {
	//Create the timer div, pop it into the html,  and start the clock at 1:30 
	//Start the countdown
	//If the value of the timer reaches zero, call the results function
	};

	function results() {
	//Compare the answers guessed to the correct answers
	//Increment correct answers by one if the answer is correct, increment incorrect answers by one if the answer is incorrect
	//Create the results div, pop it into the html

	};

	function convertTime() {
	//Steal the code from the stopwatch activity to convert time	
	}

	//Geography Button
	$("#geography").on("click", function() {
	//Show the geography questions
	
	//Show the answer choices as radio buttons
	//Don't allow selection of more than one radio button
	//Call the timer function
	});

	//World History Button
	$("#worldhistory").on("click", function() {
	//Show the world history questions
	//Show the answer choices as radio buttons
	//Don't allow selection of more than one radio button
	//Call the timer function

	});

	$("#worldlanguages").on("click", function() {
	//Show the world languages questions
	//Show the answer choices as radio buttons
	//Don't allow selection of more than one radio button
	//Call the timer function

	});

	$("#worldfoods").on("click", function() {
	//Show the world foods questions
	//Show the answer choices as radio buttons
	//Don't allow selection of more than one radio button
	//Call the timer function

	});







});