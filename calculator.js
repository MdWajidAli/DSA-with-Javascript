function Calculator(num1, num2, op) {
  // let num1, num2, op;
  if (op == "+") {
    return num1 + num2;
  } else if (op == "-") {
    return num1 - num2;
  } else if (op == "*") {
    return num1 * num2;
  } else op == "/";
  return num1 / num2;
}

const result = Calculator(12, 6, "/");
console.log(result);
