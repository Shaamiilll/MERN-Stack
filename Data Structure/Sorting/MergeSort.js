function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const righArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(righArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if(leftArr[0] <= rightArr[0]){
        sortedArr.push(leftArr.shift())
    }else{
        sortedArr.push(rightArr.shift())
    }
  }
 return [...sortedArr, ...leftArr , ...rightArr]
}

let arr = [8 , 2, -9 , 68]
console.log(mergeSort(arr));