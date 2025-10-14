// Joey Dixon 10/14/25

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let lastHole = null;
let timeUp = false;
let score = 0;
let gameTimer = null;

const randomBetween = (min, max) => Math.round(Math.random() * (max - min) + min);

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) return randomHole(holes);
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomBetween(400, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  clearTimeout(gameTimer);
  score = 0;
  scoreBoard.textContent = score;
  timeUp = false;
  peep();
  gameTimer = setTimeout(() => {
    timeUp = true;
    alert(`Time's up! You Whacked ${score}Moles`);
  }, 30000); 
}

function bonk(e) {
  if (!e.isTrusted) return;
  const mole = e.target;
  mole.parentNode.classList.remove('up');
  score++;
  scoreBoard.textContent = score;
  mole.removeEventListener('click', bonk);
  setTimeout(() => mole.addEventListener('click', bonk), 300);
}

moles.forEach(mole => mole.addEventListener('click', bonk));
