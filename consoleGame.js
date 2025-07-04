// Import the Node.js readline module to handle user input from the console
const readline = require('readline');

// Create an interface to read and write to the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ----- Game Setup -----
const playerOne = 'X';
const playerTwo = 'O';
let currentPlayer = playerOne;
let gameOver = false;

// Define board dimensions
const rows = 3;
const columns = 3;

// Create an empty 3x3 board using nested arrays, each cell initialized to an empty string
let board = Array.from({ length: rows }, () => Array(columns).fill(''));

// ----- Display the Board in the Console -----
function displayBoard() {
    console.clear(); // Clears the console for a cleaner display on each turn
    console.log("\nTic-Tac-Toe Board:\n");
    for (let i = 0; i < rows; i++) {
        // Display row with ' | ' separators, replace '' with space for better readability
        let row = board[i].map(cell => cell === '' ? ' ' : cell).join(' | ');
        console.log(` ${row} `);

        // Draw row separator lines
        if (i < rows - 1) {
            console.log("---+---+---");
        }
    }
}

// ----- Get Player's Move -----
function getchoice() {
    return new Promise((resolve) => {
        rl.question(`Player ${currentPlayer}, enter your move (row and column, e.g., 1 2): `, (input) => {
            // Parse row and column from input
            const [row, col] = input.split(' ').map(Number);

            // Check if input is valid and cell is empty
            if (
                row >= 1 && row <= rows &&
                col >= 1 && col <= columns &&
                board[row - 1][col - 1] === ''
            ) {
                board[row - 1][col - 1] = currentPlayer; // Update board with current player's move
                resolve();
            } else {
                console.log("Invalid move. Try again.");
                resolve(getchoice()); // Ask again if invalid
            }
        });
    });
}

// ----- Check for a Winning Move -----
function checkWin() {
    // Check all rows and columns
    for (let i = 0; i < rows; i++) {
        // Row check: all cells in row i are currentPlayer
        const rowWin = board[i].every(cell => cell === currentPlayer);

        // Column check: all cells in column i are currentPlayer
        const colWin = board.map(row => row[i]).every(cell => cell === currentPlayer);

        if (rowWin || colWin) return true;
    }

    // Check top-left to bottom-right diagonal
    const diag1 = board.every((row, index) => row[index] === currentPlayer);

    // Check top-right to bottom-left diagonal
    const diag2 = board.every((row, index) => row[rows - 1 - index] === currentPlayer);

    return diag1 || diag2;
}

// ----- Check for a Draw -----
function checkDraw() {
    // Flatten board and ensure no cell is empty
    return board.flat().every(cell => cell !== '');
}

// ----- Main Game Loop -----
async function playGame() {
    while (!gameOver) {
        displayBoard();         // Show current state of the board
        await getchoice();      // Wait for the player's move

        // Check if the current player won
        if (checkWin()) {
            displayBoard();
            console.log(`Player ${currentPlayer} wins!`);
            gameOver = true;
        }
        // Check for a draw
        else if (checkDraw()) {
            displayBoard();
            console.log("It's a draw!");
            gameOver = true;
        }
        // Switch turns
        else {
            currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
        }
    }

    playAgain(); // Ask to restart after game ends
}

// ----- Ask to Play Again -----
function playAgain() {
    rl.question("Do you want to play again? (yes/no): ", (answer) => {
        if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
            // Reset the game state
            board = Array.from({ length: rows }, () => Array(columns).fill(''));
            currentPlayer = playerOne;
            gameOver = false;
            playGame();
        } else {
            console.log("Thanks for playing!");
            rl.close(); // Close input interface
        }
    });
}

// ----- Start the Game -----
playGame().catch(err => {
    console.error("An error occurred:", err);
    rl.close(); // Ensure readline closes even if there's an error
});
