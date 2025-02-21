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
localStorage
let cycle = 0;

while (cycle < 2) { 
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("The traffic light is on", currentState);

  
  if (trafficLight.stateIndex === 0) { 
    trafficLight.stateIndex = 1; 
  } else if (trafficLight.stateIndex === 1) { 
    trafficLight.stateIndex = 2; 
  } else if (trafficLight.stateIndex === 2) { 
    cycle++; 
    trafficLight.stateIndex = 0; 
  }
}

/**
 * The expected output:
 * The traffic light is on green
 * The traffic light is on orange
 * The traffic light is on red
 * The traffic light is on green
 * The traffic light is on orange
 * The traffic light is on red
 */
