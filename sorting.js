function bubbleSort(arr){
    let swapped;
    do{
        swapped = false;
        for(let i = 0; i<arr.length-1; i++){
            if(arr[i]>arr[i+1]){
                // let temp = arr[i];
                // arr[i] = arr[i+1];
                // arr[i+1] = temp;
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                swapped = true;
            }
        }
    }while(swapped);
    console.log(arr);
}
const arr = [9,8,7,6,5,4,3,2,1];
bubbleSort(arr);

function insertionSort(arr){
    for(let i = 0; i<arr.length; i++){
        let numberToInsert = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j]>numberToInsert){
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = numberToInsert
    }
}
insertionSort(arr);
console.log(arr)

function mergeSort(arr){
    if(arr.length < 2) return arr;
    let mid = Math.floor(arr.length/2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr){
    let sortedArr = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift());
        }else{
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
}

console.log(mergeSort([-6,20,4,-2,8]));