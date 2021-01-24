let shoppingCart = ['bananas', 'milk'];

const addToShoppingCart = (item) => {
    shoppingCart.push(item);

    if (shoppingCart.length > 3) {
        shoppingCart.shift();
    }

    return `You bought ${shoppingCart.join(', ')}!`;
}

// Expected output
console.log(addToShoppingCart('chocolate')); // Returns "You bought bananas, milk, chocolate!"
console.log(addToShoppingCart('waffles')); // Returns "You bought milk, chocolate, waffles!"
console.log(addToShoppingCart('tea')); // Returns "You bought chocolate, waffles, tea!"