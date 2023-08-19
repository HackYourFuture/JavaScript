"use strict";
/**
 * The `state` property says what the traffic light's state (i.e. colour) is at
 * that moment.
 */
const trafficLight = {
  state: "green",
};

let rotations = 0;
while (rotations < 2) {
  const currentState = trafficLight.state;
  console.log("The traffic light is on", currentState);

  // TODO
  // if the color is green, turn it orange
  if (currentState === 'green') {
  trafficLight.stat = 'orange';
  // if the color is orange, turn it red
  } else if (currentState === 'orange') {
  trafficLight.stat = 'red';
  // if the color is red,
   
  }  else if (currentState === 'red') {
    // add 1 to rotations
     rotations++;
    // and turn it green
  trafficLight.stat = 'green';
 }
  
};
/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red

*/
