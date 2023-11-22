function isPrime(number){
    if (number<= 1){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number) ; i++) {
        if (number% i===0){
            return false;
        }
    }
    return true;
}
let inputNum = +prompt("Enter the number to check: ");
if (isPrime(inputNum)){
    document.write("Number "+ inputNum + " is Prime");
}else {
    document.write("Number "+ inputNum + " is not Prime");
}
