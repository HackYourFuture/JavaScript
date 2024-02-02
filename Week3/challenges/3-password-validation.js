/**
 * Credit to https://adventofcode.com/ for this exercise
 *
 * Each object in the passwordList gives a password policy and then the password.
 * The times field says the minimal and maximal amount of times the letter should be in the password. So 1-3 means at least 1 time, at most 3 times.
 * The letter field gives which letter should be counted
 * The password field gives the password
 *
 * In the list 2 passwords are valid, the middle one is not as there is no b in the password.
 *
 * We expect the output:
 *
 * 'abcde' is VALID, a is present 1 times and should have been present at least 1 and at most 3 times
 * 'cdefg' is INVALID, b is present 0 times and should have been present at least 1 and at most 3 times
 * 'ccccccccc' is VALID, c is present 9 times and should have been present at least 2 and at most 9 times
 */

const passwordList = [
  { times: "1-3", letter: "a", password: "abcde" },
  { times: "1-3", letter: "b", password: "cdefg" },
  { times: "2-9", letter: "c", password: "ccccccccc" },
];
let count = [];

const validity = (passwordList, i) => {
  count = passwordList[i].password
    .split("")
    .filter((x) => x === passwordList[i].letter);
  if (
    count.length <= passwordList[i].times.split("")[2] &&
    count.length >= passwordList[i].times.split("")[0]
  ) {
    return "VALID";
  } else {
    return "INVALID";
  }
};

for (i = 0; i < passwordList.length; i++) {
  console.log(
    passwordList[i].password,
    "is",
    validity(passwordList, i) + ",",
    passwordList[i].letter,
    "is present",
    count.length,
    "times and should have been present at least",
    passwordList[i].times.split("")[0],
    "and at most",
    passwordList[i].times.split("")[2],
    "times"
  );
}
