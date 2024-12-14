import eurosFormatter from './euroFormatter.js';

function createWallet(name, cash = 0) {
  let dailyAllowance = 40;
  let dayTotalWithdrawals = 0;
  return {
    _name: name,
    _cash: cash,
    dailyAllowance,
    dayTotalWithdrawals,

    

    deposit(amount) {
      this._cash += amount;
    },

    withdraw: function (amount) {
      if (this._cash - amount < 0) {
        console.log(`Insufficient funds!`);
        return 0;
      }

      this._cash -= amount;
      this.dayTotalWithdrawals += amount;
      return amount;
    },

    transferInto: function (wallet, amount) {
      
      const withdrawnAmount = this.withdraw(amount);
      wallet.deposit(withdrawnAmount);
    },
     resetDailyAllowance() {
      this.dayTotalWithdrawals = 0;
    },

    setDailyAllowance(newAllowance) {
      this.dailyAllowance = newAllowance;
      console.log(`Daily allowance set to: ${newAllowance}`);
    },


    

    reportBalance: function () {
      console.log(
        `Name: ${this._name}, balance: ${eurosFormatter.format(this._cash)}`
      );
    },

    getName: function () {
      return this._name;
    },
  };
}

function main() {
  const walletJack = createWallet('Jack', 100);
  const walletJoe = createWallet('Joe', 10);
  const walletJane = createWallet('Jane', 20);

  walletJack.transferInto(walletJoe, 50);
  walletJane.transferInto(walletJoe, 25);

  walletJane.deposit(20);
  walletJane.transferInto(walletJoe, 25);

  walletJack.reportBalance();
  walletJoe.reportBalance();
  walletJane.reportBalance();
}

main();
