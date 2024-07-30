// function findMaxNumber(arr){
//          return Math.max(...arr)
//   }


function FindMax(arr){
    let max= arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

const result = FindMax([12,32,45,76,98]);
console.log(result)