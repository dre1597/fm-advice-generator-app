const $adviceId = document.querySelector('.advice-id');
const $advice = document.querySelector('.advice');
const $diceBtn = document.querySelector('.dice-btn');

async function fetchAdvice() {
  $adviceId.textContent = '0';
  $advice.textContent = `"Loading..."`;
  const response = await fetch('https://api.adviceslip.com/advice');

  const data = await response.json();

  const { advice, id } = data.slip;

  $adviceId.textContent = id;
  $advice.textContent = `"${advice}"`;
}

$diceBtn.addEventListener('click', fetchAdvice);
