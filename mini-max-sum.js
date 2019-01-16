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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    // carr = copy of arr, oarr = original of arr
    let p = 0;
    let g = 0;
    let w = 0;
    let g_a = [];
    let w_a = [];
    let carr = arr;
    let oarr = [];

    for (let i = 0; i < arr.length; i++) {
        oarr.push(arr[i]);
    }

    while (g_a.length != 4) {
        g = Math.max.apply(null, carr);
        g_a.push(g);
        p = carr.indexOf(g);
            
    }

    while (w_a.length != 4) {
        w = Math.min.apply(null, oarr);
        w_a.push(w);
        p = oarr.indexOf(w);
        oarr.splice(p, 1);
    }

    let g_total = 0;
    let w_total = 0;

    for (let i = 0; i < g_a.length; i++) {
        g_total += g_a[i];
    }

    for (let i = 0; i < w_a.length; i++) {
        w_total += w_a[i];
    }

    console.log(w_total + " " + g_total);

}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
