// const reverseString = (str) => str.split('').reverse().join('');

function ReverseString(str){
    let reverseStr = '';

    for(let i = str.length - 1;i >= 0 ; i--){
        reverseStr += str[i];
    }
    return reverseStr;
}

const result = ReverseString("Hello world");
console.log(result);