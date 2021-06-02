// The array of questions for the game.
var questions = [
    { q: 'JavaScript question #1?', a: ['answer #1', 'answer #2', 'answer #3'], correct: 'answer #2' },
    { q: 'JavaScript question #2?', a: ['answer #1', 'answer #2', 'answer #3'], correct: 'answer #1' },
    { q: 'JavaScript question #3?', a: ['answer #1', 'answer #2', 'answer #3'], correct: 'answer #3' },
    { q: 'JavaScript question #4?', a: ['answer #1', 'answer #2', 'answer #3'], correct: 'answer #3' },
    { q: 'JavaScript question #5?', a: ['answer #1', 'answer #2', 'answer #3'], correct: 'answer #1' },
    
];
var highScores = "";

// Start the game with a score of 0
var score = 0;
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
// start button variable definition
var startBtn = document.getElementById('start');

// timer starts at 60
function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {

        if (timeLeft > 1) {
            timerEl.textContent = 'Timer: ' + timeLeft;
            timeLeft--;
            console.log(timeLeft);
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        };
        // document.getElementById('countdown').innerHTML = (timeLeft);
    }, 1000); 
    
    // if get question wrong, then timeLeft()
};


// // loop over every question object
// for (var i = 0; i < questions.length; i++) {
//     // Display current question to user and ask OK/Cancel
//     var answer = confirm(questions[i].q);

//     // compare answers
//     if (
//         (questions[i].a === question[i].correct)
//     ) {
//         // increase score
//         score++;
//         // alert the user
//         alert('Correct!');
//     } else {
//         alert('Wrong!');
//     };
// };

// // Show total at end
// alert('You got ' + score + '/' + questions.length);

// if(score > highScores) then score = highScores?
 
startBtn.onclick = countdown;