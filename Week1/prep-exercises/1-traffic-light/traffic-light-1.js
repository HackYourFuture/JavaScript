"use strict";
/**
 * The `state` property says what the traffic light's state (i.e. color) is at
 * that moment.
 */
const trafficLight = {
  state: "green",
};

function display() {
  const currentState = trafficLight.state;
  console.log("The traffic light is on", currentState);
}

const changeColor = () => {
  if (trafficLight.state == "green") {
    trafficLight.state = "orange";
    setTimeout(display, 1000);
  } else if (trafficLight.state == "orange") {
    trafficLight.state = "red";
    setTimeout(display, 3000);
  } else {
    trafficLight.state = "green";
    setTimeout(display, 3000);
  }
};

setInterval(changeColor, 2000);

// TODO
// if the color is green, turn it orange
// if the color is orange, turn it red
// if the color is red, add 1 to rotations and turn it green

/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red

*/
