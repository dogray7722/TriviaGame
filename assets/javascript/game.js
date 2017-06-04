
// Objects containing trivia questions and answers
var worldHistory = {

	question1: "The construction of the Great Wall of China (as it appers today) was completed during which Chinese dynasty?", 
	answerA: "Song" ,
	answerB: "Ming",
	answerC: "Han",
	answerD: "Tang",

	question2: "According to ancient Greek Mythology, who was punished by having his liver devoured by eagles each day?",
	answerE: "Sysiphus",
	answerF: "Tantalus",
	answerG: "Lysimachus",
	answerH: "Prometheus",

	question3: "Which civilization was the largest empire in the Western Hemisphere in the 15th Century?",
	answerI: "Ancestral Pueblo",
	answerJ: "Inca",
	answerK: "Maya",
	answerL: "Aztec",

	question4: "A full one-third of all military deaths in WWI were the result of:",
	answerM: "Munitions from artillery fire",
	answerN: "Chemical weapons",
	answerO: "Charging across the trenches",
	answerP: "The Spanish flu",

	answers: ["b", "d", "b", "d" ] 
}

var geography = {

	question1: "Which country has legislative authority over Greenland?",
	answerA: "Canada", 
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
	question1: "Llanfairpwllgwyngyll, has its origin from which language?",
	answerA: "Welsh",
	answerB: "Icelandic",
	answerC: "Scottish Gaelic",
	answerD: "Cornish",

	question2: "The word, 'robot' was introduced by a native speaker of which language?",
	answerE: "Polish",
	answerF: "Czech",
	answerG: "Serbian",
	answerH: "Croatian",

	question3: "Finnish comes from the same linguistic family as which of the following:",
	answerI: "Russian",
	answerJ: "Icelandic",
	answerK: "Danish",
	answerL: "Hungarian",

	question4: "What is the official language of Angola?",
	answerM: "Portuguese",
	answerN: "English",
	answerO: "German",
	answerP: "French",

	answers: ["a", "b", "d", "a"]
}

var worldFoods = {
	question1: "What is the name for this Japanese delicacy made from fermented soy beans?",
	answerA: "Fugu",
	answerB: "Nori",
	answerC: "Natto",
	answerD: "Shabu Shabu",

	question2: "Which of the following is not a common ingredient of Eskimo Ice Cream?",
	answerE: "dried salmon eggs",
	answerF: "seal fat",
	answerG: "chocolate",
	answerH: "reindeer fat",

	question3: "Chapulines are a traditional Mexican snack made from this insect:",
	answerI: "Grasshoppers",
	answerJ: "Bees",
	answerK: "Ants",
	answerL: "Grubs",

	question4: "Kumis, or fermented horse milk, is a common beverage for the people of:",
	answerM: "Nepal",
	answerN: "Mongolia",
	answerO: "Korea",
	answerP: "Japan",

	answers: ["c", "c", "a", "b"]
}

var correctAnswers = 0;
var incorrectAnswers = 0;
var answersGuessed = [];
var clockRunning = false;
var timer;

