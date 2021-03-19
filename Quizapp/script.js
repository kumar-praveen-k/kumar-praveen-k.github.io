const questionNumber = document.querySelector(".qn-number");
const questionText = document.querySelector(".question-text");
const options = document.querySelector(".options");
let availableQuestion = [];
let questionCounter = 0;
let currentAnswer = '';
let successfulAns = 0;
let currentQuestion;
function settimer() {
    successfulAns = 0;
    var remainingMinutes= "05";
    var remainingSecs = "00";
    setInterval( () => {
        remainingSecs -= 1;
        if(remainingSecs<0){
            remainingSecs = 59;
            remainingMinutes -= 1;
        }
        timer = remainingMinutes.toString().padStart(2, '0') + ":" + remainingSecs.toString().padStart(2, '0');
        document.getElementById("timer").innerHTML = timer;
    }, 1000)
}
function handleNext() {
    var submittext = document.getElementById("submit").innerHTML;
    console.log(submittext);
    if(submittext == "Submit"){
        alert("testCompleted");
    }
    else {
        setNeQuestion();
        clearCkecks();
        if(document.getElementsByClassName("next")[0].innerHTML == "Submit") {
            showResult();
        }
    }
}
function setAvailableQuestion() {
    const totalQuestion = quiz.length;
    for(let i = 0; i < totalQuestion; i++) {
        availableQuestion.push(quiz[i]);
    }
}
function setNeQuestion() {
    if(questionCounter == quiz.length - 1) {
        document.getElementsByClassName("next")[0].innerHTML = '';
        const submissiontext =  "<a>" + "Submit" + "</a>"
        var linktag = document.createElement("A");
        var submittag = document.createTextNode("Submit");
        linktag.setAttribute("href", "./result.html");
        linktag.appendChild(submittag);
        document.getElementsByClassName("next")[0].appendChild(linktag);
        
    }
    // set question number
    questionNumber.innerHTML = "Question" + " " + (questionCounter + 1) + " "+ "of" + " " + quiz.length;

    // set question text
    let nextIndex = Math.floor(Math.random() * availableQuestion.length);
    let questionIndex = availableQuestion[nextIndex];
    questionText.innerHTML = questionIndex.question;
    // currentAnswer is here
    currentAnswer = questionIndex.options[questionIndex.answer];
    // set corresponding options
    let availableOption = [];
    for(let i = 0; i < 4; i++) {
        availableOption.push(questionIndex.options[i]);
    }
    for(let j = 0; j < 4; j++) {  
        let optionIndex = Math.floor(Math.random() * availableOption.length);
        document.getElementsByClassName("option")[j].innerHTML = availableOption[optionIndex];
        availableOption.splice(optionIndex, 1);
    }
    questionCounter++ ;
    availableQuestion.splice(nextIndex, 1);
}
function updateResult() {
    let currentoption = false;
    let resultIndex = -1;
    let results = document.getElementsByClassName("radio");
    for(let i = 0; i < 4; i++) {
        currentoption = results[i].checked;
        if(currentoption == true){
            resultIndex = i;
            break;
        }
    }
    let attemptedAns = document.getElementsByClassName("option")[resultIndex].innerHTML;
    if(attemptedAns == currentAnswer) {
        successfulAns++;
        localStorage.setItem('successfulAns', successfulAns)
    }
}
window.onload = function() {
    if (location.pathname.includes('result.html')) addtoresults();
    else {
        setAvailableQuestion();
        setNeQuestion();
        settimer();
    }
}
function clearCkecks() {
    let cherckStatus = document.getElementsByClassName("radio");
    for(let i = 0; i < 4; i++) {
        cherckStatus[i].checked = false;
    }
}
function addtoresults() {
    let successfulAns = localStorage.getItem('successfulAns') || 0
    var rightanswers = document.getElementsByClassName("results")[0];
    console.log(rightanswers);
    var score = document.getElementById("score");
    var grad = document.getElementById("grad");
    var catagory = document.getElementById("catagory");
    rightanswers.innerHTML = successfulAns;
    score.innerHTML = successfulAns*4;
    let percentage = successfulAns * 4 * 2.5;
    grad.innerHTML = percentage + "%"; 
    if(percentage >= 80){
        catagory.innerHTML = "Excillent";
    }else if(percentage >= 50) {
        catagory.innerHTML = "Good";
    }else {
        catagory.innerHTML = "Need Improvement";
    }
    localStorage.clear()
}