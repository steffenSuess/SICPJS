function p () {
  return p();
}

function test (x, y) {
  return x === 0 ? 0 : y 
}

// Applicative order oder normal order?
test(0, p());

// Applicative order => Call stack exceeded
test(0, p());
test(0, p());
test(0, p());
test(0, p());
test(0, p());
//...
// Normal order
test(0, p());
x === 0 ? 0 : y;
0 === 0 ? 0 : p()
// => 0
