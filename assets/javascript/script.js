//create global let values for questions, answers and score, progress, timer
//use document.getelementbyId()
let questionElement = document.getElementById("questions");
let answerElement = document.getElementById("answer-buttons");
let scoreElement = document.getElementById("score-results");
let progressElement = document.getElementById("progress");
let timerElement = document.getElementById("timer");

//
let nextBtn = document.getElementById("next-btn");
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let answer4 = document.getElementById('answer4');
//
let answer;

//set the timer 
let timer = 60;

//set question begining 
let questionNum = -1; //this is to keep from skipping a question unlike if you set it at 0


//create the questions array
// let name = [ { q: "q", a:["a","b","c"], correctA: "a"}, repeat}];

let quizquizQu = [
    {
        question: "this is question 1?",
        answer1: "yes",
        answer2: "no",
        answer3: "no",
        answer4: "no",
        correct: "answer1"
    },
    {
        question: "this is question 2?",
        answer1: "no",
        answer2: "yes",
        answer3: "no",
        answer4: "no",
        correct: "answer2"
    },
    {
        question: "this is question 3?",
        answer1: "no",
        answer2: "no",
        answer3: "yes",
        answer4: "no",
        correct: "answer3"
    },
    {
        question: "this is question 4?",
        answer1: "no",
        answer2: "no",
        answer3: "no",
        answer4: "yes",
        correct: "answer1"
    }

]

//now create a function to start the quiz ie: func name()
//use getelementbyId to pull the element then 
//hide the first intro card after starting the quiz
//then start the timer as soon as the game starts
//makesure the questions are being hidden
let startButton = document.getElementById('start-btn')
startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('started');
    document.getElementById('intro_container').classList.add("hide");
    document.getElementById('quiz').classList.remove("hide")

    //prompt the timer function and the quizquestions

    countdown();
    //timer
    quizQuestions();
    //prompt questions
};

//create the start timer function here

let countdown = function () {
    let countdown = setInterval(function () {
        timer--;
        timerElement.textContent = "Time: " + timer + " seconds remaining";

        if (timer === 0 || questionNum === quizQuestionsArray.length) {
            clearInterval(timer);
            setTimeout(showScore, 100);

        }
    }, 1000);
};

let Score_points = 100
let max_questions = 4
let lastQuestion = quizQuestionsArray.length - 1;
//create the quizQuestion function

// This sets the questions and also buttons containing our answers
function quizQuestions() {

    questionNum++

    // This presents our question as a textContent to the user.
    questionElement.textContent = quizQuestionsArray[questionNum].question

    answerElement.innerHTML = "";

    let answers = quizQuestionsArray[questionNum].answers;

    answer = quizQuestionsArray[questionNum].correct;

    for (let i = 0; i < answers.length; i++) {
        let userChoice = document.createElement("button");

        userChoice.textContent = answers[i];

        nextBtn = selectionsEl.appendChild(userChoice);
    }
};

//Answer Choice Buttons
answerElement.addEventListener("click", function (event) {
    let progressEl = document.getElementsByClassName("progress")[0]

    if (answer === event.target.textContent) {
        // Let user know answer is correct
        progressEl.textContent = "Correct Answer!"
        // Sets the amount of time message is displayed
        setTimeout(hideProgress, 3000);
        showProgress();
    }
    else {
        // Let user know answer is incorrect
        progressEl.textContent = "Incorrect Answer!";
        // Sets the amount of time message is displayed
        setTimeout(hideProgress, 3000);
        // Subtract ten seconds from time left
        timeLeft = timeLeft - 10;
        showProgress();
    }
    quizQuestions();
});











// document.addEventListener('DOMContentLoaded', () => {
// let timeLeftDisplay = document.getElementById('#timeleft')
// let timeLeft = 60

// function countdown(){
//     setInterval(function(){
//         if(timeLeft <=0){
//             clearInterval(timeLeft= 0)
//         }
//         timeLeftDisplay.innerHTML = timeLeft,
//         timeLeft = -1
//     }, 1000)
// }
//     startButton.addEventListener('click', countdown) 
// })
