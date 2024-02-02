// Original drink list
let drinkList = ["water", "tea", "coffee"];

// Function to shuffle an array (using Fisher-Yates algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    console.log([array[i], array[j]]);
  }
}

// Shuffle the drinkList array
shuffleArray(drinkList);

// Function to fill drinkTray with at most two occurrences of each drink and a total length of 5
function fillDrinkTray() {
  let drinkTray = [];
  let drinkCount = {}; // To keep track of occurrences

  while (drinkTray.length < 5) {
    for (let drink of drinkList) {
      // If the drink has been added less than twice, add it to the tray
      if (drinkCount[drink] === undefined || drinkCount[drink] < 2) {
        drinkTray.push(drink);
        // Update the count for the drink
        drinkCount[drink] = (drinkCount[drink] || 0) + 1;
        console.log(drinkCount, drinkCount[drink]);
        if (drinkTray.length === 5) break;
      }
    }
  }

  return drinkTray;
}

// Fill the drinkTray array with exactly 5 elements
let filledDrinkTray = fillDrinkTray();

// Output the result
console.log(filledDrinkTray);
