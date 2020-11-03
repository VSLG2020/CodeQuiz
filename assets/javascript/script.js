//select all elements by using a get element method. 
var start =document.getElementById("start");
var quiz =document.getElementById("quiz");
var question =document.getElementById("question");
var choiceA =document.getElementById("A");
var choiceB =document.getElementById("B");
var choiceC =document.getElementById("C");
var choiceD =document.getElementById("D");
var choiceE =document.getElementById("E");
var timer =document.getElementById("timer");    
var counter =document.getElementById("counter");
var countdown =document.getElementById("countdown");
var progress = document.getElementById("progress");
var score = document.getElementById("score");

//CREATE QUESTIONS 

//use array

let questions=[
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

//CREATE variables for questions
var lastQuestion = questions.length -1;
let runningQuestion = 0; 
let count =0;
let timer;
let score =0;

//render question

//start quiz

//render progress

//render counter
// Timer that counts down from 60
function countdown() {
    var timeLeft = 60;

//check answer

//answer is correct

//answer is wrong

//score render function//

