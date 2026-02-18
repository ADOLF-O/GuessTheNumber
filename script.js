let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const guess = Number(guessInput.value);
  const message = document.getElementById("message");
  const attemptsDisplay = document.getElementById("attempts");
  const guessButton = document.querySelector("button");

  if (!guess) {
    message.textContent = "Please enter a number!";
    message.style.color = "orange";
    return;
  }

  if (attempts >= maxAttempts) {
    return;
  }

  attempts++;
  attemptsDisplay.textContent = "Attempts: " + attempts + " / " + maxAttempts;

  if (guess === secretNumber) {
    message.textContent = "🎉 Correct! You guessed it!";
    message.style.color = "#00ff88";
    endGame();
  } else if (attempts === maxAttempts) {
    message.textContent =
      "❌ You didn't guess it! The number was " + secretNumber;
    message.style.color = "#ff4d4d";
    endGame();
  } else if (guess > secretNumber) {
    message.textContent = "Too high! Try again.";
    message.style.color = "orange";
  } else {
    message.textContent = "Too low! Try again.";
    message.style.color = "orange";
  }

  guessInput.value = "";
}

function endGame() {
  document.getElementById("guessInput").disabled = true;
  document.querySelector("button").disabled = true;
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  document.getElementById("attempts").textContent =
    "Attempts: 0 / " + maxAttempts;
  document.getElementById("message").textContent = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").disabled = false;
  document.querySelector("button").disabled = false;
}
