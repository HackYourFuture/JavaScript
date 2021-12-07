"use strict";
/**
 * Our state variable says what the traffic light's color is at that moment
 */

function getCurrentTrafficLightState(trafficLight) {
  // TODO
  // Should return `green`, `orange` or `red` depending on the state of the given parameter
}

function getNextStateIndex(trafficLight) {
  // TODO
  // if the color is green, turn it orange
  // if the color is orange, turn it red
  // if the color is red, turn it green
}

function main() {
  const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    currentStateIndex: 0,
  };

  for (let i = 0; i < 6; i++) {
    const currentTrafficLightState = getCurrentTrafficLightState(trafficLight);
    console.log("The traffic light is on", currentTrafficLightState);

    trafficLight.currentStateIndex = getNextStateIndex(trafficLight);
  }
}

main();
/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red

*/
