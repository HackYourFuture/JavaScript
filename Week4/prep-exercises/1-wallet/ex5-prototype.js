import eurosFormatter from './euroFormatter.js';

function Wallet(name, cash) {
  this._name = name;
  this._cash = cash;
  this._dailyAllowance = 40;
  this._dayTotalWithdrawals = 0;
}

Wallet.prototype.deposit = function (amount) {
  this._cash += amount;
};

Wallet.prototype.withdraw = function (amount) {
  if (this._dayTotalWithdrawals + amount > this._dailyAllowance) {
    console.log(`Insufficient remaining daily allowance!`);
    return 0;
  }
  if (this._cash - amount < 0) {
    console.log(`Insufficient funds!`);
    return 0;
  }

  this._cash -= amount;
  return amount;
};

Wallet.prototype.transferInto = function (wallet, amount) {
  console.log(
    `Transferring ${eurosFormatter.format(amount)} from ${
      this._name
    } to ${wallet.getName()}`
  );
  const withdrawnAmount = this.withdraw(amount);
  wallet.deposit(withdrawnAmount);
};

Wallet.prototype.reportBalance = function () {
  console.log(
    `Name: ${this._name}, balance: ${eurosFormatter.format(this._cash)}`
  );
};

Wallet.prototype.getName = function () {
  return this._name;
};

Wallet.prototype.resetDailyAllowance = function () {
  this._dayTotalWithdrawals = 0;
  console.log(
    `Daily allowance reset to: ${eurosFormatter.format(this._dailyAllowance)}`
  );
}

Wallet.prototype.setDailyAllowance = function (newAllowance) {
  this._dailyAllowance = newAllowance;
  console.log(
    `New daily withdrawal limit set to: ${eurosFormatter.format(this._dailyAllowance)}`
  );
}

function main() {
  const walletJack = new Wallet('Jack', 100);
  const walletJoe = new Wallet('Joe', 10);
  const walletJane = new Wallet('Jane', 20);

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
