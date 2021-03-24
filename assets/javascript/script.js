//select all elements by using a get element method. 
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer");
var scoreEl = document.getElementById("score");
var timerEl = document.getElementById("timer");
//start
var start = document.getElementById("start");
//quiz
var quiz = document.getElementById("quiz");
//timer
var counter = document.getElementById("counter");
var countdown = document.getElementById("countdown");
var progress = document.getElementById("progress");


//CREATE quizQUESTIONS 

//use array

let quizQuestions = [
    {
        question: "this is question 1?",
        choiceA: "answer 1",
        choiceB: "answer 2",
        choiceC: "answer 3",
        choiceD: "answer 4",
        choiceE: "answer 5",
        correct: "A"
    },
    {
        question: "this is question 2?",
        choiceA: "answer 1",
        choiceB: "answer 2",
        choiceC: "answer 3",
        choiceD: "answer 4",
        choiceE: "answer 5",
        correct: "B"
    },
    {
        question: "this is question 3?",
        choiceA: "answer 1",
        choiceB: "answer 2",
        choiceC: "answer 3",
        choiceD: "answer 4",
        choiceE: "answer 5",
        correct: "C"
    },
    {
        question: "this is question 4?",
        choiceA: "answer 1",
        choiceB: "answer 2",
        choiceC: "answer 3",
        choiceD: "answer 4",
        choiceE: "answer 5",
        correct: "D"
    },
    {
        question: "this is question 5?",
        choiceA: "answer 1",
        choiceB: "answer 2",
        choiceC: "answer 3",
        choiceD: "answer 4",
        choiceE: "answer 5",
        correct: "E"
    }
]

//CREATE variables for quizQuestions
var lastQuestion = quizQuestions.length - 1;
let runningQuestion = 0;
let count = 0;
let timer;
let answer;
let score = 0;

//render question
function questionEl() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);
//start quiz 
function startQuiz() {

    document.getElementById("start").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    
  };


//render progress

//render counter
// Timer that counts down from 60
function countdown() {
    var timeLeft = 60;}

//check answer

//answer is correct

//answer is wrong

//score render function//

