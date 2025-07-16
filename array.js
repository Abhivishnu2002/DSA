function twoSum(arr, target){
    for(let i = 0; i< arr.length; i++){
        for( let j = i+1; j<arr.length; j++){
            if(arr[i]+arr[j]===target){
                return [i, j];
            }
        }
    }
}
let arr = [1,4,5,2];
let target = 5;
console.log(twoSum(arr, target));

function reverseArray(arr){
    for(let i = 0; i<arr.length/2; i++){
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    }
    return arr;
}
arr = [1,2,3,4,5,6,7,8,9];
console.log(reverseArray(arr));

function reverse(array){
    let arr = [];
    for(let i = array.length-1; i>0; i--){
        arr.push(array[i]);
    }
    return arr;
}
arr = [1,2,3,4,5];
console.log(reverse(arr));

function isPrime(n){
    if(n<2) return false;
    for(let i = 2; i<n; i++){
        if(n%i===0) return false;
    }
    return true;
}
console.log(isPrime(5));
console.log(isPrime(9));
console.log(isPrime(101));

function powerOfTwo(n){
    if(n<1) return false;
    while(n>1){
        if(n%2 !== 0) return false;
        n = n/2;
    }
    return true;
}
console.log(powerOfTwo(7));
console.log(powerOfTwo(8));

function fibonacci(n){
    let fib = [0, 1];
    for(let i = 2; i< n; i++){
        fib[i] = fib[i-1] + fib[i-2];
        if(i===n-1){
            return fib[i];
        }
    }
    return fib;
}
console.log(fibonacci(7));

function factorial(n){
    let fact = 1
    for(let i = 1; i<=n; i++){
        fact = fact * i
    }
    return fact;
}
console.log(factorial(5));

function linearSearch(arr, target){
    for(let i = 0; i<arr.length; i++){
        if(arr[i]===target) return i
    }
    return -1;
}
console.log(linearSearch(arr, 4));

function binarySearch(array, target){
    let arr = array.sort((a,b)=>a-b);
    let leftIndex = 0;
    let rightIndex = arr.length-1;
    while(leftIndex<=rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2);
        if(arr[middleIndex] === target) return middleIndex;
        if(arr[middleIndex]<target) leftIndex = middleIndex+1
        else rightIndex = middleIndex-1
    }
    return -1;
}
let array = [23,34,12,26,54,72];
console.log(binarySearch(array, 26));