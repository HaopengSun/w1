'use strict';
const input = process.argv.slice(2);
const reverse = function(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let newElement = '';
        for (let j = arr[i].length - 1; j >= 0; j--) {
        newElement += arr[i][j];
        }
        newArr.push(newElement);
    }
    return newArr;
}
const output = reverse(input);
for (let i =0; i < output.length; i++){
    console.log(output[i]);
}