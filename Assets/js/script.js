var showTime = document.getElementById("time");
var start = document.getElementById("start");
var q1 = document.getElementById("question_1");
var q2 = document.getElementById("question_2");
var q3 = document.getElementById("question_3");
var q4 = document.getElementById("question_4");
var q5 = document.getElementById("question_5");
var over = document.getElementById("game_over");
var sub = document.getElementById("submit");
var highScores = document.getElementById("high_scores")
var rightWrong = document.getElementById("right_or_wrong");
var answerCheck = document.getElementById("check");
var btnSubmit = document.getElementById("submit");
var scoresList = document.getElementById("scores");
var btnBack = document.getElementById("back");
var btnReset = document.getElementById("reset");
var score =0;
var timeLeft = 100;
var initials = [];
var scores = [];

// Start quiz button
function startDisplay(){
    start.style.display = "none";
    q1.style.display = "flex";
    countDown();
}

// Question 1 Functionality
function q1Correct(){
    q1.style.display="none";
    q2.style.display="flex";
    showCorrect();
}

function q1Wrong(){
    q1.style.display="none";
    q2.style.display="flex";
    timeLeft=timeLeft-10;
    showTime.textContent = timeLeft;
    showIncorrect();
}

// Question 2 Functionality
function q2Correct(){
    q2.style.display="none";
    q3.style.display="flex";
    showCorrect();
}

function q2Wrong(){
    q2.style.display="none";
    q3.style.display="flex";
    timeLeft=timeLeft-10;
    showTime.textContent = timeLeft;
    showIncorrect();
}

// Question 3 Functionality
function q3Correct(){
    q3.style.display="none";
    q4.style.display="flex";
    showCorrect();
}

function q3Wrong(){
    q3.style.display="none";
    q4.style.display="flex";
    timeLeft=timeLeft-10;
    showTime.textContent = timeLeft;
    showIncorrect();
}

// Question 4 Functionality
function q4Correct(){
    q4.style.display="none";
    q5.style.display="flex";
    showCorrect();
}

function q4Wrong(){
    q4.style.display="none";
    q5.style.display="flex";
    timeLeft=timeLeft-10;
    showTime.textContent = timeLeft;
    showIncorrect();
}

// Question 5 functionality
function q5Correct(){
    q5.style.display="none";
    over.style.display="flex";
    rightWrong.style.display="none";
    score = timeLeft;
    timeLeft = 0;
    showTime.textContent = timeLeft;
    document.getElementById("final_score").textContent = score;
}

function q5Wrong(){
    q5.style.display="none";
    over.style.display="flex";
    timeLeft=timeLeft-10;
    score = timeLeft;
    timeLeft = 0;
    showTime.textContent = timeLeft;
    document.getElementById("final_score").textContent = score;
}


// Display the highscores
function showHighScores(){
    start.style.display="none";
    q1.style.display="none";
    q2.style.display="none";
    q3.style.display="none";
    q4.style.display="none";
    q5.style.display="none";
    over.style.display="none";
    highScores.style.display="flex";
}


// render scores
function renderScores(){
    scoresList.innerHTML="";
    for (var count = 0; count < initials.length; count++){
        var i = initials[count];
        var s = scores[count];
        var li = document.createElement("li");
        li.setAttribute("data-index", count);
        li.textContent = i + " " + s;
        scoresList.appendChild(li);
    }
}

// Store scores in local storage
function storeScores(){
    localStorage.setItem("initials", JSON.stringify(initials));
    localStorage.setItem("scores", JSON.stringify(scores));
}

function init(){
    scores.innerHTML="";
    var storedInitials = JSON.parse(localStorage.getItem("initials"));
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedInitials !== null){
        initials = storedInitials;
        scores =   storedScores;
    }
    renderScores();
}

// Submit button event handler
btnSubmit.addEventListener("click", function(event){
    event.preventDefault();
    var ini = document.getElementById("initials").value.trim();
    if (ini === ""){
        return;
    }
        initials.push(ini);
        scores.push(score);
        ini.value="";
        showHighScores();
    storeScores();
    renderScores();
})


// Event listener to show high scores 
document.getElementById("view_scores").addEventListener("click", showHighScores)


// Timer that counts down from 100
function countDown() {
    showTime.textContent = 100;
    var timeInterval = setInterval(function (){
        if (timeLeft > 1){
            timeLeft--;
            showTime.textContent = timeLeft;
        } else{
            clearInterval(timeInterval);
            q1.style.display="none";
            q2.style.display="none";
            q3.style.display="none";
            q4.style.display="none";
            q5.style.display="none";
            over.style.display="flex";
            showTime.textContent = 0;         
        }
    }, 1000)
}

// Display whether the answer was correct or not
function showCorrect(){
    var i = 6;
    rightWrong.innerHTML="";
    var correctCreate = document.createElement("p");
    correctCreate.textContent = "Correct";
    rightWrong.appendChild(correctCreate);
    rightWrong.style.display="flex";
    var timeInterval = setInterval(function (){
        if (i > 1){
            i--;
        } else {
            clearInterval(timeInterval);
            rightWrong.style.display="none";
            rightWrong.innerHTML="";
        }
    }, 1000)
}

function showIncorrect(){
    var i = 2;
    rightWrong.innerHTML="";
    var incorrectCreate = document.createElement("p");
    incorrectCreate.textContent = "Incorrect";
    rightWrong.appendChild(incorrectCreate);
    rightWrong.style.display="flex";
    var timeInterval = setInterval(function (){
        if (i > 1){
            i--;
        } else {
            clearInterval(timeInterval);
            rightWrong.style.display="none";
            rightWrong.innerHTML="";
        }
    }, 1000)
}

// back button event listener
btnBack.addEventListener("click", function(event){
    event.preventDefault();
    highScores.style.display="none";
    start.style.display="flex";
})

// reset button event listener
btnReset.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.clear();
    renderScores();
})
init();