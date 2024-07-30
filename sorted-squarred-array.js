// brute force method - 1
function SortedSquarredArray(array){
    let newArray = new Array(array.length).fill(0);

    for(let i = 0; i < array.length; i++){
        newArray[i] = array[i] * array[i];
    }

    newArray.sort((a,b)=> (a - b));
    return newArray
}

const result = SortedSquarredArray([-4,-3,0,2,6]);
console.log(result);