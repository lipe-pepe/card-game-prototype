const calculateExpression = (expression: string) => {
  let firstMatch;
  let result;
  let rest;

  // Uses regex to check if the first character is valid (+, - or number)
  //    i.e: +49-3 -> Valid
  //    i.e: -2234 -> Valid
  //    i.e: *23-2 -> Invalid
  firstMatch = expression.match(/^[\+\-]?(\d+)/);

  if (!firstMatch) return null;

  // Adds the first number to the result
  result = parseInt(firstMatch[0], 10);

  // Removes the first number from the expression to continue
  rest = expression.slice(firstMatch[0].length);

  // Extracts the numbers and operators from the rest
  let numbers = rest.match(/\d+/g) || [];
  let operators = rest.match(/[\+\-\*\/]/g) || [];

  // If there are more operators than numbers, is invalid
  if (operators.length > numbers?.length) return null;

  // Aplies the math calcs
  for (let i = 0; i < operators.length; i++) {
    let nextNumber = parseInt(numbers[i], 10);

    switch (operators[i]) {
      case "+":
        result += nextNumber;
        break;
      case "-":
        result -= nextNumber;
        break;
      case "×":
        result *= nextNumber;
        break;
      case "÷":
        if (nextNumber === 0) return null;
        result /= nextNumber;
        break;
    }
  }

  return result;
};

export default calculateExpression;
