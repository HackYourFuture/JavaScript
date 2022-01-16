/**
 * It is time to write some bigger code! You have a bankAccount that is modeled as given.
 *
 * Finish the two functions that will donate money (donateMoney) and pay rent (payRent).
 * If you do not have enough funds, call the onFail function given and don't change the bankAccount.
 * If you do have the funds, update the bankAccount accordingly.
 *
 * TIP: have a look at the test code to get more information on what needs to happen
 * TIP: a lot of the things the functions do are the same, you may want to create one or more other functions to not duplicate code
 */

const bankAccount = {
  // The currentBalance is how much money you have in your bankAccount.
  currentBalance: 250,
  // The transactions are a list of changes so that you can keep track.
  transactions: [
    /**
     * The prevAmount is what your balance was before the transaction,
     * the newAmount is what your balance was after the transaction
     * and the reason is what the transaction was about
     */
    {
      prevAmount: 350,
      newAmount: 250,
      reason: "Donation",
    },
  ],
};

/**
 * The donateMoney and payRent do a lot of the same thing, so created a separate function
 */
const createPayment = (amount, onSuccess, onFail, reason) => {
  const newAmount = bankAccount.currentBalance - amount;

  if (newAmount < 0) {
    onFail();

    return;
  }

  bankAccount.transactions.push({
    prevAmount: bankAccount.currentBalance,
    newAmount,
    reason,
  });
  bankAccount.currentBalance = newAmount;

  onSuccess();
};
const donateMoney = (amount, onSuccess, onFail) => {
  createPayment(amount, onSuccess, onFail, "Donation");
};
const payRent = (amount, onSuccess, onFail) => {
  createPayment(amount, onSuccess, onFail, "Rent");
};

/**
 * TEST CODE. DO NOT EDIT
 */

const onSuccessEnglish = () => {
  console.log("Payment successful! Thank you!");
};
const onFailEnglish = () => {
  console.log("You do not have enough money to make this payment.");
};

const onSuccessDutch = () => {
  console.log("Betaling geslaagd! Dank u!");
};
const onFailDutch = () => {
  console.log("U heeft niet voldoende saldo om deze betaling te doen.");
};

donateMoney(100, onSuccessEnglish, onFailEnglish);
console.log(bankAccount);

payRent(100, onSuccessEnglish, onFailEnglish);
console.log(bankAccount);

donateMoney(100, onSuccessDutch, onFailDutch);
console.log(bankAccount);

/**
* The console should print out the following:
Payment successful! Thank you!
{
currentBalance: 150,
transactions: [
  { prevAmount: 350, newAmount: 250, reason: 'Donation' },
  { prevAmount: 250, newAmount: 150, reason: 'Donation' }
]
}
Payment successful! Thank you!
{
currentBalance: 50,
transactions: [
  { prevAmount: 350, newAmount: 250, reason: 'Donation' },
  { prevAmount: 250, newAmount: 150, reason: 'Donation' },
  { prevAmount: 150, newAmount: 50, reason: 'Rent' }
]
}
U heeft niet voldoende saldo om deze betaling te doen.
{
currentBalance: 50,
transactions: [
  { prevAmount: 350, newAmount: 250, reason: 'Donation' },
  { prevAmount: 250, newAmount: 150, reason: 'Donation' },
  { prevAmount: 150, newAmount: 50, reason: 'Rent' }
]
}
* 
*/
