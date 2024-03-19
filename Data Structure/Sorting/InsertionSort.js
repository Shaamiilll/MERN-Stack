// function InsertionSort(arr) {
//  for(let i=0;i<arr.length;i++){
//     let numberToInsert = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > numberToInsert) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j+1] = numberToInsert
//  }
// }

// const arr = [8, 20, -2, 3, 9];
// InsertionSort(arr);
// console.log(arr);

function insertionSort(arr){
    let temp;
    for(let i=1;i<arr.length;i++){
        let curr = arr[i];
        for(let j=i-1;j>=0;j--){
            if(curr<arr[j]){
                temp = arr[j]
                arr[j] = curr;
                arr[j+1] = temp;
            }else{
                break;
            }
        }
    }
    return arr
}

let arr1 = [1,100,43,2,90,900,22];

console.log(insertionSort(arr1));