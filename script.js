function flipCoin(userGuess) {
  const coin = document.getElementById("coin");
  const resultText = document.getElementById("result");
  const outcome = Math.random() < 0.5 ? "heads" : "tails";

  coin.style.animation = "none";
  void coin.offsetWidth; // Restart animation

  if (outcome === "heads") {
    coin.style.animation = "spin-heads 2s forwards";
  } else {
    coin.style.animation = "spin-tails 2s forwards";
  }

  setTimeout(() => {
    if (userGuess === outcome) {
      resultText.textContent = `✅ You WON! It was ${outcome.toUpperCase()}`;
    } else {
      resultText.textContent = `❌ You LOST! It was ${outcome.toUpperCase()}`;
    }
  }, 2000);
}
