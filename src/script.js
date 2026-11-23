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
