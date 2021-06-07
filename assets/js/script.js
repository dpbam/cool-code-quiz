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
    question: "What iS 2+2?",
    choice1: "4",
    choice2: "22",
    choice3: "1",
    choice4: "23",
    answer: 1,
  },
  {
    question: "What is the city we live in?",
    choice1: "Austin",
    choice2: "Dallas",
    choice3: "Fort Collins",
    choice4: "New York",
    answer: 3,
  },
  {
    question: "How many cars do we have?",
    choice1: "4",
    choice2: "10",
    choice3: "1",
    choice4: "2",
    answer: 3,
  },
  {
    question: "What is Oliver?",
    choice1: "a Tazmanian Devil",
    choice2: "my son",
    choice3: "a kid",
    choice4: "all of the above",
    answer: 4,
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
