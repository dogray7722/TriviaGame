
// Objects containing trivia questions and answers
var worldHistory = {

	question1: 0, 
	answerA:  0,
	answerB: 0,
	answerC: 0,
	answerD: 0,

	question2: 0,
	answerA:  0,
	answerB: 0,
	answerC: 0,
	answerD: 0,

	question3: 0,
	answerA:  0,
	answerB: 0,
	answerC: 0,
	answerD: 0
}

var geography = {

	question1: "Which country has legislative authority over Greenland?",
	answerA: "USA", 
	answerB: "Iceland",
	answerC: "Denmark",
	answerD: "Sweden",

	question2: "Which four countries border the Czech Republic?",
	answerE: "Germany, Poland, Austria, Slovenia", 
	answerF: "Germany, Poland, Austria, Slovakia",
	answerG: "Germany, Poland, Hungary, Austria",
	answerH: "Germany, Slovenia, Slovakia, Hungary",

	question3: "What is the capitol of Nigeria?",
	answerI: "Abuja", 
	answerJ: "Nairobi",
	answerK: "Lagos",
	answerL: "Yaounde",

	question4: "Which river is the shortest?",
	answerM: "Yangtze",
	answerN: "Yellow",
	answerO: "Parana",
	answerP: "Congo",

	answers: ["c","b","a","d"]
}

var worldLanguages = {
	question1: "",
	answer1: "",

	question2: "",
	answer2: "",

	question3: "",
	answer3: ""
}

var worldFoods = {
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

$(document).ready(function() {

	function reset () {

	//Reset the clock to 1:30

	time = 0;
	$('#clock').empty();
    $('#clock').html(01 + ":" + 30);

	};

	function timerStart() {
	
	//Create the timer div, pop it into the html,  and start the clock at 1:30

    if(!clockRunning) {
    	intervalID = setInterval(count, 1000);
    	clockRunning = true;
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

	//Geography Button-- This will be the template for the other questions.  DRY up later.
	$("#geo").on("click", function() {

	//Show the geography questions
	$("#questions").html("<h3>" + geography.question1 + "</h3>")
		
	//Show the answer choices as radio buttons
	var radioBtnA = $('<input type="radio" id="radioA" name="geography1"><label for="radioA">' + geography.answerA + '</label>' + '<br>');
    	radioBtnA.appendTo('#questions');

	var radioBtnB = $('<input type="radio" id="radioB" name="geography1"><label for="radioB">' + geography.answerB + '</label>' + '<br>');
    	radioBtnB.appendTo('#questions');

	var radioBtnC = $('<input type="radio" id="radioC" name="geography1"><label for="radioC">' + geography.answerC + '</label>' + '<br>');
    	radioBtnC.appendTo('#questions');

	var radioBtnD = $('<input type="radio" id="radioD" name="geography1"><label for="radioD">' + geography.answerD + '</label>');
    	radioBtnD.appendTo('#questions');

	$("#questions").append("<h3>" + geography.question2 + "</h3>");

	var radioBtnE = $('<input type="radio" id="radioE" name="geography2"><label for="radioD">' + geography.answerE + '</label>' + '<br>');
    	radioBtnE.appendTo('#questions');

 	var radioBtnF = $('<input type="radio" id="radioF" name="geography2"><label for="radioF">' + geography.answerF + '</label>' + '<br>');
    	radioBtnF.appendTo('#questions');

    var radioBtnG = $('<input type="radio" id="radioG" name="geography2"><label for="radioG">' + geography.answerG + '</label>' + '<br>');
    	radioBtnG.appendTo('#questions');

    var radioBtnH = $('<input type="radio" id="radioH" name="geography2"><label for="radioH">' + geography.answerH + '</label>' + '<br>');
    	radioBtnH.appendTo('#questions');

	$("#questions").append("<h3>" + geography.question3 + "</h3>");

	var radioBtnI = $('<input type="radio" id="radioI" name="geography3"><label for="radioI">' + geography.answerI + '</label>' + '<br>');
    	radioBtnI.appendTo('#questions');

    var radioBtnJ = $('<input type="radio" id="radioJ" name="geography3"><label for="radioJ">' + geography.answerJ + '</label>' + '<br>');
    	radioBtnJ.appendTo('#questions');

    var radioBtnK = $('<input type="radio" id="radioK" name="geography3"><label for="radioK">' + geography.answerK + '</label>' + '<br>');
    	radioBtnK.appendTo('#questions');

    var radioBtnL = $('<input type="radio" id="radioL" name="geography3"><label for="radioL">' + geography.answerL + '</label>' + '<br>');
    	radioBtnL.appendTo('#questions');

	$("#questions").append("<h3>" + geography.question4 + "</h3>");

	var radioBtnM = $('<input type="radio" id="radioM" name="geography4"><label for="radioM">' + geography.answerM + '</label>' + '<br>');
    	radioBtnM.appendTo('#questions');

    var radioBtnN = $('<input type="radio" id="radioN" name="geography4"><label for="radioN">' + geography.answerN + '</label>' + '<br>');
    	radioBtnN.appendTo('#questions');

    var radioBtnO = $('<input type="radio" id="radioO" name="geography4"><label for="radioO">' + geography.answerO + '</label>' + '<br>');
    	radioBtnO.appendTo('#questions');

    var radioBtnP = $('<input type="radio" id="radioP" name="geography4" value="c"><label for="radioP">' + geography.answerP + '</label>' + '<br>');
    	radioBtnP.appendTo('#questions');

    var submit = $('<input id="btnSubmit" type="submit" value="submit" />')
    	submit.appendTo('#questions');

    	$( "input" ).click(function () {
		var selection = $('input[type="radio"]:checked').val();
		alert(selection);	

		});

// ( $( "input:checked" ).val() + " is checked!" )
	//Call the timer functions
	reset();
	// timerStart();

	//Call the capture function to capture answers
	// capture();

	});

	//World History Button
	// $("#worldhistory").on("click", function() {
	// });

	// $("#worldlanguages").on("click", function() {
	// });

	// $("#worldfoods").on("click", function() {
	// });

	// function capture() {

	//Capture the radio buttons the user selects
	// $( "input" ).on("click", function () {
	// 	var selection = $('input[type="radio"]:checked').val();
	// 	alert(selection);
	// });

 	//Push the answers chosen into an array
	// ($('input[name=geography1]:checked').val()).push(answersGuessed);
	// ($('input[name=geography2]:checked').val()).push(answersGuessed);
	// ($('input[name=geography3]:checked').val()).push(answersGuessed);
	// ($('input[name=geography4]:checked').val()).push(answersGuessed);
  	
  	//send the answers Guessed to the result function to compare
  	// result(answersGuessed);

  	// };

  	function results(a) {
  	
  	//compare the answersGuessed to the answers object of the array

	for (i = 0; i < geography.answers.length; i++) {
		if (geography.answers[i] === a[i]) {
	
		correctAnswers++;
		
		} else if (geography.answers[i] != answersGuessed[i])

		incorrectAnswers++;
	}

		console.log(correctAnswers);
		console.log(incorrectAnswers);
	//Create the results div, and pop it into the html
	// $('#questions').html("<p>Correct Answers " + correctAnswers + "</p>" +
	// 	"<p>Incorrect Answers " + incorrectAnswers + "</p>")

	};


});