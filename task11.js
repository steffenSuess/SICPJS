// f => f(n) = n wenn n < 3
// f => f(n) = f(n - 1) + 2(n - 2) + 3(n - 3) wenn n >= 3
// Aufgabe 1: Als rekursiven Prozess abbilden:
function f(n) {
    return n < 3
        ? n
        : f(n - 1) + 2 * f(n - 2) + 3 * f(n - 3);
}

console.log(f(5));
// Aufgabe 2: Als iterativen Prozess abbilden
function f_iterative(n) {
    return n < 3
           ? n
           : f_iterative_impl(2, 1, 0, n - 2);
}
function f_iterative_impl(a, b, c, count) {
    return count === 0
           ? a
           : f_iterative_impl(a + 2 * b + 3 * c, a, b, count - 1);
}

console.log(f_iterative(5));