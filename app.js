const pOneButton = document.querySelector('#p1Button');
const pTwoButton = document.querySelector('#p2Button');
const reset = document.querySelector('#resetButton');

const pOneDisplay = document.querySelector('#p1Display');
const pTwoDisplay = document.querySelector('#p2Display');

const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;

let winningScore = 5;
let isGameOver = false;


pOneButton.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            pOneDisplay.classList.add('has-text-success');
            pTwoDisplay.classList.add('has-text-danger');
            pOneButton.disabled = true;
            pTwoButton.disabled = true;
        }

        pOneDisplay.textContent = p1Score;
    }
})

pTwoButton.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            pTwoDisplay.classList.add('has-text-success');
            pOneDisplay.classList.add('has-text-danger');
            pOneButton.disabled = true;
            pTwoButton.disabled = true;
        }

        pTwoDisplay.textContent = p2Score;
        
    }
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})


reset.addEventListener('click', resetFunc)

function resetFunc() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    pOneDisplay.textContent = 0;
    pTwoDisplay.textContent = 0;
    pOneDisplay.classList.remove('has-text-success','has-text-danger');
    pTwoDisplay.classList.remove('has-text-success','has-text-danger');
    pOneButton.disabled = false;
            pTwoButton.disabled = false;
    
}
