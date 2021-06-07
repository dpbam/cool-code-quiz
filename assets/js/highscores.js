// Display user initials along with timeLeft (their score)
// rank them highest to lowest
// only list 3 of the highest scores

var highNumbers = document.getElementById("highscores-numbers");
var highestScores = document.getElementsByClassName("highscores-box");
var highScores = document.getElementsByClassName("highscores-numbers");

var highScores = localStorage.getItem("score");
console.log(highScores);

var higherScores = JSON.parse(highScores);

// highNumbers.innerText = higherScores;

const entries = Object.entries(higherScores);
// console.log(entries);

// console.log(entries[1][0]);
for (var i = 0; i < entries.length; i++) {
  console.log(entries[i]);
  highNumbers.innerHTML += entries[i][0] + "  " + entries[i][1] + "<br />";
}
