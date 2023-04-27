const list = [1721, 979, 366, 299, 675, 1456];
let result;

list.forEach((item, idx) => {
    // We use a for loop here instead of forEach so we only compare the numbers after the current item in the list
    for (let i = idx + 1; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if ((item + list[i] + list[j]) === 2020) {
                result = item * list[i] * list[j];
            }
        }
    }
});

// TEST CODE, do not change
console.assert(result === 241861950, `The result is not correct, it is ${result}, but should be 241861950`);