// Comment...
class TicTacToe {
  constructor() {
    this.playerOne = true;
    this.board = [[null, null, null],[null, null, null],[null, null, null]];
    this.winner = false;
  }
  startGame() {
    while ((this.board[0].includes(null) || this.board[1].includes(null) || this.board[2].includes(null)) && this.winner === false) {
      if (this.playerOne) {
        let turn = prompt('Player One Enter Your X and Y Location');
        let x = turn.split(',')[0];
        let y = turn.split(',')[1];
        this.takeTurn(x, y);
      } else {
        let turn = prompt('Player Two Enter Your X and Y Location');
        let x = turn.split(',')[0];
        let y = turn.split(',')[1];
        this.takeTurn(x, y);
      }
    }
    return 'Thanks For Playing!!'
  }
  takeTurn(x, y) {
    if (x < 0 || x > 2 || y < 0 || y > 2) {
      alert('that location is invalid')
    } else if (this.board[x][y] !== null) {
      alert('that location is already taken')
    } else {
      if (this.playerOne) {
        this.board[x][y] = 'X';
      } else {
        this.board[x][y] = 'O';
      }
      let playerOneWins = JSON.stringify(['X','X','X']);
      let playerTwoWins = JSON.stringify(['O','O','O']);
      for (let i = 0; i < 3; i++) {
        if (JSON.stringify(this.board[i]) === playerOneWins) {
          alert('Player One Wins!!');
          this.winner = true;
          break;
        } else if (JSON.stringify(this.board[i]) === playerTwoWins) {
          alert('Player Two Wins!!');
          this.winner = true;
          break;
        } else if (JSON.stringify([this.board[0][i], this.board[1][i], this.board[2][i]]) === playerOneWins) {
          alert('Player One Wins!!');
          this.winner = true;
          break;
        } else if (JSON.stringify([this.board[0][i], this.board[1][i], this.board[2][i]]) === playerTwoWins) {
          alert('Player Two Wins!!');
          this.winner = true;
          break;
        }
      }
      if (JSON.stringify([this.board[0][0], this.board[1][1], this.board[2][2]]) === playerOneWins) {
        alert('Player One Wins!!');
        this.winner = true;
      } else if (JSON.stringify([this.board[0][0], this.board[1][1], this.board[2][2]]) === playerTwoWins) {
        alert('Player Two Wins!!');
        this.winner = true;
      }
    }
  }
};

let game = new TicTacToe();
game.startGame();
