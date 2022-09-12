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
var timeLeft = 100;
var correct = 0;

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
    correct++;
}

function q1Wrong(){
    q1.style.display="none";
    q2.style.display="flex";
    timeLeft=timeLeft-10;
    showTime.textContent = timeLeft;
}

// Question 2 Functionality
function q2Correct(){
    q2.style.display="none";
    q3.style.display="flex";
    correct++;
}

function q2Wrong(){
    q2.style.display="none";
    q3.style.display="flex";
    timeLeft=timeLeft-10;
    showTime.textContent = timeLeft;
}

// Question 3 Functionality
function q3Correct(){
    q3.style.display="none";
    q4.style.display="flex";
    correct++;
}

function q3Wrong(){
    q3.style.display="none";
    q4.style.display="flex";
    timeLeft=timeLeft-10;
    showTime.textContent = timeLeft;
}

// Question 4 Functionality
function q4Correct(){
    q4.style.display="none";
    q5.style.display="flex";
    correct++;
}

function q4Wrong(){
    q4.style.display="none";
    q5.style.display="flex";
    timeLeft=timeLeft-10;
    showTime.textContent = timeLeft;
}

// Question 5 functionality
function q5Correct(){
    q5.style.display="none";
    over.style.display="flex";
    correct++;
    rightWrong.style.display="none";
    var score = timeLeft;
    timeLeft = 0;
    showTime.textContent = timeLeft;
    document.getElementById("final_score").textContent = score;
}

function q5Wrong(){
    q5.style.display="none";
    over.style.display="flex";
    timeLeft=timeLeft-10;
    var score = timeLeft;
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