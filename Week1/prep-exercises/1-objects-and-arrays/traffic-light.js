"use strict";
/**
 * Our state variable says what the traffic light's color is at that moment
 */
const simpleTrafficLight = {
  state: "red",
};
const currentTrafficLightState1 = simpleTrafficLight.state;

/**
 * The possibleStates define the options, then the currentStateIndex indicates where the traffic light is at that moment.
 */
const trafficLightWithStates = {
  possibleStates: ["green", "orange", "red"],
  currentStateIndex: 0,
};
const currentTrafficLightState2 =
  trafficLightWithStates.possibleStates[
    trafficLightWithStates.currentStateIndex
  ];
