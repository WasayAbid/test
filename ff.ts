class BankMachine {
    private accountBalance: number;

    constructor(startingBalance: number) {
        this.accountBalance = startingBalance;
    }

    getBalance(): number {
        return this.accountBalance;
    }

    addFunds(amount: number): string {
        if (amount <= 0) {
            return 'The amount to add must be more than zero.';
        }
        this.accountBalance += amount;
        return `Added ${amount}. New balance: ${this.accountBalance}`;
    }

    withdrawFunds(amount: number): string {
        if (amount <= 0) {
            return 'The amount to withdraw must be more than zero.';
        }
        if (amount > this.accountBalance) {
            return 'Not enough funds available.';
        }
        this.accountBalance -= amount;
        return `Removed ${amount}. New balance: ${this.accountBalance}`;
    }
}

// Example usage:
const myATM = new BankMachine(1000);
console.log(myATM.getBalance()); // Output: 1000
console.log(myATM.addFunds(500));   // Output: Added 500. New balance: 1500
console.log(myATM.withdrawFunds(200));  // Output: Removed 200. New balance: 1300
console.log(myATM.withdrawFunds(1500)); // Output: Not enough funds available.