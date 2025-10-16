const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const message = document.getElementById('message');

let isAbsolute = false;

noBtn.addEventListener('mouseover', () => {
    if (!isAbsolute) {
        noBtn.style.position = 'absolute';
        isAbsolute = true;
    }
    const x = Math.floor(Math.random() * (window.innerWidth - 150));
    const y = Math.floor(Math.random() * (window.innerHeight - 150));
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
    message.classList.remove('hidden');
    noBtn.classList.add('hidden');
    yesBtn.classList.add('hidden');
});