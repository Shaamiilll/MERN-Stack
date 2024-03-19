function BinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rigthIndex) {
  if (leftIndex > rigthIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rigthIndex) / 2);
  if (target == arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rigthIndex);
  }
}

console.log(BinarySearch([1,6,3,2,78],3));