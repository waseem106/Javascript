// encapuslation is preventing direct access to certain methods and properties of objects, effictively making them private or inaccessible from outside the object

class BankAccount{

    #balance;

    constructor(accountNumber,initialBalance)
    {
        this.accountNumber=accountNumber;
        this.#balance=initialBalance;
    }



    deposit(amount)
    {
        this.#balance+=amount
        console.log(`${amount} has been deposit in account ${this.accountNumber}`)
        console.log(`Your New Balance is ${this.#balance}`)
    }



    withdraw(amount)
    {

        this.#balance-=amount
        console.log(`${amount} has been withdrawn successfully`)
        console.log(`Your remaining balance is  ${this.#balance}`)
    }

    balance()
    {
        console.log(`Your account balance is ${this.#balance}`)
    }


}



const account1=new BankAccount(1324232,200)
account1.balance()
account1.deposit(400)
account1.withdraw(200)