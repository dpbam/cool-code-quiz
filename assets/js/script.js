const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const scoreText = document.querySelector("#score");
const game = document.querySelector("#game");

let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;

// Start the timer at:
var timeLeft = 100;

var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
// start button variable definition
var startBtn = document.getElementById("start");
// answer buttons variable definition

function countdown() {
  var timeInterval = setInterval(function () {
    game.style.display = "flex";

    if (timeLeft >= 0) {
      timerEl.textContent = "Timer: " + timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
    }
  }, 1000);
}

let questions = [
  {
    question: "What IS JavaScript?",
    choice1: "easy",
    choice2: "a coding language",
    choice3: "a plate of just mustard",
    choice4: "a language made up of coffee mug stains",
    answer: 2,
  },
  {
    question: "Which are valid keywords to declare variables in JavaScript?",
    choice1: "var",
    choice2: "let",
    choice3: "const",
    choice4: "all of the above",
    answer: 4,
  },
  {
    question: "What can you use to debug your code?",
    choice1: "OFF Bug Spray",
    choice2: "console.log",
    choice3: "my.wife",
    choice4: "Throw some old mouse bones on a table and read them?",
    answer: 2,
  },
  {
    question:
      "The document.querySelector() returns the ________ element within the document that matches the specified selector, or group of selectors.",
    choice1: "first",
    choice2: "water",
    choice3: "second",
    choice4: "last",
    answer: 1,
  },
  {
    question:
      "Which of the following will write the message 'My brain is dead right now.' in an alert box?",
    choice1: "alertBox('My brain is dead right now.')",
    choice2: "alert(My brain is dead right now.)",
    choice3: "alert('My brain is dead right now.')",
    choice4: "aasdflert asdfl(asdfj ammy brainad dead.asdf",
    answer: 3,
  },
];

// index is total number of questions minus one
const maxQuestions = 4;

startGame = function () {
  questionCounter = 0;
  getNewQuestion();
};

getNewQuestion = function () {
  if (questions.length === 0 || questionCounter > maxQuestions) {
    localStorage.setItem("mostRecentScore", timeLeft);
    return window.location.assign("./end.html");
  }

  currentQuestion = questions[questionCounter];
  question.innerText = currentQuestion.question;
  questionCounter++;

  for (var i = 0; i <= choices.length - 1; i++) {
    var choice = choices[i];
    choice.innerText = currentQuestion["choice" + (i + 1)];
  }

  acceptingAnswers = true;
};

for (var i = 0; i <= choices.length - 1; i++) {
  var choice = choices[i];
  choice.addEventListener("click", function (clickEvent) {
    console.log(choice);
    console.log(clickEvent);

    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const userChoice = clickEvent.target;
    const selectedAnswer = userChoice.dataset["choicenumber"];
    console.log(selectedAnswer);

    if (selectedAnswer == currentQuestion.answer) {
      userChoice.style.backgroundColor = "green";
    } else {
      userChoice.style.backgroundColor = "red";
      timeLeft = timeLeft - 10;
    }
    setTimeout(function () {
      userChoice.style.backgroundColor = "unset";
      getNewQuestion();
    }, 500);
  });
}

startBtn.onclick = countdown;
startGame();
