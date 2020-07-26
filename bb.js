
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
        var question4 = document.quiz.question4.value;
        var question5 = document.quiz.question5.value;
	var correct = 0;


	if (question1 == "Venus") {
		correct++;
}
	if (question2 == "Apollo 11") {
		correct++;
}	
	if (question3 == "Andromeda") {
		correct++;
	}
        if (question4 == "Venus") {
		correct++;
	}
	if (question5 == "Ceres") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	
	}