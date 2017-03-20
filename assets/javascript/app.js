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
		question: "Known by many as Dr. J. He obtained ownership of Coca-Cola after retiring from the NBA. Rockin' the Cradle was his signature dunk.",
		picture: "assets/images/drj.png",
		choices: [ 'Julius Erving', 'James Worthy', 'Lebron James', 'Magic Johnson'],
		correct: 0,
	},
	{
		question: "Born in Chicago, Illinois. He won his first championship in 2006. His nickname is \ 'Flash'\ .",
		picture: "assets/images/dwyane.png",
		choices: [ 'Tim Hardaway', 'Alonzo Mourning', 'Dwyane Wade', 'Allen Iverson'],
		correct: 2,
	},
	{
		question: "Named Sixth Man of the Year in 2012. Known for his killer Euro-Step move and is currently one of the top candidates for the MVP award.",
		picture: "assets/images/harden.png",
		choices: [ 'Tim Hardaway', 'James Harden', 'Paul George', 'Lebron James'],
		correct: 1,
	},
	{
		question: "He played college basketball for UCLA. His real name was Lew Alcindor before converting to Islam. He was known for his trademark move \ 'Skyhook'\ .",
		picture: "assets/images/kareem.png",
		choices: [ 'Shaquille Oneal', 'Kareem Abdul Jabar', 'Manut Bol', ''],
		correct: 1,
	},
	{
		question: "He was nicknamed \ 'Black Mamba'\ for his killer mentality on the court. He's a 5-time NBA Champion and won the MVP award in 2008. His career high 81 points in a single game is the 2nd best scoring game in NBA history. ",
		picture: "assets/images/kobe.png",
		choices: [ 'DeAndre Jordan', 'Magic Johnson', 'Michael Jordan', 'Kobe Bryant'],
		correct: 3,
	},
	{
		question: "He's a 3-time NBA Champion and was name Sixth Man of the Year twice in his career. Known for his defensive prowess, he was named All-Defensive team 3 times. ",
		picture: "assets/images/larry.png",
		choices: [ 'Kevin Durant', 'Kevin McHale', 'Larry Bird', 'Robert Parish'],
		correct: 2,
	},
	{
		question: "This player is a 3-time NBA Champion. In his rookie season, he scored over 20 points per game. He played high school basketball in Akron, Ohio. He is the youngest player in NBA history to score 2000 points in his career.",
		picture: "assets/images/lebron.png",
		choices: [ 'Lebron James', 'Paul George', 'Demar Derozan', 'Draymond Green'],
		correct: 0,
	},
	{
		question: "Born in Lansing, Michigan, he had 6 siblings. He was drafted 1st pick in 1979. He led the NBA in steals per game in 1980 and 1981. He leads the NBA in Career Assists per Game.",
		picture: "assets/images/magic.png",
		choices: [ 'Lebron James', 'Kevin Durant', 'Wilt Chamberlain', 'Magic Johnson'],
		correct: 3,
	},
	{
		question: "Known as the Greatest Basketball player of all time. He played baseball professionally. His middle name is \ 'Jeffrey'\ .",
		picture: "assets/images/mj.png",
		choices: [ 'Lebron James', 'Scottie Pippen', 'Michael Jordan', 'George Gervin'],
		correct: 2,
	},
	{
		question: "He's the shortest player to ever play in NBA history. Born in Baltimore, Maryland, he played college basketball for Wake Forest. He averaged 7.6 assists per game and 1.5 steals per game in his NBA career.",
		picture: "assets/images/mugsy.png",
		choices: [ 'Muggsy Bogues', 'Nate Robinson', 'Isaiah Thomas', 'Spud Webb'],
		correct: 0,
	},
	{
		question: "His nickname is \ 'Pistol'\ . He averaged 44.5 points per game for his college basketball team, LSU. He was spectacular showman on the court. His playground moves and circus shots were considered outrageous during his era.",
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

