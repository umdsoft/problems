let array = [9,5,3,4,7,123,44,12,15,10,6,8,66,33];

function binar_search(arr, value){
    let high = arr.length - 1;
    let low = 0;
    let mid = 0;
    
    while(low <= high){
        mid = Math.floor((high + low) / 2);
        if(arr[mid] == value){
            return arr[mid];
        } else if(value > arr[mid]){
            low = mid + 1;
        } else {
            high = mid -1;
        }
    }
    return -1;
}

let sorted = array.sort(function(a,b){
    return a-b;
});

console.log(sorted);
 let bs = binar_search(sorted , 44);

 console.log(bs);