/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Comparision results for correctness for Prime Numbers
*/

const { prime } = require("../src/node/primes");
const { isPrimeConventionalWay, isPrimeSquarerootWay, isPrimeSquarerootOptimised } = require("../src/node/primes_alternate")

let iterations = 1000000;


function test_primecalculations() {
    let count = 0;
    let arr = [];
    for (let i = 1; i <= iterations; i++) {
        let traditional = isPrimeConventionalWay(i), newer = prime(i);
        if (traditional == newer) {
            count += 1;
        } else {
            arr.push([traditional, newer, i]);
        }
    }
    console.log("[count, iterations, arr] list: ", count, iterations, arr);
    if (count === iterations) {
        return true;
    }
    return false;
}

console.log("Tests Passed: ", test_primecalculations());
