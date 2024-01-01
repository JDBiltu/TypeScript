//print bar chart of the given array
//e.g
//arr = [2,3,6,3];
//output
//       *
//       *
//       *  *
//    *  *  *
// *  *  *  *
// *  *  *  *

let arr = [4,7,6,2,4,3,5];

//calculate the largest element of  the given array ============
let n = 0;
for(let i = 0 ; i < arr.length ; i++){
    if( n < arr[i]){
        n = arr[i];
    }
}

//bar-chart
let count = n;
for(let i = 0 ; i < n ; i++){
    let s = " ";

    for(let j = 0 ; j <arr.length ; j++){
        if( count <= arr[j]){
            s+=" * ";
        }else{
            s+="   ";
        }
    }
    count--
    console.log(s);
}