'use strict';
/**
 * The `trafficLight` object is now no longer a global variable. Instead,
 * it is defined in function `main()` and passed as a parameter to other
 * functions, as and when needed.
 */

function getCurrentState(trafficLight) {
  // TODO
  // Should return the current state (i.e. colour) of the `trafficLight`
  // object passed as a parameter.
}

function getNextStateIndex(trafficLight) {
  // TODO
  // Return the index of the next state of the `trafficLight` such that:
  // - if the color is green, it will turn to orange
  // - if the color is orange, it will turn to red
  // - if the color is red, it will turn to green
}

// This function loops for the number of seconds specified by the `secs`
// parameter and then returns.
// IMPORTANT: This is not the recommended way to implement 'waiting' in
// JavaScript. You will learn better ways of doing this when you learn about
// asynchronous code.
function waitSync(secs) {
  const start = Date.now();
  while (Date.now() - start < secs * 1000) {
    // nothing do to here
  }
}

function main() {
  const trafficLight = {
    possibleStates: ['green', 'orange', 'red'],
    stateIndex: 0,
  };

  for (let cycle = 0; cycle < 6; cycle++) {
    const currentState = getCurrentState(trafficLight);
    console.log(cycle, 'The traffic light is now', currentState);

    waitSync(1); // Wait a second before going to the next state
    trafficLight.stateIndex = getNextStateIndex(trafficLight);
  }
}

main();
/**
 * The output should be:

0 The traffic light is now green
1 The traffic light is now orange
2 The traffic light is now red
3 The traffic light is now green
4 The traffic light is now orange
5 The traffic light is now red

*/
