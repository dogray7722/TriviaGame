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
    $('#clock').text("01:30");

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
	$("#questions").html("Stuff")/*("<h3>" + geography.question1 + "</h3>")*/
	console.log(geography);

	
		
	//Show the answer choices as radio buttons
	// var radioBtnA = $('<input type="radio" name="geography1" value="geography.answerA" />');
 //    	radioBtnA.appendTo('#questions');

 //    var radioBtnB = $('<input type="radio" name="geography1" value="geography.answerB" />');
 //    	radioBtnB.appendTo('#questions');

 //    var radioBtnC = $('<input type="radio" name="geography1" value="geography.answerC" />');
 //    	radioBtnC.appendTo('#questions');

 //    var radioBtnD = $('<input type="radio" name="geography1" value="geography.answerD" />');
 //    	radioBtnD.appendTo('#questions');

	// $("#questions").appendTo("<h3>" + geography.question2 + "</h3>");

	// var radioBtnE = $('<input type="radio" name="geography2" value="geography.answerE" />');
 //    	radioBtnE.appendTo('#questions');

 //    var radioBtnF = $('<input type="radio" name="geography2" value="geography.answerF" />');
 //    	radioBtnF.appendTo('#questions');

 //    var radioBtnG = $('<input type="radio" name="geography2" value="geography.answerG" />');
 //    	radioBtnG.appendTo('#questions');

 //    var radioBtnH = $('<input type="radio" name="geography2" value="geography.answerH" />');
 //    	radioBtnH.appendTo('#questions');

	// $("#questions").appendTo("<h3>" + geography.question3 + "</h3>");

	// var radioBtnI = $('<input type="radio" name="geography3" value="geography.answerI" />');
 //    	radioBtnI.appendTo('#questions');

 //    var radioBtnJ = $('<input type="radio" name="geography3" value="geography.answerJ" />');
 //    	radioBtnJ.appendTo('#questions');

 //    var radioBtnK = $('<input type="radio" name="geography3" value="geography.answerK" />');
 //    	radioBtnK.appendTo('#questions');

 //    var radioBtnL = $('<input type="radio" name="geography3" value="geography.answerL" />');
 //    	radioBtnL.appendTo('#questions');

	// $("#questions").appendTo("<h3>" + geography.question4 + "</h3>");

	// var radioBtnM = $('<input type="radio" name="geography4" value="geography.answerM" />');
 //    	radioBtnM.appendTo('#questions');

 //    var radioBtnN = $('<input type="radio" name="geography4" value="geography.answerN" />');
 //    	radioBtnN.appendTo('#questions');

 //    var radioBtnO = $('<input type="radio" name="geography4" value="geography.answerO" />');
 //    	radioBtnO.appendTo('#questions');

 //    var radioBtnP = $('<input type="radio" name="geography4" value="geography.answerP" />');
 //    	radioBtnP.appendTo('#questions');

	//Call the timer functions
	// reset();
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

 //  	//Push the answers chosen into an array
	// ($('input[name=geography1]:checked').val()).push(answersGuessed);
	// ($('input[name=geography1]:checked').val()).push(answersGuessed);
	// ($('input[name=geography1]:checked').val()).push(answersGuessed);
	// ($('input[name=geography1]:checked').val()).push(answersGuessed);
  	
  	//send the answers Guessed to the result function to compare
  	// result(answersGuessed);

  	// };

  	// function results(a) {
  	
  	//compare the answersGuessed to the answers object of the array
  	//Need to update theclickedcateory.answers with the correct value

	// for (i = 0; i < geography.answers.length; i++) {
	// 	if (geography.answers[i] === a[i]) {
	
	// 	correctAnswers++;
		
	// 	} else if ([theclickedcategory].answers[i] != answersGuessed[i])

	// 	incorrectAnswers++;
	// }

	//Create the results div, and pop it into the html
	// $('#questions').html("<p>Correct Answers " + correctAnswers + "</p>" +
	// 	"<p>Incorrect Answers " + incorrectAnswers + "</p>")

	// };


});