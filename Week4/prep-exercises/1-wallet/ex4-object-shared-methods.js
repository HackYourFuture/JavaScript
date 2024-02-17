import eurosFormatter from "./euroFormatter.js";

function deposit(amount) {
  this._cash += amount;
}

function withdraw(amount) {
  if (this._cash - amount < 0) {
    console.log(`Insufficient funds!`);
    return 0;
  } else if (amount >= this._dailyAllowance) {
    console.log("Amount requested exceeds the daily withdrawal limit");
    return 0;
  } else if (amount + this._dayTotalWithdrawals > this._dailyAllowance) {
    console.log(`you may withdraw maximum of ${this._dailyAllowance} per day`);
    return 0;
  }

  this._cash -= amount;
  this._dayTotalWithdrawals += amount;
  return amount;
}

function resetDailyAllowance() {
  this._dayTotalWithdrawals = 0;
}

function setDailyAllowance(newAllowance) {
  this._dailyAllowance = newAllowance;
}

function transferInto(wallet, amount) {
  console.log(
    `Transferring ${eurosFormatter.format(amount)} from ${
      this._name
    } to ${wallet.getName()}`
  );
  const withdrawnAmount = this.withdraw(amount);
  wallet.deposit(withdrawnAmount);
}

function reportBalance() {
  console.log(
    `Name: ${this._name}, balance: ${eurosFormatter.format(this._cash)}`
  );
}

function getName() {
  return this._name;
}

function createWallet(name, cash = 0) {
  return {
    _name: name,
    _cash: cash,
    _dayTotalWithdrawals,
    _dailyAllowance: 40,
    deposit,
    withdraw,
    transferInto,
    reportBalance,
    getName,
    resetDailyAllowance,
    setDailyAllowance,
  };
}

function main() {
  const walletJack = createWallet("Jack", 100);
  const walletJoe = createWallet("Joe", 10);
  const walletJane = createWallet("Jane", 20);

  walletJack.transferInto(walletJoe, 50);
  walletJane.transferInto(walletJoe, 25);

  walletJane.deposit(20);
  walletJane.transferInto(walletJoe, 25);

  walletJack.reportBalance();
  walletJoe.reportBalance();
  walletJane.reportBalance();
}

main();
