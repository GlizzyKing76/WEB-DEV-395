const checkGuess = document.getElementById("checkGuess");

checkGuess.addEventListener("click", function() {
    const guess = document.getElementById("planetGuess").value;
    const quizResult = document.getElementById("quizResult");

    if (guess === "") {
        quizResult.textContent = "Please choose a planet first!";
    } else if (guess === "jupiter") {
        quizResult.textContent = "Correct! Jupiter is the largest planet!";
    } else {
        quizResult.textContent =
            "Not quite! Try again. Hint: it is a gas giant.";
    }
});
