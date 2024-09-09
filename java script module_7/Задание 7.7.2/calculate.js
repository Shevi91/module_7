function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return "Invalid operator";
  }
}

const obj = {
  a: 2,
  b: 3,
  operator: '+'
};

const result = calculate.apply(obj, [obj.a, obj.b, obj.operator]);
console.log(result);