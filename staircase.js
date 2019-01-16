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

// Complete the staircase function below.
function staircase(n) {
    let temp = "#";
    let nL = n.length;
    let eS = "";
    // CREATING EMPTY SPACE STRING
    for (let l = n; l > 1; l--) {
        eS = eS + " ";
        // console.log(eS);
    }

    // for (let i = 0; i < n; i++) {
    //         if (i == n){
    //     console.log(temp);
    //     break;
    //     }
    //     temp = temp + "#";
    //     console.log(eS + temp);
    // }
    for (let i = 0; i < n; i++) {
        console.log(eS + temp);
        temp = temp + "#";
        eS = eS.substring(0, eS.length - 1);
        // str = str.substring(0, str.length-3);
    }

}


function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
