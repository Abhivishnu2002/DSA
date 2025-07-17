// base case for recursion
// recursive case for recursion
// stack

function factorial(n){
    if(n===0) return 1;
    return n * factorial(n-1);
}
console.log(factorial(5));

function fibonacci(n){
   if(n===0) return [0];
   if(n==1) return [0, 1];
   let sequence = fibonacci(n-1);
   sequence.push(sequence[sequence.length-1] + sequence[sequence.length-2]);
   return sequence; 
}
console.log(fibonacci(10));

function recursiveBinarySearch(arr, target){
    return search(arr, target, 0, arr.length-1);
}
function search(arr, target, leftIndex, rightIndex){
    if(leftIndex>rightIndex) return -1;
    let middleIndex = Math.floor((leftIndex+rightIndex)/2);
    if(target === arr[middleIndex]) return middleIndex;
    if(target<arr[middleIndex]) return search(arr, target, leftIndex, middleIndex-1);
    else return search(arr, target, middleIndex+1, rightIndex);
}
let arr = [1,2,3,4,5,6,7];
console.log(recursiveBinarySearch(arr, 3))

function addMiddle(original, newStr){
    if(original.length <= 1) return original+newStr;
    let mid = Math.floor(original.length/2);
    let left = original.substring(0, mid);
    let right = original.substring(mid);
    return left+newStr+right;
}
console.log(addMiddle("Hello World", " Beautiful"))

function counter(count){
    console.log(count);
    if(count>1){
        count = count - 1;
        counter(count);
    }else{
        return;
    }
}
counter(4);

function multiply(arr){
    if(arr.length === 0) return 1;
    return arr[0]*multiply(arr.slice(1));
}
console.log(multiply([1,2,3,4]));

function isPalindrome(str){
    if(str.length<=1) return true;
    if(str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.substring(1, str.length-1));
}
console.log(isPalindrome("malayalam"));

function reverseString(str){
    if(str === '') return '';
    return reverseString(str.substring(1)) + str[0];
}
console.log(reverseString("hello"));

function reverseSubstring(str, sub1, sub2){
    let i1 = str.indexOf(sub1);
    let i2 = str.indexOf(sub2);
    if(i1 === -1 || i2 === -1){
        return str;
    }
    let revsub1 = sub1.split('').reverse().join('');
    let revsub2 = sub2.split('').reverse().join('');
    let before = str.substring(0, i1);
    let between = str.substring(i1+ sub1.length, i2);
    let after = str.substring(i2+sub2.length);
    let reversedString = before + revsub1 + between + revsub2 + after;
    return reverseSubstring(reversedString, sub1, sub2);
}
const string = "hello my name is abhijith";
const str1 = "name";
const str2 = "is";

console.log(reverseSubstring(string, str1, str2));

const obj = {
    name: "hisham",
    age: 20,
    place: "Trivandrum",
    phone: 1289312892
};

function convert(obj){
    let str = "";
    for(let key in obj){
        str += `${key}=${obj[key]}&`
    }
    return str.slice(0, -1);
}
console.log(convert(obj));