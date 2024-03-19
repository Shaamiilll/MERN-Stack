function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  
    return arr;
  }
  
  // Example usage
  const unsortedArray = [5, 2, 4, 6, 1, 3];
  const sortedArray = selectionSort(unsortedArray);
  console.log(sortedArray);
  