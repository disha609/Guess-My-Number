let secretNum = Math.trunc(Math.random() * 30) + 1; 
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess || guess < 1 || guess > 30) { 
        document.querySelector('.message').textContent = 'Invalid input. Please enter a number between 1 and 30.';
    } else if (guess === secretNum) {
        document.querySelector('.message').textContent = 'Congratulations! You guessed it correctly.';
        document.querySelector('body').style.backgroundColor = '#D8BFD8'; 
        document.querySelector('.number').textContent = secretNum;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess > secretNum) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high! Try again';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Sorry! You Lost The Game!';
        }
    } else if (guess < secretNum) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low! Try again';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Sorry! You Lost The Game!';
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNum = Math.trunc(Math.random() * 30) + 1; 

    document.querySelector('.message').textContent = 'Start guessing the number...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#b6b9ff'; 
    document.querySelector('.guess').value = '';
});