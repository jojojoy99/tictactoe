let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let currentPlayer = 'X';

function makeMove(row, col) {
    if (board[row][col] !== '') return;

    board[row][col] = currentPlayer;
    document.getElementById('gameBoard').children[row].children[col].innerText = currentPlayer;

    if (checkWin()) {
        document.getElementById('message').innerText = `Player ${currentPlayer} wins! ${currentPlayer} 玩家赢了！`;
    } else if (checkDraw()) {
        document.getElementById('message').innerText = 'It\'s a draw! 打平手';
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    // Check rows
    for (let row = 0; row < 3; row++) {
        if (board[row][0] === currentPlayer && board[row][1] === currentPlayer && board[row][2] === currentPlayer) {
            return true;
        }
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
        if (board[0][col] === currentPlayer && board[1][col] === currentPlayer && board[2][col] === currentPlayer) {
            return true;
        }
    }

    // Check diagonals
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
        return true;
    }
    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
        return true;
    }

    return false;
}

function checkDraw() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === '') {
                return false;
            }
        }
    }
    return true;
}

function resetGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    currentPlayer = 'X';
    document.getElementById('message').innerText = '';

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            document.getElementById('gameBoard').children[row].children[col].innerText = '';
        }
    }
}
