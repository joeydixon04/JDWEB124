// Joey Dixon 9/17/25

function playSoundByKeyCode(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);
  if (!audio || !key) return;
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

function handleKeydown(e) {
  playSoundByKeyCode(e.keyCode);
}

function handleClick(e) {
  const keyCode = e.currentTarget.dataset.key;
  playSoundByKeyCode(keyCode);
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => {
  key.addEventListener('transitionend', e => {
    if (e.propertyName === 'transform') key.classList.remove('playing');
  });
  key.addEventListener('click', handleClick);
});

window.addEventListener('keydown', handleKeydown);

  