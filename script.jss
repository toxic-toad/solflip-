const coin = document.getElementById('coin');
const resultDiv = document.getElementById('result');
let flipping = false;

function flipCoin(userBet) {
  if (flipping) return;
  flipping = true;
  resultDiv.innerText = "Flipping...";

  const outcome = Math.random() < 0.5 ? 'heads' : 'tails';
  const angle = outcome === 'heads' ? 0 : 180;
  const spins = Math.floor(Math.random() * 3) + 4;
  const rotation = 360 * spins + angle;

  coin.style.transform = `rotateY(${rotation}deg)`;

  setTimeout(() => {
    if (userBet === outcome) {
      resultDiv.innerText = `🎉 You WON! It landed on ${outcome.toUpperCase()}`;
    } else {
      resultDiv.innerText = `😢 You LOST. It landed on ${outcome.toUpperCase()}`;
    }
    flipping = false;
  }, 3000);
}
