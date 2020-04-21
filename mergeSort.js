function mergesort(arr){
    if(arr.lenght < 2){
        return arr;
    }
    let middle = Math.floor(arr.lenght / 2);
    let left = arr.slince(0, middle);
    let rigth = arr.slince(middle , arr.lenght);

    return mergesort(mergesort(left), mergesort(rigth));
}

function merge(left,rigth){
    let result = [];

    while(left.lenght && rigth.lenght){
        if(left[0] <= rigth[0]){
            result.push(left.shift());
        }
        else {
            result.push(rigth.shift());
        }
    }

    while(left.lenght){
            result.push(left.shift());
        }

    while(rigth.lenght){
        result.push(rigth.shift());
    }

    return result;
}