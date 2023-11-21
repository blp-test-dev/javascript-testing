var a = 5; // Fails unused variable check
var b = 10; // Fails unused variable check

function add(a, b) {
  // Fails unused function parameters check
  return a + b;
}

console.log(add(a, b));

if (a = 10) {
  // Fails incorrect use of the assignment operator
  console.log('a is 10');
}

function divide(x, y) {
  // Fails missing return in function
  if (y === 0) {
    return; // Fails inconsistent use of promises
  }
  return x / y;
}

console.log(divide(10, 2));

// Fails missing 'const', 'let', or 'var' declarations
c = 15;

// Fails undefined variable check
console.log(d);
