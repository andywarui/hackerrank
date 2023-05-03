'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'workbook' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY arr
 */

function workbook(n, k, arr) {
    let page = 1; // initialize the current page to 1
    let specialProblems = 0; // initialize the number of special problems to 0
    
    for (let i = 0; i < n; i++) { // loop through each chapter
      const problems = arr[i]; // get the number of problems in the current chapter
      let problem = 1; // initialize the current problem to 1
      
      while (problem <= problems) { // loop through each problem in the chapter
        if (problem === page) { // if the problem number matches the current page, it is a special problem
          specialProblems++; // increment the number of special problems
        }
        
        if (problem % k === 0 || problem === problems) { // if the current problem is the last problem in a page, move to the next page
          page++; // increment the current page
        }
        
        problem++; // move to the next problem in the chapter
      }
    }
    
    return specialProblems; // return the number of special problems
  }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = workbook(n, k, arr);

    ws.write(result + '\n');

    ws.end();
}
