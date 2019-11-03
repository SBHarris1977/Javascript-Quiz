var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var i = 0;
var tester = localStorage;
var quizTime = 75;
var userInitials = '';

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var timeSeconds = document.getElementById('timer');

//Load  the first question
function loadQuestion(questionIndex){
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;

};

function addScore() {
    score++
}


//Load the next question
function loadNextQuestion () {
    //checking to make sure a selection was made, if not the user is alerted
var selectedOption = document.querySelector('input[type=radio]:checked');
if(!selectedOption){
    alert('Please select your answer!');
    return;
}

//the correct answer is awarded 1 point each
var answer = selectedOption.value;
var questionAnswer = questions[currentQuestion].response

function timer() {
    Interval = setInterval
    
}

//console.log("user choice - " + answer)
//console.log("right answer - " + questionAnswer)
//add timer function here

if(questionAnswer === answer){
    score++
    //console.log("right")
    //console.log("score - " + score)
} else {
    //console.log("wrong")
}
///Last question will show as finish
selectedOption.checked = false;
currentQuestion++;
if(currentQuestion === totQuestions - 1){
    nextButton.textContent = 'Finish';
}
//Once last question is answered the quz is hidden and the results are displayed
if(currentQuestion == totQuestions){
    container.style.display = 'none';
    resultCont.style.display = '';
    resultCont.textContent = 'Your Score: ' + score;
    localStorage.setItem('score', score);
    var userInitials =  prompt("Enter your initals.");
    localStorage.setItem('userIntials', userInitials);
    return;

}
loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);