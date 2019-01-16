'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    // let diagOne = arr[0][0] + arr[1][1] + arr[2][2];
    // let diagTwo = arr[0][2] + arr[1][1] + arr[2][0];
    // let difference = Math.abs(diagTwo - diagOne);
    let diagOne = 0;
    let diagTwo = 0;

    let aLength = arr.length;
    for (let i = 0; i < arr.length; i++) { 
        diagOne = diagOne + arr[i][i];
    }

    let sumOne = diagOne;
    let a = arr.length - 1;

    for (let e = 0; e < arr.length; e++) {
        diagTwo = diagTwo + arr[e][a];
        a--;
    }

    let sumTwo = diagTwo;

    return Math.abs(sumTwo - sumOne);

    // for (let e = 0; e < arr.length; e++) {
    //     diagTwo = diagTwo + arr[e][a];
    //     if (a == 0) { 
    //         break;
    //     }
    //     a--;
    // }

    // let sumTwo = diagTwo;

    // let difference = Math.abs(sumOne - sumTwo);

    // return difference;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
