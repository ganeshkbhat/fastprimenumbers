/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Comparision results for correctness for Prime Numbers
*/

import { prime, primeOld, primePrecalculated, primeReturnValue } from "../src/primes";
import { isPrimeConventionalWay, isPrimeConventionalWayPrecalculated, isPrimeConventionalWayReturnValue, isPrimeSquarerootOptimised, isPrimeSquarerootPrecalculated, isPrimeSquarerootWay, isPrimeSquarerootWayReturnValue } from "../src/primes_alternate_ways";


import { performance } from 'perf_hooks';

let iterations = 10000000;

console.log("Is Prime 83: ", isPrimeConventionalWay(83));
console.log("Is Prime 83: ", isPrimeSquarerootWay(83));
console.log("Is Prime 83: ", prime(83));
console.log("Is Prime 83: ", isPrimeSquarerootWayTwo(83));


console.log("Is Prime 169: ", isPrimeConventionalWay(169));
console.log("Is Prime 169: ", isPrimeSquarerootWay(169));
console.log("Is Prime 169: ", prime(169));
console.log("Is Prime 169: ", isPrimeSquarerootWayTwo(169));


console.log("Is Prime 100007: ", isPrimeConventionalWay(100007));
console.log("Is Prime 100007: ", isPrimeSquarerootWay(100007));
console.log("Is Prime 100007: ", prime(100007));
console.log("Is Prime 100007: ", isPrimeSquarerootWayTwo(100007));


console.log("Is Prime 300530164787: ", isPrimeConventionalWay(300530164787));
console.log("Is Prime 300530164787: ", isPrimeSquarerootWay(300530164787));
console.log("Is Prime 300530164787: ", prime(300530164787));
console.log("Is Prime 300530164787: ", isPrimeSquarerootWayTwo(300530164787));

function test_primecalculations(iterations: number): boolean {
    let count: number = 0;
    let arr: any[] = [];
    for (let i = 1; i <= iterations; i++) {
        let traditional: boolean = isPrimeConventionalWay(i), newer: boolean = prime(i);
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
console.log("Tests Passed: ", test_primecalculations(iterations));

