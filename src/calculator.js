function calculatorObj() {
  const add = (num1, num2) => Number(num1) + Number(num2);
  const subtract = (num1, num2) => num1 - num2;
  const multiply = (num1, num2) => num1 * num2;
  const divide = (num1, num2) => {
    if (num2 !== 0) {
      return num1 / num2;
    }
    return "Can't Divide a Number by 0";
  };
  return {
    add,
    subtract,
    multiply,
    divide,
  };
}

const calculator = new calculatorObj();

module.exports = calculator;
