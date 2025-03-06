import Cell from './Cell.js';

export default class Grid {
  rows = [];

  constructor(numRows, numColumns, cellSize) {
    this.numRows = numRows;
    this.numColumns = numColumns;

    Cell.size = cellSize;

    // Create the grid as a two-dimensional array (i.e. an array of arrays)
    for (let y = 0; y < numRows; y++) {
      const row = [];
      for (let x = 0; x < numColumns; x++) {
        const cell = new Cell(x, y);
        row.push(cell);
      }
      this.rows.push(row);
    }
  }

  isAlive(x, y) {
    // Out-of-border cells are presumed dead
    if (x < 0 || x >= this.numColumns || y < 0 || y >= this.numRows) {
      return 0;
    }

    const cell = this.rows[y][x];
    return cell.alive ? 1 : 0;
  }

  countLivingNeighbors(cell) {
    const { x, y } = cell;
    return (
      this.isAlive(x - 1, y - 1) +
      this.isAlive(x, y - 1) +
      this.isAlive(x + 1, y - 1) +
      this.isAlive(x - 1, y) +
      this.isAlive(x + 1, y) +
      this.isAlive(x - 1, y + 1) +
      this.isAlive(x, y + 1) +
      this.isAlive(x + 1, y + 1)
    );
  }

  forEachCell(callback) {
    this.rows.forEach((row) => {
      row.forEach((cell) => callback(cell));
    });
  }

  update() {
    this.forEachCell((cell) => {
      const aliveNeighbors = this.countLivingNeighbors(cell);
      cell.liveAndLetDie(aliveNeighbors);
    });

    this.forEachCell((cell) => cell.update());
  }

  render(context) {
    this.forEachCell((cell) => cell.draw(context));
  }
}
