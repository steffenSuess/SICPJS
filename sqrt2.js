// Verschachtelte und dadurch vereinfachte Funktionen
function sqrt (x) {
  function sqrtIterative (guess) {
    return isGoodEnough(guess) ? 
      guess :
      sqrtIterative(improve(guess));
  }

  function isGoodEnough (guess) {
    return abs(square(guess) - x) < 0.001;
  }

  function square (x) {
    return x * x;
  }

  function abs (x) {
    return x >= 0 ? x : -x;
  }

  function improve (guess) {
    return average(guess, x / guess);
  }

  function average (x, y) {
    return (x + y) / 2;
  }
  
  return sqrtIterative(1);
}

console.log(sqrt(16));