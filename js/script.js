const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.clouds');
const passed = document.querySelector('.passedPipes');
const gameOver = document.querySelector('.game-over');


let passedPipes = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition > 80) {
        passedPipes++;
        passed.textContent = `Points: ${passedPipes}`;
    }

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left =  `${pipePosition}px`;

        mario.style.animation = 'death-animation 1s linear';
        mario.style.bottom =  `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        const cloudPosition = cloud.offsetLeft;
        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;
        gameOver.style.display = 'flex';

        clearInterval(loop);
    } 

    if (passedPipes > 200) {
        pipe.style.animation = 'pipe-animation 1s infinite linear';
    }
    if (passedPipes > 300) {
        pipe.style.animation = 'pipe-animation .5s infinite linear';
    } 

}, 100 );


document.addEventListener('keydown', jump);