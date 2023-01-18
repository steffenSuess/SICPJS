// Fibonacci numbers
// Tree Recursion
function fib(n) {
    return n === 0 
           ? 0
           : n === 1
           ? 1
           : fib(n - 1) + fib(n - 2); 
}

console.log(fib(3));