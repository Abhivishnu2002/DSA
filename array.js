function sumOfArray(arr, n){
    if(n===0)return;
    return sumOfArray(arr, n-1) + arr[n-1]
}
sumOfArray([1,2,3,4,5], )