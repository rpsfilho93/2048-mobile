export class GameController {
  _grid: number[][];
  _gridSize: number;
  _score: number;
  _gameOver: boolean;


  constructor(gridSize: number) {


    let initialGrid: number[][] = [];

    for (let i = 0; i < gridSize; i += 1) {
      for (let j = 0; j < gridSize; j += 1) {
        initialGrid[i].push(0);
      }
    }

    this._grid = initialGrid;
    this._gridSize = gridSize;
    this._score = 0;
    this._gameOver = false;
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
}