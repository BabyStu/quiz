const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: [
        "Douglas Crockford",
        "Sheryl Sandberg",
        "Brendan Eich"
      ],
      correctAnswer: "Brendan Eich"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];
  
  const quizContainer = document.getElementById('quizContainer');
  const startButton = document.getElementById('startButton');
  const scoreContainer = document.getElementById('score');

  var currentQuestionIndex = 0;
  
  startButton.addEventListener('click', startQuiz);
  
  function startQuiz() {
    buildQuiz();
    displayQuestion();
    startButton.disabled = true;
  }
  
  function displayQuestion() {
    var questionSelector = document.getElementById('question');
    var answerSelector = document.getElementById('answers');
    var currentQuestion = myQuestions[currentQuestionIndex];

    console.log(questionSelector, answerSelector, currentQuestion)

    questionSelector.innerText = currentQuestion.question;

    for (let index = 0; index < currentQuestion.answers.length; index++) {
      const answer = currentQuestion.answers[index];
      const listItem = currentQuestion.answers;
    

      // create a list item
      // add answer text to list item
      // add list item to list

      quizContainer.innerText = answerSelector;

      console.log(answer)
      console.log(listItem)
    }

  
    


  }

  function buildQuiz() {
    quizContainer.innerHTML = `
      <h2 id ="question"></h2>
      <ul id ="answers">
      </ul>
    `;
  }
  

  // function showResults() {
   
  //   const answerContainers = quizContainer.querySelectorAll('.answers');
  
 
  //   let score = 0;
  
   
  //   myQuestions.forEach((currentQuestion, questionNumber) => {

  //     const answerContainer = answerContainers[questionNumber];
  //     const selectedOption = answerContainer.querySelector(`input[name="question${questionNumber}"]:checked`);
  //     const selectedAnswer = selectedOption ? selectedOption.value : '';
  
  
  //     if (selectedAnswer === currentQuestion.correctAnswer) {
  //       score++;
     
  //       answerContainer.style.color = 'green';
  //     } else {
  
  //       answerContainer.style.color = 'red';
  //     }
  //   });
  
  //     scoreContainer.textContent = `Your score: ${score} out of ${myQuestions.length}`;
  // }
  