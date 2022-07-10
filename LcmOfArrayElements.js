// GCD of 'a' and 'b'
function gcd(firstNumber, secondNumber) {
    if (secondNumber == 0)
        return firstNumber;
    return gcd(secondNumber, firstNumber % secondNumber);
}


function findlcm(numbers, n) {
    let result = numbers[0];
 
    for (let i = 1; i < n; i++) {
        result = (((numbers[i] * result)) /
                (gcd(numbers[i], result)));
    }  
 
    return result;
}
 
