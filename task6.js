// Antwort, es entsteht ein StackOverflow-Error. Das Problem ist, dass immer entweder nur die thenClause oder nur die elseClause ausgeführt wird. In jedem Fall immer nur eine der beiden. Durch die Applicative Order werden aber erst sämtliche Parameter der conditional-Funktion aufgelöst, d.h. auch die thenClause und die elseClause. Da die elseClause aber wiederum die sqrtIterative-Funktion aufruft, kommen wir garnicht erst dazu die conditional-Funktion auszuführen.

function conditional (predicate, thenClause, elseClause) {
  return predicate ? thenClause : elseClause;
}


function sqrtIterative (guess, x) {
  return conditional(
    isGoodEnough(guess, x), 
    guess, 
    sqrtIterative(improve(guess, x), x)
  );
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