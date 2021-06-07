// Display user initials along with timeLeft (their score)
// rank them highest to lowest
// only list 3 of the highest scores

var firstPlaceScore = document.getElementById("first-place");
var secondPlaceScore = document.getElementById("second-place");
var thirdPlaceScore = document.getElementById("third-place");

var highScores = localStorage.getItem("score");
console.log(highScores);

var higherScores = JSON.parse(highScores);

// highNumbers.innerText = higherScores;

const entries = Object.entries(higherScores);
// console.log(entries);

// console.log(entries[1][0]);

var firstPlace = ["", 0];
var secondPlace = ["", 0];
var thirdPlace = ["", 0];

for (var i = 0; i < entries.length; i++) {
  console.log(entries[i]);

  if (firstPlace[1] < entries[i][1]) {
    thirdPlace = secondPlace;
    secondPlace = firstPlace;
    firstPlace = entries[i];
  } else if (secondPlace[1] < entries[i][1]) {
    thirdPlace = secondPlace;
    secondPlace = entries[i];
  } else if (thirdPlace[1] < entries[i][1]) {
    thirdPlace = entries[i];
  }
}
firstPlaceScore.innerHTML = firstPlace[0] + "  " + firstPlace[1] + "<br />";
secondPlaceScore.innerHTML = secondPlace[0] + "  " + secondPlace[1] + "<br />";
thirdPlaceScore.innerHTML = thirdPlace[0] + "  " + thirdPlace[1] + "<br />";