$(document).ready(function() {

	//Geography Button-- This will be the template for the other questions.  DRY up later.
	$("#geo").on("click", function() {

	$(".categories button").attr("disabled", true);

	//Start the countdown
	countDown();

	function countDown() {
	var timeleft = 60;
	timer = setInterval(function(){
    timeleft--;
    $("#clock").html("<p> You have " + timeleft + " seconds remaining to choose your answers. </p>");
    if (timeleft <= 0) {
        clearInterval(timer);
        $("#clock").empty();
    	checked(); }
    },1000);
	};


	//Show the geography questions
	$("#questions").html("<h3>" + geography.question1 + "</h3>")
		
	//Show the answer choices as radio buttons
	var radioBtnA = $('<input type="radio" id="radioA" name="question1" value="a"><label for="radioA">' + geography.answerA + '</label>' + '<br>');
    	radioBtnA.appendTo('#questions');

	var radioBtnB = $('<input type="radio" id="radioB" name="question1" value="b"><label for="radioB">' + geography.answerB + '</label>' + '<br>');
    	radioBtnB.appendTo('#questions');

	var radioBtnC = $('<input type="radio" id="radioC" name="question1" value="c"><label for="radioC">' + geography.answerC + '</label>' + '<br>');
    	radioBtnC.appendTo('#questions');

	var radioBtnD = $('<input type="radio" id="radioD" name="question1" value="d"><label for="radioD">' + geography.answerD + '</label>');
    	radioBtnD.appendTo('#questions');

	$("#questions").append("<h3>" + geography.question2 + "</h3>");

	var radioBtnE = $('<input type="radio" id="radioE" name="question2" value="a"><label for="radioD">' + geography.answerE + '</label>' + '<br>');
    	radioBtnE.appendTo('#questions');

 	var radioBtnF = $('<input type="radio" id="radioF" name="question2" value="b"><label for="radioF">' + geography.answerF + '</label>' + '<br>');
    	radioBtnF.appendTo('#questions');

    var radioBtnG = $('<input type="radio" id="radioG" name="question2" value="c"><label for="radioG">' + geography.answerG + '</label>' + '<br>');
    	radioBtnG.appendTo('#questions');

    var radioBtnH = $('<input type="radio" id="radioH" name="question2" value="d"><label for="radioH">' + geography.answerH + '</label>' + '<br>');
    	radioBtnH.appendTo('#questions');

	$("#questions").append("<h3>" + geography.question3 + "</h3>");

	var radioBtnI = $('<input type="radio" id="radioI" name="question3" value="a"><label for="radioI">' + geography.answerI + '</label>' + '<br>');
    	radioBtnI.appendTo('#questions');

    var radioBtnJ = $('<input type="radio" id="radioJ" name="question3" value="b"><label for="radioJ">' + geography.answerJ + '</label>' + '<br>');
    	radioBtnJ.appendTo('#questions');

    var radioBtnK = $('<input type="radio" id="radioK" name="question3" value="c"><label for="radioK">' + geography.answerK + '</label>' + '<br>');
    	radioBtnK.appendTo('#questions');

    var radioBtnL = $('<input type="radio" id="radioL" name="question3" value="d"><label for="radioL">' + geography.answerL + '</label>' + '<br>');
    	radioBtnL.appendTo('#questions');

	$("#questions").append("<h3>" + geography.question4 + "</h3>");

	var radioBtnM = $('<input type="radio" id="radioM" name="question4" value="a"><label for="radioM">' + geography.answerM + '</label>' + '<br>');
    	radioBtnM.appendTo('#questions');

    var radioBtnN = $('<input type="radio" id="radioN" name="question4" value="b"><label for="radioN">' + geography.answerN + '</label>' + '<br>');
    	radioBtnN.appendTo('#questions');

    var radioBtnO = $('<input type="radio" id="radioO" name="question4" value="c"><label for="radioO">' + geography.answerO + '</label>' + '<br>');
    	radioBtnO.appendTo('#questions');

    var radioBtnP = $('<input type="radio" id="radioP" name="question4" value="d"><label for="radioP">' + geography.answerP + '</label>' + '<br>');
    	radioBtnP.appendTo('#questions');

    var submit = $('<input id="btnSubmit" class="btn btn-default" type="submit" value="submit" />')
    	submit.appendTo('#questions');

		function checked() {

		//Get the selected choices
		var selection1 = $("input[name='question1']:checked").val(); 
		var selection2 = $("input[name='question2']:checked").val(); 
		var selection3 = $("input[name='question3']:checked").val();
		var selection4 = $("input[name='question4']:checked").val();

		//Push the answers into an array
		answersGuessed.push(selection1);
		answersGuessed.push(selection2);
		answersGuessed.push(selection3);
		answersGuessed.push(selection4);			

  		result(answersGuessed);

		function result(a) {
  	
  		//compare the answersGuessed to the answers object of the array

			for (i = 0; i < (geography.answers).length; i++) {
				if (geography.answers[i] === a[i]) {

				correctAnswers++;
		
				} else if (geography.answers[i] !== answersGuessed[i]) {
			
				incorrectAnswers++;
			
				}

			};

			//Create the results div, and pop it into the html
			$('#questions').html("<h3>Correct Answers: " + correctAnswers + "</h3>" +
			"<h3>Incorrect Answers: " + incorrectAnswers + "</h3>")

			};

		};

		$( "input:submit" ).click(function () {
			checked();
			clearInterval(timer);
			$("#clock").empty();
			$(".categories button").attr("disabled", false);
		});

	});

	//World History Button
	$("#worldhistory").on("click", function() {

	$(".categories button").attr("disabled", true);

	//Start the countdown
	countDown();

	function countDown() {
	var timeleft = 60;
	timer = setInterval(function(){
    timeleft--;
    $("#clock").html("<p> You have " + timeleft + " seconds remaining to choose your answers. </p>");
    if (timeleft <= 0) {
        clearInterval(timer);
        $("#clock").empty();
    	checked(); }
    },1000);
	};

	//Show the worldHistory questions
	$("#questions").html("<h3>" + worldHistory.question1 + "</h3>")
		
	//Show the answer choices as radio buttons
	var radioBtnA = $('<input type="radio" id="radioA" name="question1" value="a"><label for="radioA">' + worldHistory.answerA + '</label>' + '<br>');
    	radioBtnA.appendTo('#questions');

	var radioBtnB = $('<input type="radio" id="radioB" name="question1" value="b"><label for="radioB">' + worldHistory.answerB + '</label>' + '<br>');
    	radioBtnB.appendTo('#questions');

	var radioBtnC = $('<input type="radio" id="radioC" name="question1" value="c"><label for="radioC">' + worldHistory.answerC + '</label>' + '<br>');
    	radioBtnC.appendTo('#questions');

	var radioBtnD = $('<input type="radio" id="radioD" name="question1" value="d"><label for="radioD">' + worldHistory.answerD + '</label>');
    	radioBtnD.appendTo('#questions');

	$("#questions").append("<h3>" + worldHistory.question2 + "</h3>");

	var radioBtnE = $('<input type="radio" id="radioE" name="question2" value="a"><label for="radioD">' + worldHistory.answerE + '</label>' + '<br>');
    	radioBtnE.appendTo('#questions');

 	var radioBtnF = $('<input type="radio" id="radioF" name="question2" value="b"><label for="radioF">' + worldHistory.answerF + '</label>' + '<br>');
    	radioBtnF.appendTo('#questions');

    var radioBtnG = $('<input type="radio" id="radioG" name="question2" value="c"><label for="radioG">' + worldHistory.answerG + '</label>' + '<br>');
    	radioBtnG.appendTo('#questions');

    var radioBtnH = $('<input type="radio" id="radioH" name="question2" value="d"><label for="radioH">' + worldHistory.answerH + '</label>' + '<br>');
    	radioBtnH.appendTo('#questions');

	$("#questions").append("<h3>" + worldHistory.question3 + "</h3>");

	var radioBtnI = $('<input type="radio" id="radioI" name="question3" value="a"><label for="radioI">' + worldHistory.answerI + '</label>' + '<br>');
    	radioBtnI.appendTo('#questions');

    var radioBtnJ = $('<input type="radio" id="radioJ" name="question3" value="b"><label for="radioJ">' + worldHistory.answerJ + '</label>' + '<br>');
    	radioBtnJ.appendTo('#questions');

    var radioBtnK = $('<input type="radio" id="radioK" name="question3" value="c"><label for="radioK">' + worldHistory.answerK + '</label>' + '<br>');
    	radioBtnK.appendTo('#questions');

    var radioBtnL = $('<input type="radio" id="radioL" name="question3" value="d"><label for="radioL">' + worldHistory.answerL + '</label>' + '<br>');
    	radioBtnL.appendTo('#questions');

	$("#questions").append("<h3>" + worldHistory.question4 + "</h3>");

	var radioBtnM = $('<input type="radio" id="radioM" name="question4" value="a"><label for="radioM">' + worldHistory.answerM + '</label>' + '<br>');
    	radioBtnM.appendTo('#questions');

    var radioBtnN = $('<input type="radio" id="radioN" name="question4" value="b"><label for="radioN">' + worldHistory.answerN + '</label>' + '<br>');
    	radioBtnN.appendTo('#questions');

    var radioBtnO = $('<input type="radio" id="radioO" name="question4" value="c"><label for="radioO">' + worldHistory.answerO + '</label>' + '<br>');
    	radioBtnO.appendTo('#questions');

    var radioBtnP = $('<input type="radio" id="radioP" name="question4" value="d"><label for="radioP">' + worldHistory.answerP + '</label>' + '<br>');
    	radioBtnP.appendTo('#questions');

    var submit = $('<input id="btnSubmit" type="submit" value="submit" />')
    	submit.appendTo('#questions');

		function checked() {

		//Get the selected choices
		var selection1 = $("input[name='question1']:checked").val(); 
		var selection2 = $("input[name='question2']:checked").val(); 
		var selection3 = $("input[name='question3']:checked").val();
		var selection4 = $("input[name='question4']:checked").val();

		//Push the answers into an array
		answersGuessed.push(selection1);
		answersGuessed.push(selection2);
		answersGuessed.push(selection3);
		answersGuessed.push(selection4);			

  		result(answersGuessed);

		function result(a) {
  	
  		//compare the answersGuessed to the answers object of the array

			for (i = 0; i < (worldHistory.answers).length; i++) {
				if (worldHistory.answers[i] === a[i]) {

				correctAnswers++;
		
				} else if (worldHistory.answers[i] !== answersGuessed[i]) {
			
				incorrectAnswers++;
			
				}

			};

			//Create the results div, and pop it into the html
			$('#questions').html("<p>Correct Answers: " + correctAnswers + "</p>" +
			"<p>Incorrect Answers: " + incorrectAnswers + "</p>")

			};

		};

		$( "input:submit" ).click(function () {
			checked();
			clearInterval(timer);
			$("#clock").empty();
			$(".categories button").attr("disabled", false);
		});

	});

	$("#worldlanguages").on("click", function() {
	
	$(".categories button").attr("disabled", true);

	//Start the countdown
	countDown();

	function countDown() {
	var timeleft = 60;
	timer = setInterval(function(){
    timeleft--;
    $("#clock").html("<p> You have " + timeleft + " seconds remaining to choose your answers. </p>");
    if (timeleft <= 0) {
        clearInterval(timer);
        $("#clock").empty();
    	checked(); }
    },1000);
	};

	//Show the worldLanguages questions
	$("#questions").html("<h3>" + worldLanguages.question1 + "</h3>")
		
	//Show the answer choices as radio buttons
	var radioBtnA = $('<input type="radio" id="radioA" name="question1" value="a"><label for="radioA">' + worldLanguages.answerA + '</label>' + '<br>');
    	radioBtnA.appendTo('#questions');

	var radioBtnB = $('<input type="radio" id="radioB" name="question1" value="b"><label for="radioB">' + worldLanguages.answerB + '</label>' + '<br>');
    	radioBtnB.appendTo('#questions');

	var radioBtnC = $('<input type="radio" id="radioC" name="question1" value="c"><label for="radioC">' + worldLanguages.answerC + '</label>' + '<br>');
    	radioBtnC.appendTo('#questions');

	var radioBtnD = $('<input type="radio" id="radioD" name="question1" value="d"><label for="radioD">' + worldLanguages.answerD + '</label>');
    	radioBtnD.appendTo('#questions');

	$("#questions").append("<h3>" + worldLanguages.question2 + "</h3>");

	var radioBtnE = $('<input type="radio" id="radioE" name="question2" value="a"><label for="radioD">' + worldLanguages.answerE + '</label>' + '<br>');
    	radioBtnE.appendTo('#questions');

 	var radioBtnF = $('<input type="radio" id="radioF" name="question2" value="b"><label for="radioF">' + worldLanguages.answerF + '</label>' + '<br>');
    	radioBtnF.appendTo('#questions');

    var radioBtnG = $('<input type="radio" id="radioG" name="question2" value="c"><label for="radioG">' + worldLanguages.answerG + '</label>' + '<br>');
    	radioBtnG.appendTo('#questions');

    var radioBtnH = $('<input type="radio" id="radioH" name="question2" value="d"><label for="radioH">' + worldLanguages.answerH + '</label>' + '<br>');
    	radioBtnH.appendTo('#questions');

	$("#questions").append("<h3>" + worldLanguages.question3 + "</h3>");

	var radioBtnI = $('<input type="radio" id="radioI" name="question3" value="a"><label for="radioI">' + worldLanguages.answerI + '</label>' + '<br>');
    	radioBtnI.appendTo('#questions');

    var radioBtnJ = $('<input type="radio" id="radioJ" name="question3" value="b"><label for="radioJ">' + worldLanguages.answerJ + '</label>' + '<br>');
    	radioBtnJ.appendTo('#questions');

    var radioBtnK = $('<input type="radio" id="radioK" name="question3" value="c"><label for="radioK">' + worldLanguages.answerK + '</label>' + '<br>');
    	radioBtnK.appendTo('#questions');

    var radioBtnL = $('<input type="radio" id="radioL" name="question3" value="d"><label for="radioL">' + worldLanguages.answerL + '</label>' + '<br>');
    	radioBtnL.appendTo('#questions');

	$("#questions").append("<h3>" + worldLanguages.question4 + "</h3>");

	var radioBtnM = $('<input type="radio" id="radioM" name="question4" value="a"><label for="radioM">' + worldLanguages.answerM + '</label>' + '<br>');
    	radioBtnM.appendTo('#questions');

    var radioBtnN = $('<input type="radio" id="radioN" name="question4" value="b"><label for="radioN">' + worldLanguages.answerN + '</label>' + '<br>');
    	radioBtnN.appendTo('#questions');

    var radioBtnO = $('<input type="radio" id="radioO" name="question4" value="c"><label for="radioO">' + worldLanguages.answerO + '</label>' + '<br>');
    	radioBtnO.appendTo('#questions');

    var radioBtnP = $('<input type="radio" id="radioP" name="question4" value="d"><label for="radioP">' + worldLanguages.answerP + '</label>' + '<br>');
    	radioBtnP.appendTo('#questions');

    var submit = $('<input id="btnSubmit" type="submit" value="submit" />')
    	submit.appendTo('#questions');

		function checked() {

		//Get the selected choices
		var selection1 = $("input[name='question1']:checked").val(); 
		var selection2 = $("input[name='question2']:checked").val(); 
		var selection3 = $("input[name='question3']:checked").val();
		var selection4 = $("input[name='question4']:checked").val();

		//Push the answers into an array
		answersGuessed.push(selection1);
		answersGuessed.push(selection2);
		answersGuessed.push(selection3);
		answersGuessed.push(selection4);			

  		result(answersGuessed);

		function result(a) {
  	
  		//compare the answersGuessed to the answers object of the array

			for (i = 0; i < (worldLanguages.answers).length; i++) {
				if (worldHistory.answers[i] === a[i]) {

				correctAnswers++;
		
				} else if (worldLanguages.answers[i] !== answersGuessed[i]) {
			
				incorrectAnswers++;
			
				}

			};

			//Create the results div, and pop it into the html
			$('#questions').html("<p>Correct Answers: " + correctAnswers + "</p>" +
			"<p>Incorrect Answers: " + incorrectAnswers + "</p>")

			};

		};

		$( "input:submit" ).click(function () {
			checked();
			clearInterval(timer);
			$("#clock").empty();
			$(".categories button").attr("disabled", false);
		});

	});

	$("#worldfoods").on("click", function() {

	$(".categories button").attr("disabled", true);

	//Start the countdown
	countDown();

	function countDown() {
	var timeleft = 60;
	timer = setInterval(function(){
    timeleft--;
    $("#clock").html("<p> You have " + timeleft + " seconds remaining to choose your answers. </p>");
    if (timeleft <= 0) {
        clearInterval(timer);
        $("#clock").empty();
    	checked(); }
    },1000);
	};

	$("#questions").append("<h3>" + worldFoods.question1 + "</h3>");

		//Show the answer choices as radio buttons
	var radioBtnA = $('<input type="radio" id="radioA" name="question1" value="a"><label for="radioA">' + worldFoods.answerA + '</label>' + '<br>');
    	radioBtnA.appendTo('#questions');

	var radioBtnB = $('<input type="radio" id="radioB" name="question1" value="b"><label for="radioB">' + worldFoods.answerB + '</label>' + '<br>');
    	radioBtnB.appendTo('#questions');

	var radioBtnC = $('<input type="radio" id="radioC" name="question1" value="c"><label for="radioC">' + worldFoods.answerC + '</label>' + '<br>');
    	radioBtnC.appendTo('#questions');

	var radioBtnD = $('<input type="radio" id="radioD" name="question1" value="d"><label for="radioD">' + worldFoods.answerD + '</label>');
    	radioBtnD.appendTo('#questions');

	$("#questions").append("<h3>" + worldFoods.question2 + "</h3>");

	var radioBtnE = $('<input type="radio" id="radioE" name="question2" value="a"><label for="radioD">' + worldFoods.answerE + '</label>' + '<br>');
    	radioBtnE.appendTo('#questions');

 	var radioBtnF = $('<input type="radio" id="radioF" name="question2" value="b"><label for="radioF">' + worldFoods.answerF + '</label>' + '<br>');
    	radioBtnF.appendTo('#questions');

    var radioBtnG = $('<input type="radio" id="radioG" name="question2" value="c"><label for="radioG">' + worldFoods.answerG + '</label>' + '<br>');
    	radioBtnG.appendTo('#questions');

    var radioBtnH = $('<input type="radio" id="radioH" name="question2" value="d"><label for="radioH">' + worldFoods.answerH + '</label>' + '<br>');
    	radioBtnH.appendTo('#questions');

	$("#questions").append("<h3>" + worldFoods.question3 + "</h3>");

	var radioBtnI = $('<input type="radio" id="radioI" name="question3" value="a"><label for="radioI">' + worldFoods.answerI + '</label>' + '<br>');
    	radioBtnI.appendTo('#questions');

    var radioBtnJ = $('<input type="radio" id="radioJ" name="question3" value="b"><label for="radioJ">' + worldFoods.answerJ + '</label>' + '<br>');
    	radioBtnJ.appendTo('#questions');

    var radioBtnK = $('<input type="radio" id="radioK" name="question3" value="c"><label for="radioK">' + worldFoods.answerK + '</label>' + '<br>');
    	radioBtnK.appendTo('#questions');

    var radioBtnL = $('<input type="radio" id="radioL" name="question3" value="d"><label for="radioL">' + worldFoods.answerL + '</label>' + '<br>');
    	radioBtnL.appendTo('#questions');

	$("#questions").append("<h3>" + worldFoods.question4 + "</h3>");

	var radioBtnM = $('<input type="radio" id="radioM" name="question4" value="a"><label for="radioM">' + worldFoods.answerM + '</label>' + '<br>');
    	radioBtnM.appendTo('#questions');

    var radioBtnN = $('<input type="radio" id="radioN" name="question4" value="b"><label for="radioN">' + worldFoods.answerN + '</label>' + '<br>');
    	radioBtnN.appendTo('#questions');

    var radioBtnO = $('<input type="radio" id="radioO" name="question4" value="c"><label for="radioO">' + worldFoods.answerO + '</label>' + '<br>');
    	radioBtnO.appendTo('#questions');

    var radioBtnP = $('<input type="radio" id="radioP" name="question4" value="d"><label for="radioP">' + worldFoods.answerP + '</label>' + '<br>');
    	radioBtnP.appendTo('#questions');

    var submit = $('<input id="btnSubmit" type="submit" value="submit" />')
    	submit.appendTo('#questions');

		function checked() {

		//Get the selected choices
		var selection1 = $("input[name='question1']:checked").val(); 
		var selection2 = $("input[name='question2']:checked").val(); 
		var selection3 = $("input[name='question3']:checked").val();
		var selection4 = $("input[name='question4']:checked").val();

		//Push the answers into an array
		answersGuessed.push(selection1);
		answersGuessed.push(selection2);
		answersGuessed.push(selection3);
		answersGuessed.push(selection4);			

  		result(answersGuessed);

		function result(a) {
  	
  		//compare the answersGuessed to the answers object of the array

			for (i = 0; i < (worldFoods.answers).length; i++) {
				if (worldHistory.answers[i] === a[i]) {

				correctAnswers++;
		
				} else if (worldFoods.answers[i] !== answersGuessed[i]) {
			
				incorrectAnswers++;
			
				}

			};

			//Create the results div, and pop it into the html
			$('#questions').html("<p>Correct Answers: " + correctAnswers + "</p>" +
			"<p>Incorrect Answers: " + incorrectAnswers + "</p>")

			};

		};

		$( "input:submit" ).click(function () {
			checked();
			clearInterval(timer);
			$("#clock").empty();
			$(".categories button").attr("disabled", false);
		});

	});

});