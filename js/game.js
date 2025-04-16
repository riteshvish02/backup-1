// Tic Tac Toe Game in Console
const game = {
    board: [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]],
    currentPlayer: "X",
    
    printBoard: function () {
      console.clear();
      console.log("Tic Tac Toe Board:");
      this.board.forEach((row) => console.log(row.join(" | ")));
      console.log("\n");
    },
    
    makeMove: function (row, col) {
      if (this.board[row][col] !== " ") {
        console.log("Cell already occupied. Try again.");
        return false;
      }
      this.board[row][col] = this.currentPlayer;
      if (this.checkWin()) {
        this.printBoard();
        console.log(`Player ${this.currentPlayer} wins!`);
        return true;
      }
      if (this.isDraw()) {
        this.printBoard();
        console.log("It's a draw!");
        return true;
      }
      this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      this.printBoard();
      console.log(`Player ${this.currentPlayer}'s turn.`);
      return false;
    },
    
    checkWin: function () {
      const b = this.board;
      // Check rows, columns, and diagonals
      for (let i = 0; i < 3; i++) {
        if (b[i][0] === this.currentPlayer && b[i][1] === this.currentPlayer && b[i][2] === this.currentPlayer) return true;
        if (b[0][i] === this.currentPlayer && b[1][i] === this.currentPlayer && b[2][i] === this.currentPlayer) return true;
      }
      if (b[0][0] === this.currentPlayer && b[1][1] === this.currentPlayer && b[2][2] === this.currentPlayer) return true;
      if (b[0][2] === this.currentPlayer && b[1][1] === this.currentPlayer && b[2][0] === this.currentPlayer) return true;
      return false;
    },
    
    isDraw: function () {
      return this.board.flat().every((cell) => cell !== " ");
    },
    
    reset: function () {
      this.board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
      this.currentPlayer = "X";
      console.log("Game reset. Player X starts.");
      this.printBoard();
    }
  };
  
  // Instructions to play
  console.log("Welcome to Tic Tac Toe!");
  console.log("To play, use the command: game.makeMove(row, col)");
  console.log("Example: game.makeMove(0, 1) for top-center.");
  console.log("Rows and columns are 0-indexed (0, 1, 2).");
  console.log("Use game.reset() to start a new game.");
  game.printBoard();
  