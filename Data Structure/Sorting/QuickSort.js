function QuickSort(arr){
    if(arr.length < 2){
        return arr
    }

    let left =[]
    let rigth =[]
    let pivot=arr[arr.length -1]

    for(let i=0;i<arr.length -1;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            rigth.push(arr[i])
        }
    }
    return [...QuickSort(left), pivot , ...QuickSort(rigth)]
}

let arr1 = [90,-45,83,1,4,-21]
console.log(QuickSort(arr1));