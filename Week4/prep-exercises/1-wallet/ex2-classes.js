import eurosFormatter from './euroFormatter.js';

class Wallet {
  #name;
  #cash;
  #dailyAllowance;
  #dayTotalWithdrawals;

  constructor(name, cash) {
    this.#name = name;
    this.#cash = cash;
    this.#dailyAllowance = 40;
    this.#dayTotalWithdrawals = 0;
  }

  get name() {
    return this.#name;
  }

  deposit(amount) {
    this.#cash += amount;
  }

  withdraw(amount) {
    if (this.#cash - amount < 0) {
      console.log(`Insufficient funds!`);
      return 0;
    }

    this.#cash -= amount;
    return amount;
  }

  transferInto(wallet, amount) {
    console.log(
      `Transferring ${eurosFormatter.format(amount)} from ${this.name} to ${
        wallet.name
      }`
    );
    const withdrawnAmount = this.withdraw(amount);
    wallet.deposit(withdrawnAmount);
  }

  reportBalance() {
    console.log(
      `Name: ${this.name}, balance: ${eurosFormatter.format(this.#cash)}`
    );
  }
  resetDailyAllowance() {
    this.#dayTotalWithdrawals = 0;
    console.log(
      `Daily allowance reset to: ${eurosFormatter.format(this.#dailyAllowance)}`
    );
  }
  setDailyAllowance(newAllowance) {
    this.#dailyAllowance = newAllowance;
    console.log(
      `New daily withdrawal limit set to: ${eurosFormatter.format(this.#dailyAllowance)}`
    );
  }

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
}

main();
