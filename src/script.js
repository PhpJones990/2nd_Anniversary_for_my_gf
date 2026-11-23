// State 1

const states = document.querySelectorAll('.state');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateState(newIndex) {
if (newIndex < 0 || newIndex >= states.length) return;

states[currentIndex].classList.remove('active');
currentIndex = newIndex;
states[currentIndex].classList.add('active');
}

prevBtn.addEventListener('click', () => updateState(currentIndex - 1));
nextBtn.addEventListener('click', () => updateState(currentIndex + 1)); 

const homeContinue = document.getElementById("home-continue"); 
const homeButtonText = document.getElementById("button-text"); 
homeContinue.addEventListener('click', () => updateState(currentIndex + 1)); 
homeButtonText.addEventListener('click', () => updateState(currentIndex + 1)); 

// State 2

const question = document.getElementById('question');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let yesScale = 1;

function moveNoButton() {
  noBtn.style.position = 'fixed';

  const padding = 20;
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
  const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  yesScale += 0.2;
  yesBtn.style.transform = `scale(${yesScale})`;
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

const goBtn = document.getElementById("goBtn"); 

yesBtn.addEventListener('click', () => {
  question.textContent = "❤️ Hehe! ❤️";
  noBtn.style.display = 'none';
  yesBtn.style.transform = 'scale(1)';
  goBtn.style.display = 'block'; 
}); 

goBtn.addEventListener('click', () => updateState(currentIndex + 1)); 

const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const progressBar = document.getElementById('progressBar');
const repeatBtn = document.getElementById('repeatBtn');

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
  } else {
    audio.pause();
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
  }
});

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
  }
});

progressBar.addEventListener('input', () => {
  if (audio.duration) {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
  }
});

audio.addEventListener('ended', () => {
  playIcon.style.display = 'block';
  pauseIcon.style.display = 'none';
  progressBar.value = 0;
});

repeatBtn.addEventListener('click', () => {
  audio.loop = !audio.loop;
  repeatBtn.classList.toggle('active', audio.loop);
});
