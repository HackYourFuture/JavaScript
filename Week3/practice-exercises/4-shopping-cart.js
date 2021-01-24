/**
 * 
 * Let's do some grocery shopping! We're going to get some things to cook dinner with. However, you like to spend your money and always buy too many things. So when you have more than 3 items in your shopping cart the first item gets taken out.
 *   
 * Write a function named addToShoppingCart
 *   It takes 1 argument: a grocery item (string)
 *   Add grocery item to shoppingCart. If the amount of items is more than 3 remove the first one in the array
 *   Loops through the array in order to list out the items
 *   Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!"
 */

const shoppingCart = ['bananas', 'milk'];



// Expected output
addToShoppingCart('chocolate'); // Returns "You bought bananas, milk, chocolate!"
addToShoppingCart('waffles'); // Returns "You bought milk, chocolate, waffles!"
addToShoppingCart('tea'); // Returns "You bought chocolate, waffles, tea!"