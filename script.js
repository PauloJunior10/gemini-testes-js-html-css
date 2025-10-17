const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const message = document.getElementById('message');
const h1 = document.querySelector('h1');
const buttonsDiv = document.querySelector('.buttons');

let isAbsolute = false;
let isConfirmed = false;
let noClicked = false;

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

noBtn.addEventListener('click', () => {
    h1.textContent = 'kkkkk você não tem escolha, casa comigo logo';
    yesBtn.textContent = 'ACEITO';
    noBtn.classList.add('hidden');
    buttonsDiv.style.justifyContent = 'center';
    noClicked = true;
});

yesBtn.addEventListener('click', () => {
    if (noClicked) {
        message.classList.remove('hidden');
        noBtn.classList.add('hidden');
        yesBtn.classList.add('hidden');
        h1.classList.add('hidden');
    } else if (!isConfirmed) {
        h1.textContent = 'Você tem certeza?';
        yesBtn.textContent = 'Tenho certeza!';
        noBtn.classList.add('hidden');
        isConfirmed = true;
    } else {
        message.classList.remove('hidden');
        noBtn.classList.add('hidden');
        yesBtn.classList.add('hidden');
        h1.classList.add('hidden');
    }
});