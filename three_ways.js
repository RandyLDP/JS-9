    function calculateSquare1 (number1, number2) {
        const number1Squared = number1 * number1;
        const number2Squared = number2 * number2;
        const sum = number1Squared + number2Squared;
        const sumSquared = sum * sum;
        return sumSquared;
    }
    console.log(calculateSquare1(2, 4));

const squared = function(num1, num2){
    const aadSquared = num1 * num1 + num2 * num2;
    const _add= aadSquared * aadSquared;
    return aadSquared;
}
console.log(squared (3,4));

const doSquareCalculation = (number1, number2) =>
    square(square(number1) + square(number2));
    console.log(doSquareCalculation(3,4));


