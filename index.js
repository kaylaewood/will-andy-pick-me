var questionInput = document.getElementById("text-box");
var submitButton = document.getElementById("submit-button");
var questionText = document.querySelector(".question-asked");
var eightBallPic = document.querySelector(".eight-ball-img");
var response = document.querySelector(".response");
var responsesArr = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
var randomNum = Math.floor(Math.random()*responsesArr.length);
var clearButton = document.querySelector(".clear-button");

submitButton.addEventListener("click", function() {
  questionText.innerText = questionInput.value;
  questionText.classList.add("show-text");
  eightBallPic.classList.add("hide-img");
  response.classList.add("show-text");
  response.innerText = responsesArr[randomNum];
  questionInput.value = "";
  clearButton.removeAttribute("disabled");
  clearButton.classList.add("enable-button");
});

clearButton.addEventListener("click", function() {
  window.location.reload();
});
