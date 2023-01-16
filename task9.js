// iterative or recursive?

function plus1(a, b) {
  return a === 0 ? b : inc(plus1(dec(a), b));
}

console.log(plus1(4, 5));

/*
inc(plus(dec(4), 5));
inc(plus(3, 5));
inc(inc(plus(dec(3), 5)));
inc(inc(plus(2), 5));
inc(inc(inc(plus(dec(2), 5))));
inc(inc(inc(plus(1), 5)));
inc(inc(inc(inc(plus(dec(1), 5)))));
inc(inc(inc(inc(plus(0, 5)))));
inc(inc(inc(inc(5))));
inc(inc(inc(6)));
inc(inc(7));
inc(8);
9;

=> recursive process
*/

function plus2(a, b) {
  return a === 0 ? b : plus2(dec(a), inc(b));
}

console.log(plus2(4, 5));

/*
plus(dec(4), inc(5));
plus(3, 6);
plus(dec(3), inc(6));
plus(2, 7);
plus(dec(2), inc(7));
plus(1, 8);
plus(dec(1), inc(8));
plus(0, 9);
9;

=> iterative process
*/

function inc(x) {
  return x + 1;
}

function dec(x) {
  return x - 1;
}