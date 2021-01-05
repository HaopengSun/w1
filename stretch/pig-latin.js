'use strict';
const input = process.argv.slice(2);
const reverse = function(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let newElement = '';
        for (let j = 1; j < arr[i].length; j++) {
            newElement += arr[i][j];
        }
        newElement += arr[i][0] + 'ay'
        newArr.push(newElement);
    }
    return newArr;
}
const output = reverse(input);
console.log(output.join(' '));