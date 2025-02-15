let trafficLight = {
  state: "green",
};

let rotations = 0;
while (rotations < 2) {
  const currentState = trafficLight.state;
  console.log("The traffic light is on", currentState);

  if (currentState === "green") {
    trafficLight.state = "orange";  
  }
  else if (currentState === "orange") {
    trafficLight.state = "red";
  }
  else if (currentState === "red") {
    trafficLight.state = "green";
    rotations++;
  }
}
