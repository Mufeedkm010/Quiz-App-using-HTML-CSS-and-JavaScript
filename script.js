let score = 0;

function checkAnswer(button, isCorrect, correctOption) {
    if (isCorrect) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('incorrect');
        let buttons = button.parentElement.querySelectorAll('button');
        buttons[correctOption - 1].classList.add('correct');
    }
    let buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
}

function navigateTo(questionId) {
    let currentQuestion = document.querySelector('.question-container.active');
    let nextQuestion = document.getElementById(questionId);

    currentQuestion.classList.remove('active');
    nextQuestion.classList.add('active');
}

function endQuiz() {
    if (confirm("Are you sure you want to end the quiz?")) {
        document.querySelector('.quiz-container').classList.add('hidden');
        let endMessage = document.getElementById('end-message');
        endMessage.classList.add('show');
        document.getElementById('score-message').innerText = `Your score: ${score} out of 5`;
    }
}
