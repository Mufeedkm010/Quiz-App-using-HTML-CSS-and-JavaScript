function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.classList.add('correct');
    } else {
        button.classList.add('incorrect');
    }

    let buttons = document.querySelectorAll('.options button');
    buttons.forEach(btn => btn.disabled = true);
}
