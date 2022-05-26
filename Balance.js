function balance (withdrawal,deposit){
    let balance = 2500;

    if (deposit >= withdrawal) {
        balance = balance + deposit - withdrawal;
    }
    else if(balance < 0 || withdrawal > balance || deposit < 0){
        return "insufficient funds"
    }
    return balance;
}
console.log(balance(3000,''));



 