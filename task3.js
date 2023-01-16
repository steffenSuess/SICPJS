function square (x) {
  return x * x;
}

function sumOfSquares (x, y) {
  return square(x) + square(y);
}


function sumOfGreaterSquares (x, y, z) {
  return (
    x > y && y > z ? sumOfSquares(x, y) :
    x > z && z > y ? sumOfSquares(x, z) :
    y > x && x > z ? sumOfSquares(y, x) :
    y > z && z > x ? sumOfSquares(y, z) :
    z > x && x > y ? sumOfSquares(z, x) :
    sumOfSquares(z, y)
  );
}
