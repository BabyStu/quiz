const myQuestions = [
  {
    question: "What is 2+2?",
    answers: [
      {text: "4", isCorrect: true},
      {text: "5", isCorrect: false},
      {text: "6", isCorrect: false}
    ],
  },
  {
    question: "Remainder of 23/3?",
    answers: [
      {text: "7", isCorrect: false},
      {text: "4", isCorrect: false},
      {text: "2", isCorrect: true}
    ]
  },
  {
    question: "if x = 2y-8, what does y equal?",
    answers: [
      {text: "x/2+4", isCorrect: true},
      {text: "4", isCorrect: false},
      {text: "x+4", isCorrect: false}
    ]
  }
];

var currentQuestionIndex = 0;
var score = 0;
var timerCount = 0;
var timer;


var timerElement = document.getElementById('timerJS');

const startButton = document.getElementById('startButton');
const questionContainer = document.getElementById('questionContainer');
const answersContainer = document.getElementById('answersContainer');
const scoreContainer = document.getElementById('score');

// var hiScoreSpan = document.querySelector('');
// var namesSpan = document.querySelector('');
// var highscore = document.getElementById('highscores')


startButton.addEventListener('click', startQuiz);

function startQuiz() {
  displayQuestion();
  timerCount = 0;
  startTimer();
  startButton.style.visibility = 'hidden';
}

function displayQuestion() {
  var currentQuestion = myQuestions[currentQuestionIndex];

  questionContainer.innerText = currentQuestion.question;
  answersContainer.innerHTML = '';

  for (let index = 0; index < currentQuestion.answers.length; index++) {
    const answer = currentQuestion.answers[index];
    const answerList = document.createElement('div');
    const answerInput = document.createElement('input');
    const answerLabel = document.createElement('label');

    answerInput.type = 'radio';
    answerInput.name = 'answer';
    answerInput.value = index;
    // answerInput.style.display = 'none';

    answerLabel.textContent = answer.text;

    answerList.appendChild(answerInput);
    answerList.appendChild(answerLabel);
    answersContainer.appendChild(answerList);
  }
}

function grade() {
  var percentage = ((score / myQuestions.length) * 100).toFixed(0);
  scoreContainer.textContent = `You got ${percentage}%`;
}

function next() {
  if (currentQuestionIndex < myQuestions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  } else {
    questionContainer.remove();
    answersContainer.remove();
    startButton.remove();
    grade();
    stopTimer();
  }
}

function checkAnswer() {
  const selectedAnswer = parseInt(
    document.querySelector('input[name="answer"]:checked').value);
  if (myQuestions[currentQuestionIndex].answers[selectedAnswer].isCorrect) {
    score++;
  }
  next();
}

answersContainer.addEventListener('click', checkAnswer);

function startTimer() {
  timer = setInterval(function() {
    timerCount++;
    timerElement.textContent = timerCount;
    console.log(timerCount)
  }, 1000);
} 

function stopTimer() {
  clearInterval(timer);
}

function highScores () {
  var hiScore = localstorage.getItem('yourScore');
  var names = localStorage.getItem('yourName');

  hiScoreSpan.textContent =  yourScore;
  namesSpan.textContent = yourName;
}

function saveScore(){
  localStorage.setItem("percentage", JSON.stringify(percentage));
}

