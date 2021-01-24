/**
 * You want to buy a couple of things from the supermarket to prepare for a party. After scanning all the items the cashier wants to give you the total price, but the machine is broken! Let's write her a function that does it for her instead!
 *
 * Write a function called calculateTotalPrice
 *   It takes 1 argument: an object that contains properties that only contain number values
 *   Loop through the object and add all the number values together
 *   Return a string: "Total: €[TOTAL_PRICE_ITEMS]"
 */

const cartForParty = {
    beer: 1.45,
    chips: 0.99,
    hulaHoop: 3.66,
    hats: 2.32,
    cake: 3.99,
}


// Expected result:
console.log(calculateTotalPrice(cartForParty)); // Returns "Total: €12.41"