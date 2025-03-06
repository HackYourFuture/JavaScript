import Grid from './Grid.js';

const CELL_SIZE = 10;
const NUM_COLUMNS = 75;
const NUM_ROWS = 40;

export default class Game {
  constructor(canvas) {
    // Resize the canvas to accommodate the desired number of cell rows and
    // columns
    canvas.height = NUM_ROWS * CELL_SIZE;
    canvas.width = NUM_COLUMNS * CELL_SIZE;

    // Obtain a context that is needed to draw on the canvas
    this.context = canvas.getContext('2d');
    if (!(this.context instanceof CanvasRenderingContext2D)) {
      throw new Error('Context not found');
    }

    this.grid = new Grid(NUM_ROWS, NUM_COLUMNS, CELL_SIZE);
  }

  gameLoop() {
    this.grid.render(this.context);
    this.grid.update();

    setTimeout(() => {
      window.requestAnimationFrame(() => this.gameLoop());
    }, 200);
  }

  start() {
    window.requestAnimationFrame(() => this.gameLoop());
  }
}
