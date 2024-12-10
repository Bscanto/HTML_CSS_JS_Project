const horse = document.querySelector('.horse');
const barrel = document.querySelector('.barrel');


let score = 0;

const jump = () => {
  horse.classList.add('jump');

  setTimeout(() =>{
    horse.classList.remove('jump');
  }, 700);
};

const loop = setInterval(() => {
  score++;
  document.querySelector('.score span').textContent = score;


  const barrelPosition = barrel.offsetLeft;
  const horsePosition = +window.getComputedStyle(horse).bottom.replace
  ('px', '');


  if (barrelPosition <= 150 && barrelPosition > 0 && horsePosition < 60) {
    barrel.style.animation = 'none';
    barrel.style.left = `${barrelPosition}px`;

    horse.style.animation = 'none';
    horse.style.bottom = `${horsePosition}px`;

    horse.src = './img/game-over.png';
    horse.style.width = '300px';

    clearInterval(loop);
  }
}, 10);

document.addEventListener('keydown', jump);
