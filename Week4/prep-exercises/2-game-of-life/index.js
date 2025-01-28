// @ts-check
/*------------------------------------------------------------------------------
Adapted from: https://spicyyoghurt.com/tutorials/javascript/conways-game-of-life-canvas
------------------------------------------------------------------------------*/
const CELL_SIZE = 10;
const NUM_COLUMNS = 75;
const NUM_ROWS = 40;

/**
 * @typedef {Object} GridCell
 * @property {number} x
 * @property {number} y
 * @property {boolean} alive
 * @property {boolean} [nextAlive]
 */

/** @typedef {GridCell[]} GridRow */

export class GameOfLife {
  /** @type {GridRow[]} */
  grid = [];

  /**
   * Create a cell with the given coordinates and randomly assign its begin state:
   * life or death
   * @param {number} x
   * @param {number} y
   * @returns {GridCell}
   */
  static createCell(x, y) {
    const alive = Math.random() > 0.5;
    return {
      x,
      y,
      alive,
    };
  }

  /**
   * @param {CanvasRenderingContext2D} context
   * @param {number} numRows
   * @param {number} numColumns
   */
  constructor(context, numRows, numColumns) {
    /** @type {CanvasRenderingContext2D} */
    this.context = context;
    /** @type {number} */
    this.numRows = numRows;
    /** @type {number} */
    this.numColumns = numColumns;

    // Create the grid as a two-dimensional array (i.e. an array of arrays)
    for (let y = 0; y < numRows; y++) {
      /** @type {GridRow} */
      const row = [];
      for (let x = 0; x < numColumns; x++) {
        const cell = GameOfLife.createCell(x, y);
        row.push(cell);
      }
      this.grid.push(row);
    }
  }

  /**
   * Execute a callback for each cell in the grid
   * @param {(cell: GridCell) => void} callback
   */
  forEachCell(callback) {
    this.grid.forEach((row) => {
      row.forEach((cell) => callback(cell));
    });
  }

  /**
   * Draw a cell onto the canvas
   * @param {GridCell} cell
   */
  drawCell(cell) {
    // Draw cell background
    this.context.fillStyle = '#303030';
    this.context.fillRect(
      cell.x * CELL_SIZE,
      cell.y * CELL_SIZE,
      CELL_SIZE,
      CELL_SIZE
    );

    if (cell.alive) {
      // Draw living cell inside background
      this.context.fillStyle = `rgb(24, 215, 236)`;
      this.context.fillRect(
        cell.x * CELL_SIZE + 1,
        cell.y * CELL_SIZE + 1,
        CELL_SIZE - 2,
        CELL_SIZE - 2
      );
    }
  }

  /**
   * Check the state of the cell at the given coordinates
   * @param {number} x
   * @param {number} y
   * @returns {0 | 1}
   */
  isAlive(x, y) {
    // Out-of-border cells are presumed dead
    if (x < 0 || x >= this.numColumns || y < 0 || y >= this.numRows) {
      return 0;
    }

    return this.grid[y][x].alive ? 1 : 0;
  }

  /**
   * Count the number of living neighboring cells for a given cell
   * @param {GridCell} cell
   * @returns {number}
   */
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

  /**
   * Update the state of the cells in the grid by applying the Game Of Life
   * rules on each cell.
   */
  updateGrid() {
    // Loop over all cells to determine their next state.
    this.forEachCell((cell) => {
      // Count number of living neighboring cells
      const numAlive = this.countLivingNeighbors(cell);

      if (numAlive === 2) {
        // Living cell remains living, dead cell remains dead
        cell.nextAlive = cell.alive;
      } else if (numAlive === 3) {
        // Dead cell becomes living, living cell remains living
        cell.nextAlive = true;
      } else {
        // Living cell dies, dead cell remains dead
        cell.nextAlive = false;
      }
    });

    // Apply the newly computed state to the cells
    this.forEachCell((cell) => {
      cell.alive = cell.nextAlive ?? false;
    });
  }

  //

  /**
   * Render a visual representation of the grid
   */
  renderGrid() {
    // Draw all cells in the grid
    this.forEachCell((cell) => this.drawCell(cell));
  }

  /**
   * Execute one game cycle
   */
  gameLoop() {
    // Update the state of cells in the grid
    this.updateGrid();

    // Render the updated grid
    this.renderGrid();

    // Schedule the next generation
    setTimeout(() => {
      window.requestAnimationFrame(() => this.gameLoop());
    }, 200);
  }

  /**
   * Start the game
   */
  start() {
    // Render the initial generation
    this.renderGrid();

    // Kick-start the gameLoop
    window.requestAnimationFrame(() => this.gameLoop());
  }
}

function main() {
  const canvas = document.getElementById('canvas');
  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error('Canvas element not found');
  }

  // Resize the canvas to accommodate the desired number of cell rows and
  // columns
  canvas.height = NUM_ROWS * CELL_SIZE;
  canvas.width = NUM_COLUMNS * CELL_SIZE;

  // Obtain a context that is needed to draw on the canvas
  const context = canvas.getContext('2d');
  if (!(context instanceof CanvasRenderingContext2D)) {
    throw new Error('Context not found');
  }

  // Create the game "engine"
  const game = new GameOfLife(context, NUM_ROWS, NUM_COLUMNS);

  // Start the game
  game.start();
}

window.addEventListener('load', main);
