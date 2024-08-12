let buttons = document.querySelectorAll('button');
let resetBtn = document.querySelector('#btn');
let msg = document.querySelector('#msg p'); // Ensures we target the correct <p> element

let turn0 = true;
let count = 0;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Exclude the reset button from game logic buttons
const gameButtons = Array.from(buttons).filter(button => button !== resetBtn);

gameButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        if (turn0) {
            button.innerText = 'O';
            turn0 = false;
        } else {
            button.innerText = 'X';
            turn0 = true;
        }
        button.disabled = true;
        count++;
        if (checkWinners()) {
            disableAllButtons();
        }
    });
});

resetBtn.addEventListener('click', () => {
    turn0 = true;
    count = 0;
    gameButtons.forEach(button => {
        button.innerText = '';
        button.disabled = false;
    });
    msg.innerText = '';
});

const checkWinners = () => {
    for (let pattern of winPattern) {
        const [a, b, c] = pattern;
        let pos1val = gameButtons[a].innerText;
        let pos2val = gameButtons[b].innerText;
        let pos3val = gameButtons[c].innerText;

        if (pos1val !== '' && pos1val === pos2val && pos1val === pos3val) {
            showWinner(pos1val);
            return true;
        }
    }

    if (count === 9) {
        msg.innerText = "It's a draw!";
    }
    return false;
}

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
}

const disableAllButtons = () => {
    gameButtons.forEach(button => button.disabled = true);
}
