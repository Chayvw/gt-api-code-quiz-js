var timeEl = document.querySelector(".time");
var startEl = document.getElementById("#start");
var beginGame = document.getElementById("beginGame");
var arrayOfQuestions = [{
  question: "what is the color of the sky?",
  answers: ["red", "yellow", "blue", "orange"],
  correctAnswer: 2
},
{
  question: "how many hours are in a day?",
  answers: ["1", "2", "9", "24"],
  correctAnswer: 3
}]
var currentQuestionIndex = 0
var questionEl = document.getElementById("questionEl");





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

setTime();
function setFeatured() {
  var currentQuestion = arrayOfQuestions[currentQuestionIndex];
  console.log(currentQuestionIndex)
  // Clear out the innerHTML to remove previous person.

  // Create an image element.
  questionEl.textContent = currentQuestion.question;
  //imageEl.setAttribute("src", currentPerson.imageUrl);
  //imageEl.setAttribute("id", "featured-image");
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

// FUNCTION CALLS
// setFeaturedImage();
// setFeaturedName();


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
    alert ("Game Over")
  }
})


//buttonRightEl.addEventListener("click", function () {
  // console.log("You clicked the right button");
  // 1. Increment the current index
  // console.log(currentImageIndex);
  //currentImageIndex++;
  // console.log(currentImageIndex);
  // 2. Call the setFeaturedImage function
  //   setFeaturedImage();
  //   setFeaturedName();
 // setFeatured();
//});

//buttonLeftEl.addEventListener("click", function () {
  //currentImageIndex--;
  //   setFeaturedImage();
  //   setFeaturedName();
  //setFeatured();
//});
// uestionEl.addEventListener("click", function (event) {
  // uestionEl.addEventListener("click", function (event) {
    // uestionEl.addEventListener("click", function (event) {
    //   uestionEl.addEventListener("click", function (event) {
    //     uestionEl.addEventListener("click", function (event) {
