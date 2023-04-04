const questions = [  {    question: "What is the capital of France?",    choices: ["Paris", "Madrid", "Rome", "London"],
    answerIndex: 0
  },
  {
    question: "What is the tallest mountain in the world?",
    choices: ["Mount Everest", "K2", "Kilimanjaro", "Denali"],
    answerIndex: 0
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia","Canada", "China", "United States"],
    answerIndex: 0
}
];

let currentQuestionIndex = 0;
let score = 0;
let quizTimer = 60;
let quizInterval;

const quizContainerEl = document.getElementById("quiz-container");
const questionTextEl = document.getElementById("question-text");
const answerButtonsEl = document.getElementById("answer-container");
const resultTextEl = document.getElementById("result-text");
const timerTextEl = document.getElementById("timer-text");

function startQuiz() {
quizInterval = setInterval(() => {
quizTimer--;
updateTimerDisplay();
if (quizTimer <= 0) {
endQuiz();
}
}, 1000);

displayQuestion(currentQuestionIndex);
}

function displayQuestion(questionIndex) {
const question = questions[questionIndex];
questionTextEl.textContent = question.question;
answerButtonsEl.innerHTML = "";
for (let i = 0; i < question.choices.length; i++) {
const choice = question.choices[i];
const button = document.createElement("button");
button.classList.add("answer-button");
button.textContent = choice;
button.addEventListener("click", () => {
checkAnswer(questionIndex, i);
});
answerButtonsEl.appendChild(button);
}
}
