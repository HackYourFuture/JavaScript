import eurosFormatter from './euroFormatter.js';

function deposit(amount) {
  this._cash += amount;
}

function withdraw(amount) {
  if (this._dayTotalWithdrawals + amount > this._dailyAllowance) {
    console.log(`Insufficient remaining daily allowance!`);
    return 0;
  }

  if (this._cash - amount < 0) {
    console.log(`Insufficient funds!`);
    return 0;
  }

  this._cash -= amount;
  this._dayTotalWithdrawals += amount;
  return amount;
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

function resetDailyAllowance() {
  this._dayTotalWithdrawals = 0;
  console.log(
    `Daily allowance reset to: ${eurosFormatter.format(this._dailyAllowance)}`
  );
}

function setDailyAllowance(newAllowance) {
  this._dailyAllowance = newAllowance;
  console.log(
    `New daily withdrawal limit set to: ${eurosFormatter.format(this._dailyAllowance)}`
  );
}

function createWallet(name, cash = 0) {
  return {
    _name: name,
    _cash: cash,
    _dailyAllowance: 40,
    _dayTotalWithdrawals: 0,
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
  const walletJack = createWallet('Jack', 100);
  const walletJoe = createWallet('Joe', 10);
  const walletJane = createWallet('Jane', 20);

  walletJack.setDailyAllowance(70);
  walletJack.withdraw(10);
  walletJack.reportBalance();
  walletJack.resetDailyAllowance();
  walletJack.withdraw(20);
  walletJack.reportBalance();

  walletJane.deposit(50);
  walletJane.transferInto(walletJoe, 40);
  walletJane.reportBalance();
  walletJoe.reportBalance();  
}

main();
