const args = process.argv.slice(2);

if (args.length !== 3) {
  console.error('Please provide exactly 3 arguments: <number1> <number2> <operation>');
  process.exit(1);
}

const [num1Arg, num2Arg, operation] = args;

const num1 = parseFloat(num1Arg);
const num2 = parseFloat(num2Arg);

if (isNaN(num1) || isNaN(num2)) {
  console.error('Both first and second arguments must be valid numbers!');
  process.exit(1);
}

if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
  console.error('Numbers are too large or invalid!');
  process.exit(1);
}

let result;

switch (operation.toLowerCase()) {
  case 'add':
  case 'plus':
    result = num1 + num2;
    break;
  case 'subtract':
  case 'minus':
    result = num1 - num2;
    break;
  case 'multiply':
  case 'times':
    result = num1 * num2;
    break;
  case 'divide':
  case 'division':
    if (num2 === 0) {
      console.error('Division by zero is not allowed!');
      process.exit(1);
    }
    result = (num1 / num2).toFixed(4); 
    result = parseFloat(result); 
    break;
  default:
    console.error(`Unknown operation: ${operation}`);
    console.info('Supported operations: add/, subtract/, multiply/, divide/');
    process.exit(1);
}

if (!Number.isFinite(result)) {
  console.error('Calculation resulted in an invalid number!');
  process.exit(1);
}

console.log(`Result: ${result}`);