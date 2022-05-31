# Prep exercises - Dice experimentation

Let's do some experiments! One thing computers are great at is doing the same thing over and over and over again, so let's use that to see how random the random function in JavaScript is. In the `index.js` there is an explanation of what to implement. In essence we want to simulate the rolling of a die a lot of times and then track how many times a certain value was rolled.

For a fair die the chance of rolling a certain value should be equal for all possible values. When rolling a six-sided die many times we therefore expect the number of times each value is thrown to approach 16.6% (1/6) of the total number of rolls. The more rolls we do the closer we should get to the expected value, following the [Law of large numbers](https://en.wikipedia.org/wiki/Law_of_large_numbers).

> Wikipedia: _In probability theory, the law of large numbers (LLN) is a theorem that describes the result of performing the same experiment a large number of times. According to the law, the average of the results obtained from a large number of trials should be close to the expected value and tends to become closer to the expected value as more trials are performed._

In this prep exercise we are using the `Math.random()` function to simulate throwing a die. So what we are actually testing here is how well `Math.random()` distributes its values evenly across the range of 0 to 1 when called many times. We will do this for an increasing number of rolls (`sampleSize` in the code) and expect the results to even out to 16.6% across all values.

## Things to think about

- The `valueCounts` is implemented as an array. Do you think there is another way to store this? Why do you think the decision was made to go with an array?
- What do you think about the code division? Would you add another function or maybe remove one? Why?
