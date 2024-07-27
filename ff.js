var BankMachine = /** @class */ (function () {
    function BankMachine(startingBalance) {
        this.accountBalance = startingBalance;
    }
    BankMachine.prototype.getBalance = function () {
        return this.accountBalance;
    };
    BankMachine.prototype.addFunds = function (amount) {
        if (amount <= 0) {
            return 'The amount to add must be more than zero.';
        }
        this.accountBalance += amount;
        return "Added ".concat(amount, ". New balance: ").concat(this.accountBalance);
    };
    BankMachine.prototype.withdrawFunds = function (amount) {
        if (amount <= 0) {
            return 'The amount to withdraw must be more than zero.';
        }
        if (amount > this.accountBalance) {
            return 'Not enough funds available.';
        }
        this.accountBalance -= amount;
        return "Removed ".concat(amount, ". New balance: ").concat(this.accountBalance);
    };
    return BankMachine;
}());
// Example usage:
var myATM = new BankMachine(1000);
console.log(myATM.getBalance()); // Output: 1000
console.log(myATM.addFunds(500)); // Output: Added 500. New balance: 1500
console.log(myATM.withdrawFunds(200)); // Output: Removed 200. New balance: 1300
console.log(myATM.withdrawFunds(1500)); // Output: Not enough funds available.
