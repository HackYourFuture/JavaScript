"use strict";
/**
 * The `possibleStates` property define the states (in this case: colours)
 * in which the traffic light can be.
 * The `stateIndex` property indicates which of the possible states is current.
 */
const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};

let cycle = 0;
while (cycle < 2) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log(`the traffic light is on : ${currentState}`);
  if (currentState === "green") {
    trafficLight.stateIndex = 1;
  } else if (currentState === "orange") {
    trafficLight.stateIndex = 2;
  } else if (currentState === "red") {
    trafficLight.stateIndex = 0;
    cycle++;
    console.log("---------------------");
    console.log(`complete ${cycle} cycle`);
    console.log("---------------------");
  }
}

// TODO
// if the color is green, turn it orange
// if the color is orange, turn it red
// if the color is red, add 1 to cycles and turn it green

/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red

*/
