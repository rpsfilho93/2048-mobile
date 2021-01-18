import { mergeRight, moveRight, moveLeft, mergeLeft, moveUp, mergeUp, moveDown, mergeDown } from "./moves";

const moves = {
  UP: 'up',
  DOWN: 'down',
  RIGHT: 'right',
  LEFT: 'left',
}

const INITIAL_GRID = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

export class GameController {
  _grid: number[][];
  _gridSize: number;
  _score: number;
  _gameOver: boolean;

  constructor(gridSize: number) {
    let initialGrid: number[][] = [];

    for (let i = 0; i < gridSize; i += 1) {
      let row: number[] = [];
      for (let j = 0; j < gridSize; j += 1) {
        row.push(0);
      }
      initialGrid.push(row);
    }

    this._grid = INITIAL_GRID.map(row => row.slice());
    this._gridSize = gridSize;
    this._score = 0;
    this._gameOver = false;

    this.addRandomCell();
    this.addRandomCell();
  }

  private addRandomCell() {
    const emptyCells: { x: number, y: number }[] = [];

    this._grid.forEach((row, i) =>
      row.forEach((cell, j) => {
        if (cell === 0) {
          emptyCells.push({ x: i, y: j });
        }
      }
      ),
    );

    const randomIndexPosition = Math.floor((Math.random() * emptyCells.length));

    const randomPosition = emptyCells[randomIndexPosition];

    const notRandomNumbers = [2, 2, 2, 2, 2, 2, 2, 2, 2, 4];
    const randomIndex = Math.floor(Math.random() * notRandomNumbers.length);

    this._grid[randomPosition.x][randomPosition.y] = notRandomNumbers[randomIndex];
  }

  nextMove(move: 'up' | 'down' | 'right' | 'left') {
    let nextGrid = this._grid.map(row => row.slice());

    switch (move) {
      case moves.UP:
        moveUp(nextGrid);
        this._score += mergeUp(nextGrid);
        moveUp(nextGrid);
        break;
      case moves.DOWN:
        console.log('nextGrid', nextGrid);
        moveDown(nextGrid);
        this._score += mergeDown(nextGrid);
        moveDown(nextGrid);
        break;
      case moves.RIGHT:
        moveRight(nextGrid);
        this._score += mergeRight(nextGrid);
        moveRight(nextGrid);
        break;
      case moves.LEFT:
        moveLeft(nextGrid);
        this._score += mergeLeft(nextGrid);
        moveLeft(nextGrid);
    }

    if (nextGrid.toString() !== this._grid.toString()) {
      this._grid = nextGrid.map(row => row.slice());
      this.addRandomCell();
    }
  }
}