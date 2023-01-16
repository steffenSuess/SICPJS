function sqrtIterative (guess, x) {
  return isGoodEnough(guess, x) ? 
    guess :
    sqrtIterative(improve(guess, x), x);
}

function isGoodEnough (guess, x) {
  return abs(square(guess) - x) < 0.001;
}

function square (x) {
  return x * x;
}

function abs (x) {
  return x >= 0 ? x : -x;
}

function improve (guess, x) {
  return average(guess, x / guess);
}

function average (x, y) {
  return (x + y) / 2;
}

function sqrt (x) {
  return sqrtIterative(1, x);
}

console.log(sqrt(16));