# 🕹️ Node.js Console Tic-Tac-Toe

A classic, interactive Tic-Tac-Toe game built specifically for the terminal. This project demonstrates clean logic separation, 2D array manipulation, and advanced handling of asynchronous user input in a CLI (Command Line Interface) environment.

## 🧠 Technical Highlights
* **Asynchronous Flow Control:** Utilizes `Promises` wrapped in an `async/await` loop to manage turn-based gameplay without blocking the execution thread.
* **Matrix Logic:** Employs a 2D array structure to represent the game board, using coordinate-based mapping (Rows 1-3, Columns 1-3).
* **Algorithmic Win Detection:** * **Rows/Columns:** Uses `.every()` and `.map()` to validate lines.
    * **Diagonals:** Implements index-matching logic to check cross-board win conditions.
* **Input Validation:** Includes recursive error handling to ensure users provide valid coordinates before the game proceeds.

## 🛠️ Requirements
* **Node.js** (v12.x or higher recommended)
* No external dependencies (uses Node.js standard library).

## 🚀 Getting Started

1. **Clone the repository:**
  ```bash
   git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
   ```
2. **Navigate to the project folder:**
  
  ```bash
  cd tic-tac-toe
```

3. **Run the game:**
```bash
node tictactoe.js
```

## 🎮 How to Play
The board is mapped to a 3x3 grid.

When prompted, enter your move as two numbers separated by a space (e.g., 1 2 for Row 1, Column 2).

The game will automatically detect wins or draws and offer the option to restart.

## 📝 Project Structure
tictactoe.js: Contains the full game engine, including the readline interface and the game loop.

README.md: Documentation and setup instructions.

## 📈 Future Roadmap
AI Opponent: Implement a "Minimax" algorithm to create an unbeatable computer player.

Color Support: Integrate a library like chalk to colorize 'X' and 'O' symbols for better UI.

Score Tracking: Add a persistent scoreboard to track wins across multiple game sessions.


---

### How to add this to your GitHub:
1.  Go to your GitHub repository.
2.  Navigate into the folder where your `tictactoe.js` file is.
3.  Click **Add file** -> **Create new file**.
4.  Name it `README.md`.
5.  Paste the code above into the "Edit new file" tab.
6.  Click **Commit changes**.
