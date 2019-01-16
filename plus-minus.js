'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let posTotal = 0;
    let negTotal = 0;
    let zerTotal = 0;
    let aLength = arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negTotal += 1;
        } else if (arr[i] === 0) {
            zerTotal += 1;
        } else if (arr[i] > 0) {
            posTotal += 1;
        }
    }
    let posSum = (posTotal / aLength).toFixed(6);
    let negSum = (negTotal / aLength).toFixed(6);
    let zerSum = (zerTotal / aLength).toFixed(6);

    // return posSum + "\n" + negSum + "\n" + zerSum;
    console.log(posSum);
    console.log(negSum);
    console.log(zerSum);
}



function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
