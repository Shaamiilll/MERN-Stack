function BinarySearch(arr, target) {
  let leftIndex = 0;
  let rigthIndex = arr.length - 1;

  while (leftIndex <= rigthIndex) {
    let middleIndex = Math.floor(leftIndex + rigthIndex / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rigthIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1
}
console.log(BinarySearch([-5,7,4,2,6,90], 0));