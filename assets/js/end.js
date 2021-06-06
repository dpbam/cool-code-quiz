var finalScore = document.getElementById("finalScore");

var endScore = localStorage.getItem("mostRecentScore");

console.log(endScore);

endScore = parseInt(endScore);

finalScore.innerText = endScore + 1;
