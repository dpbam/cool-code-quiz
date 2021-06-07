var finalScore = document.getElementById("finalScore");

var endScore = localStorage.getItem("mostRecentScore");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var initials = document.getElementById("username");
var topScores = "";

endScore = parseInt(endScore) + 1;

finalScore.innerText = endScore;

// onclick = saveHighScore(event);

saveScoreBtn.addEventListener("click", function () {
  var scoreString = localStorage.getItem("score");
  console.log("scoreString" + scoreString);

  var scores = JSON.parse(scoreString);
  console.log(scores);

  if (scores == null) {
    scores = {};
  }

  scores[initials.value] = endScore;

  scoreString = JSON.stringify(scores);
  console.log(scoreString);

  localStorage.setItem("score", scoreString);
  console.log(initials.value);
});
// localStorage.setItem("mostRecentScore", timeLeft);
