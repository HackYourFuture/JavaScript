const list = [1721, 979, 366, 299, 675, 1456];
let result;

list.forEach((item, idx) => {
    // We use a for loop here instead of forEach so we only compare the numbers after the current item in the list
    for (let i = idx + 1; i < list.length; i++) {
        if ((item + list[i]) === 2020) {
            result = item * list[i];
        }
    }
});

// TEST CODE, do not change
console.assert(result === 514579, `The result is not correct, it is ${result}, but should be 514579`);