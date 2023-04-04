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

function checkAnswer(questionIndex, answerIndex) {
    const question = questions[questionIndex];
    if (answerIndex === question.answerIndex) {
    score++;
    resultTextEl.textContent = "Correct!";
    } else {
    quizTimer -= 10;
    resultTextEl.textContent = "Incorrect!";
    }
    resultTextEl.style.display = "block";
    setTimeout(() => {
    resultTextEl.style.display = "none";
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
    displayQuestion(currentQuestionIndex);
    } else {
    endQuiz();
    }
    }, 1000);
    }
    
    function endQuiz() {
        clearInterval(quizInterval);
        quizContainerEl.innerHTML = `<h2>Your final score is ${score}</h2>
          <form>
            <label for="initials">Enter your initials:</label>
            <input type="text" id="initials" name="initials" required>
            <button type="submit">Save Score</button>
          </form>
        `;
      }
      
      function updateTimerDisplay() {
        timerTextEl.textContent = `Time: ${quizTimer}`;
      }
      
      updateTimerDisplay();
      startQuiz();
      