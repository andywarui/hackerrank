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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    // Sort the array of station cities in ascending order
    c.sort((a, b) => a - b);
    
    let maxDist = 0;
    let prevStation = -1; // Initialize previous station index as -1
    
    for (let i = 0; i < c.length; i++) {
        // Calculate the distance between two station cities
        const dist = Math.floor((c[i] - prevStation) / 2);
        maxDist = Math.max(maxDist, dist); // Update maximum distance
        
        prevStation = c[i]; // Update previous station index
    }
    
    // Check distance between last station city and last city
    const lastDist = n - 1 - c[c.length - 1];
    maxDist = Math.max(maxDist, lastDist);
    
    // Check distance between first station city and first city
    const firstDist = c[0];
    maxDist = Math.max(maxDist, firstDist);
    
    return maxDist;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = flatlandSpaceStations(n, c);

    ws.write(result + "\n");

    ws.end();
}
