import { mergeRight, moveRight, moveLeft, mergeLeft, moveUp, mergeUp, moveDown, mergeDown } from "./moves";

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

    console.log('initialGrid', initialGrid);

    this._grid = initialGrid;
    this._gridSize = gridSize;
    this._score = 0;
    this._gameOver = false;

    this.addRandomCell();
    this.addRandomCell();
  }

  private addRandomCell() {
    let randomX: number;
    let randomY: number;

    do {
      randomX = Math.floor((Math.random() * this._gridSize));
      randomY = Math.floor((Math.random() * this._gridSize));
    } while (this._grid[randomY][randomX] !== 0)

    const notRandomNumbers = [2, 2, 2, 2, 2, 2, 2, 2, 2, 4];
    const randomIndex = Math.floor(Math.random() * notRandomNumbers.length);

    this._grid[randomX][randomY] = notRandomNumbers[randomIndex];
  }

  moveRight() {
    moveRight(this._grid);
    const moveScore = mergeRight(this._grid);
    this._score += moveScore;
    moveRight(this._grid);
  }

  moveLeft() {
    moveLeft(this._grid);
    const moveScore = mergeLeft(this._grid);
    this._score += moveScore;
    moveLeft(this._grid);
  }

  moveUp() {
    moveUp(this._grid);
    const moveScore = mergeUp(this._grid);
    this._score += moveScore;
    moveUp(this._grid);
  }

  moveDown() {
    moveDown(this._grid);
    const moveScore = mergeDown(this._grid);
    this._score += moveScore;
    moveDown(this._grid);
  }
}