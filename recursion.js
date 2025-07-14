// base case for recursion
// recursive case for recursion
// stack

function factorial(n){
    if(n===0 || n===1) return 1;
    return n * factorial(n-1);
}
console.log(factorial(4));

function fibonacci(n){
    if(n==0) return 0;
    if(n==1) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(6));

function power(x, n){
    if(n===0) return 1
    return x * power(x, n-1);
}
console.log(power(9,3));