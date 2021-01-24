const cartForParty = {
    beer: 1.45,
    chips: 0.99,
    hulaHoop: 3.66,
    hats: 2.32,
    cake: 3.99,
}

const calculateTotalPrice = (object) => {
    let sum = 0;

    for (let item in object) {
        sum = sum + object[item];
    }

    return `Total: €${sum}`;
}

// Expected result:
console.log(calculateTotalPrice(cartForParty)); // Returns "Total: €12.41"