'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    var chars = s.split('');
    let p = chars.indexOf('P');
    let a = chars.indexOf('A');
    chars.splice(-2, 2);
    let string = "";

    for (let i = 0; i < chars.length; i++) {
        string = string + chars[i];
    }

    if (s[0] == 1 && s[1] == 2 && a > 0) { // if AM
        let hour = [];
        string.split('');
        for (let i = 0; i < 2; i++) {
            hour.push(string[i]);
        }
        hour = hour.join('');
        hour = '00';
        string = string.slice(2);
        var array = string.split(' ');
        array.splice(0, 0, hour);
        var output = array.join('');
        return output;
    } else if (s[0] == 1 && s[1] == 2 && p > 0) {
        let hour = [];
        string.split('');
        for (let i = 0; i < 2; i++) {
            hour.push(string[i]);
        }
        hour = hour.join('');
        hour = '12';
        string = string.slice(2);
        var array = string.split(' ');
        array.splice(0, 0, hour);
        var output = array.join('');
        return output;
    } else if (p != -1) {
        let hour = [];
        string.split('');
        for (let i = 0; i < 2; i++) {
            hour.push(string[i]);
        }
        hour = parseInt(hour.join('')) + 12;
        string = string.slice(2);
        var array = string.split(' ');
        array.splice(0, 0, hour);
        var output = array.join('');
        return output;

    } else if (a > -1) {
        let hour = [];
        string.split('');
        for (let i = 0; i < 2; i++) {
            hour.push(string[i]);
        }
        hour = hour.join('');
        string = string.slice(2);
        var array = string.split(' ');
        array.splice(0, 0, hour);
        var output = array.join('');
        return output;
    } else {
        let hour = [];
        string.split('');
        for (let i = 0; i < 2; i++) {
            hour.push(string[i]);
        }
        hour = hour.join('');
        hour = parseInt(hour) + 12;
        string = string.slice(2);
        var array = string.split(' ');
        array.splice(0, 0, hour);
        var output = array.join('');
        return output;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
