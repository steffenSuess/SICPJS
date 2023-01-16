function cbrtIterative (guess, x) {
  return isGoodEnough(guess, x) ? 
    guess :
    cbrtIterative(improve(guess, x), x);
}

function isGoodEnough (guess, x) {
  return abs(cube(guess) - x) < 0.001;
}

function cube (x) {
    return x * x * x;
}

function square (x) {
  return x * x;
}

function abs (x) {
  return x >= 0 ? x : -x;
}

function improve (guess, x) {
  return (x / square(guess) + 2 * guess) / 3;
}

function average (x, y) {
  return (x + y) / 2;
}

function cbrt (x) {
  return cbrtIterative(1, x);
}

console.log(cbrt(27));