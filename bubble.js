let arrUnSorted = [10,5,8,3,4,1,11,18,13,7,9,6];

let swapped;

function bubbleSort(arr){
    swapped = false;
    let end = arr.length - 1;
    for(let i=0; i< end; i++){
        if(arr[i] > arr[i+1]){
            swapped = true;
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    end --;
}

do {
    bubbleSort(arrUnSorted)
} while(swapped);

console.log(arrUnSorted);