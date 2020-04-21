let key = "ABBBCCDDCCC";
let key2 = "AAAAAAAAAAABXXAAAAAAAAAA";

let k = 3;

function sort(key){
    //key ni uzungilini aniqlimiz
    for(let i=0; i < key.length; i++){
        if(key[i+1] == key[i]){
            k++;
        } else {
            i=+1;
        }
    }
    console.log(k);
}

sort(key);