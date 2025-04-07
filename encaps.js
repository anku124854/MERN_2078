class BankSys {
    #balance; // Private field

    constructor(client, balance, add) {
        this.client = client;
        this.#balance = balance;
        this.add = add;
    }

    // Getter for balance
    getBalance() {
        return this.#balance;
    }
}

const acct = new BankSys("Shiristi", 45000, "Nepalgunj");

console.log(acct.getBalance()); // ✅ 45000