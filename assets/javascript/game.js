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

	question4: "Which river is the shortest?",
	answerA: "Yangtze",
	answerB: "Yellow",
	answerC: "Parana",
	answerD: "Congo",

	answers: ["c","b","a","d"];

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

var correctAnswers;
var incorrectAnswers;
var answersGuessed = [];
var time = 0;
var clockRunning = false;
var intervalID;


	function reset () {

	//Reset the clock to 1:30

	time = 0;
	$('#clock').empty();
    $('#clock').text("01:30");

	}

	function timerStart() {
	
	//Create the timer div, pop it into the html,  and start the clock at 1:30

    if(!clockRunning) {
    	intervalID = setInterval(count, 1000);
    	}

	//If the value of the timer reaches zero, call the results function
	
	};

	function stop() {
	
	/* Create a function to stop the countdown.  Will call this when all questions
	have been answered and the user hits submit */

	clearInterval(stop);
	clockRunning = false;

	};

	function count() {

	//Decrement the time by one 
	time--;

	//Get the current time, pass it into the time converter, and
	//save the result as a variable.

	var counter = convertTime(time);

	//Display the converted time in the "clock" div.

	$('#clock').html(counter);
	
	}; 

	function convertTime(t) {
	//Steal the code from the stopwatch activity to convert time	
	
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
  	};

  	function capture() {
  	//Need to research how to do this, but the intention here
  	//is to map the radio button answer choices to letters a, b, c, or d


  	//Push the answers chosen into an array
  	$(?'.userAnswers'?).val(this).push(answersGuessed);
  	
  	//send the answers Guessed to the result function to compare
  	result(answersGuessed);

  	};

  	function results(a) {
  	
  	//compare the answersGuessed to the answers object of the array
  	//Need to update theclickedcateory.answers with the correct value

	for (i = 0; i < [theclickedcategory.answers].length); i++ {
		if ([theclickedcategory].answers[i] === a[i]) {
	
		correctAnswers++;
		
		} else if ([theclickedcategory].answers[i] != answersGuessed[i])

		incorrectAnswers++;
	}

	//Create the results div, and pop it into the html
	$('#questions').html("<p>Correct Answers " + correctAnswers + "</p>" +
		"<p>Incorrect Answers " + incorrectAnswers + "</p>")

	};


	//Geography Button-- I can set a class on this button and reduce many lines of code below
	$("#geography").on("click", function() {
	//Show the geography questions
	//

	//Show the answer choices as radio buttons
	//Don't allow selection of more than one radio button
	//Call the timer function
	timerStart();

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