import Game from './Game.js';

function main() {
  const canvas = document.getElementById('canvas');
  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error('Canvas element not found');
  }

  // Create the game "engine"
  const game = new Game(canvas);

  // Start the game
  game.start();
}

window.addEventListener('load', main);
