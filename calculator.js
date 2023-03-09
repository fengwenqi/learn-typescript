function calculator(operator, numbers) {
    if (operator === 'plus') {
        return numbers[0] + numbers[1];
    }
    else if (operator === 'minus') {
        return numbers[0] - numbers[1];
    }
}
calculator.plus = function (numbers) {
    return numbers[0] + numbers[1];
};
calculator.minus = function (numbers) {
    return numbers[0] - numbers[1];
};
