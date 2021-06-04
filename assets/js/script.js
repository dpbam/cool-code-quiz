// The array of questions for the game.
// var questions = [
//     { q: 'JavaScript question #1?', a: ['answer #1', 'answer #2', 'answer #3'], correct: 'answer #2' },
//     { q: 'JavaScript question #2?', a: ['answer #1', 'answer #2', 'answer #3'], correct: 'answer #1' },
//     { q: 'JavaScript question #3?', a: ['answer #1', 'answer #2', 'answer #3'], correct: 'answer #3' },
//     { q: 'JavaScript question #4?', a: ['answer #1', 'answer #2', 'answer #3'], correct: 'answer #3' },
//     { q: 'JavaScript question #5?', a: ['answer #1', 'answer #2', 'answer #3'], correct: 'answer #1' },
    
// ];

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
// const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');

let currentQuestion = {}
let acceptingAnswers = true
// Start the game with a score of 0
let score = 0
let questionCounter = 0
let availableQuestions = []
// Start the timer at:
var timeLeft = 6;

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
// start button variable definition
var startBtn = document.getElementById('start');
// answer buttons variable definition

function countdown() {
    
    var timeInterval = setInterval(function() {

        if (timeLeft >= 0) {
            timerEl.textContent = 'Timer: ' + timeLeft;
            timeLeft--;
            console.log(timeLeft);
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            // displayMessage("the game is over. please enter your initials");
            // window.prompt("the game is over. please enter your initials")
        };
    }, 1000); 
    
    // if get question wrong, then timeLeft - 10
};

let questions = [
    {
        question: 'What IS JavaScript?',
        choice1: 'easy',
        choice2: 'a coding language',
        choice3: 'a plate of just mustard',
        choice4: 'a language made up of coffee mug stains',
        answer: 2,
    },
    {
        question: 'What iS 2+2?',
        choice1: '4',
        choice2: '22',
        choice3: '1',
        choice4: '23',
        answer: 1,
    },
    {
        question: 'What is the city we live in?',
        choice1: 'Austin',
        choice2: 'Dallas',
        choice3: 'Fort Collins',
        choice4: 'New York',
        answer: 3,
    },
    {
        question: 'How many cars do we have?',
        choice1: '4',
        choice2: '10',
        choice3: '1',
        choice4: '2',
        answer: 3,
    },
    {
        question: 'What is Oliver?',
        choice1: 'an Tazmanian Devil',
        choice2: 'my son',
        choice3: 'a kid',
        choice4: 'all of the above',
        answer: 4,
    },

]

// // loop over every question object
// for (var i = 0; i < questions.length; i++) {
//     // Display current question to user and ask OK/Cancel
//     var answer = confirm(questions[i].q);

//     // compare answers
//     if (
//         (questions[i].a === questions[i].correct)
//     ) {
//         // increase score
//         score++;
//         // alert the user
//         // alert('Correct!');
//     } else {
//         // alert('Wrong!');
//     };
// };

// // Show total at end
// alert('You got ' + score + '/' + questions.length);

// if(score > highScores) then score = highScores?

// var score = (timeLeft);

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = function() {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = function() {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('./end.html')
    }

    // questionCounter++
    // progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    // progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(function() {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

startGame();
 
startBtn.onclick = countdown;