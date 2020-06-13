var timeEl = document.querySelector(".time");
var startEl = document.getElementById("#start");
var beginGame = document.getElementById("beginGame");
var arrayOfQuestions = [{
  question: "Who was the first person to score 100 points in a regulation NBA game?",
  answers: ["Michael Jordan", "Wilt Chamberlain", "LeBron James", "Oscar Robertson"],
  correctAnswer: 2
},
{
  question: "Who won the 2009 NBA Finals?",
  answers: ["Boston Celtics", "Cleveland Cavaliers", "Los Angeles Lakers", "Orlando Magic"],
  correctAnswer: 1
},
{
  question: "What happens if the two teams' scores are tied at the end of regulation time?",
  answers: ["The game is counted as a tie", "The game goes into overtime", "The two teams have a shootout", "The teams play rock, paper,scissors to decide who wins"],
  correctAnswer: 2

},
{
  question: "The ball-handler takes three steps without dribbling, what violation did he commit?",
 answers: ["Carrying", "Double Dribble", "Traveling", "Goaltending"],
correctAnswer: 1
},

];

var currentQuestionIndex = 0
var questionEl = document.getElementById("questionEl");



// question: "Arrays in Javascript can be used to store___ ",
// answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
// correctAnswer: 3 
// },
// }
// question: string value

//var secondsLeft = 60;

//function setTime() {
//beginGame.addEventListener("click", function () {

//var timerInterval = setInterval(function () {
//secondsLeft--;
//timeEl.textContent = secondsLeft = secondsLeft;

//if (secondsLeft === 0) {
//clearInterval(timerInterval);

//}

//}, 1000);
//}

var secondsLeft = 60;
console.log("begin", beginGame)

function setTime() {
  beginGame.addEventListener("click", function () {
    // start timer and show the questions
    setFeatured();
    console.log("being game")
    secondsLeft--;
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
      if (secondsLeft <= 0) {
        clearInterval(timerInterval);

      }

    }, 1000);
  });
}
// Function call
setTime();
function setFeatured() {
  var currentQuestion = arrayOfQuestions[currentQuestionIndex];
  console.log(currentQuestionIndex)


  // Create an text content element.
  questionEl.textContent = currentQuestion.question;

  // Create an h3 for the name.
  var answer1El = document.createElement("h3");
  answer1El.setAttribute("value", "0");
  answer1El.textContent = currentQuestion.answers[0];
  var answer2El = document.createElement("h3");
  answer2El.setAttribute("value", "1");
  answer2El.textContent = currentQuestion.answers[1];
  var answer3El = document.createElement("h3");
  answer3El.setAttribute("value", "2");
  answer3El.textContent = currentQuestion.answers[2];
  var answer4El = document.createElement("h3");
  answer4El.setAttribute("value", "3");
  answer4El.textContent = currentQuestion.answers[3];

  // Append new elements to answer 1, 2 ,3 4...
  questionEl.append(answer1El);
  questionEl.append(answer2El);
  questionEl.append(answer3El);
  questionEl.append(answer4El);
}

// EVENT LISTENERS

questionEl.addEventListener("click", function (event) {
  console.log("Value", event.target.attributes.value.value);
  console.log(arrayOfQuestions[currentQuestionIndex].correctAnswer)
  if (event.target.attributes.value.value == (arrayOfQuestions[currentQuestionIndex].correctAnswer)) {
    console.log("You actually clicked the correct answer");
  }
  else {
    secondsLeft = (secondsLeft - 10);
    console.log(secondsLeft);
  }
  if (currentQuestionIndex < arrayOfQuestions.length - 1) {
    currentQuestionIndex++;
    setFeatured()

  }
  else {
    alert("Game Over")
  }
})


