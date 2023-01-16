function square (x) {
  return x * x;
}

function sumOfSquares (x, y) {
  return square(x) + square(y);
}

function f (a) {
  return sumOfSquares(a + 1, a * 2);
}

// Parameter auswerten, Funktionen anwenden (Applicative order)
f(5)
sumOfSquares(5 + 1, 5 * 2);
sumOfSquares(6, 10)
square(6) + square(10)
6 * 6 + 10 * 10 
36 + 100
136

// Funktionen anwenden, Parameter auswerten (Normal order)
f(5)
sumOfSquares(5 + 1, 5 * 2)
square(5 + 1) + square(5 * 2)
(5 + 1) * (5 + 1) + (5 * 2) * (5 * 2)
6 * 6 + 10 * 10 
36 + 100
136 

function abs (x) {
  return x >= 0 ? x : -x;
}

function abs (x) {
  return (
    x > 0 ? x :
    x === 0 ? 0 :
    -x
  );
  
  // ===, !==, >, <, >=, <=
}

// &&, ||, !

