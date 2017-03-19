var stopwatch = {
	number: 31,
	run: function() {
		counter = setInterval(stopwatch.increment, 1000)
	},
	increment: function() {
		stopwatch.number--;
		$('#show-number').html('<h2>' + stopwatch.number + '</h2>');
		if (stopwatch.number === 0) {
			stopwatch.stop();
		}
	},
	stop: function() {
		clearInterval(counter);
	}
};

var quiz = [ {
		question: "This player played college basketball for Georgetown. He's the shortest player in NBA history to win the MVP award. Second only to Micael Jordan in points per game for the playoffs.",
		picture: "assets/images/ai.png",
		choices: [ 'Kobe Bryant', 'Magic Johnson', 'Lebron James', 'Allen Iverson' ],
		correct: 3,
	},
	{
		question: "His middle name is Emmanuel. His favorite sport except for basketball is Bowling. A 9-time NBA All Star.",
		picture: "assets/images/cp3.png",
		choices: [ 'Chris Paul', 'Kobe Bryant', 'Paul George', 'Dwyane Wade'],
		correct: 0,
	},
	{
		question: "Who is this Basketball Player?",
		picture: "assets/images/drj.png",
		choices: [ 'Julius Erving', 'Larry Bird', 'George Gervin', 'Magic Johnson'],
		correct: 0,
	},
	{
		question: "Who is this Basketball Player?",
		picture: "assets/images/dwyane.png",
		choices: [ 'Tim Hardaway', 'Alonzo Mourning', 'Dwyane Wade', 'Allen Iverson'],
		correct: 2,
	},
	{
		question: "Who is this Basketball Player?",
		picture: "assets/images/harden.png",
		choices: [ 'Tim Hardaway', 'James Harden', 'Paul George', 'Lebron James'],
		correct: 1,
	},
	{
		question: "Who is this Basketball Player?",
		picture: "assets/images/kareem.png",
		choices: [ 'Shaquille Oneal', 'Kareem Abdul Jabar', 'Karl Malone', 'Javal McGee'],
		correct: 1,
	},
	{
		question: "Who is this Basketball Player?",
		picture: "assets/images/kobe.png",
		choices: [ 'DeAndre Jordan', 'Magic Johnson', 'Michael Jordan', 'Kobe Bryant'],
		correct: 3,
	},
	{
		question: "Who is this Basketball Player?",
		picture: "assets/images/larry.png",
		choices: [ 'Kevin Durant', 'Kevin McHale', 'Larry Bird', 'Robert Parish'],
		correct: 2,
	},
	{
		question: "Who is this Basketball Player?",
		picture: "assets/images/lebron.png",
		choices: [ 'Lebron James', 'Paul George', 'Demar Derozan', 'Draymond Green'],
		correct: 0,
	},
	{
		question: "Who is this Basketball Player?",
		picture: "assets/images/magic.png",
		choices: [ 'Lebron James', 'Kevin Durant', 'Wilt Chamberlain', 'Magic Johnson'],
		correct: 3,
	},
	{
		question: "Who is this Basketball Player?",
		picture: "assets/images/mj.png",
		choices: [ 'Lebron James', 'Scottie Pippen', 'Michael Jordan', 'George Gervin'],
		correct: 2,
	},
	{
		question: "Who is this Basketball Player?",
		picture: "assets/images/mugsy.png",
		choices: [ 'Mugsy Bogues', 'Nate Robinson', 'Isaiah Thomas', 'Spud Webb'],
		correct: 0,
	},
	{
		question: "Who is this Basketball Player?",
		picture: "assets/images/pistol.png",
		choices: [ 'Oscar Robertson', 'Jerry West', 'Larry Bird', 'Pete Maravich'],
		correct: 3,

} ];

var numQuestions =  quiz.length;
var numCorrect = 0;
var counter = 0;

var playerPic =  $('<img>');


$('input[name="choice"]').hide;

function nextQuest() {
	$('#questions').text(quiz[counter].question);
	playerPic.attr('src', quiz[counter].picture)
	$('#player').append(playerPic)
	$('#answer0').text(quiz[counter].choices[0]);
	$('#answer1').text(quiz[counter].choices[1]);
	$('#answer2').text(quiz[counter].choices[2]);
	$('#answer3').text(quiz[counter].choices[3]);
}


function validate() {
	if ($('input').is(':checked')) {
		nextQuest();
	} else {
		alert("Please select an answer.");
		counter--;
	}
}

nextQuest();

$('#nextBtn').on('click', function() {
	var answer = ($('input[name="choice"]:checked').val());

	if (answer == quiz[counter].correct) {
		numCorrect++;
	}

	counter++;



	if (counter >= numQuestions) {
		$('#main').hide().fadeIn("slow");
		document.getElementById('main').innerHTML="Quiz Complete! You Score " + numCorrect + " out of " + numQuestions + "!";
		return;
	}

	validate();

	$('.card').hide().fadeIn("slow");

	$('input=[name="choice"]').prop('checked', false);

});

$('#backBtn').on('click', function() {
	if (quiz[counter] === 0) {
		$('.card').hide().fadeIn("slow");
	} else {
		$('.card').hide().fadeIn("slow");
		numCorrect--;
		counter--;
	}

	nextQuest();

});

