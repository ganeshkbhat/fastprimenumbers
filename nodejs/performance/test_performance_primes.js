/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Tests for Prime Numbers
*/

const { prime } = require("../src/node/primes.js");
const { isPrimeConventionalWay, isPrimeSquarerootWay, isPrimeSquarerootOptimised } = require("../src/node/primes_alternate.js");


let iterations = 10000000;
let performance = require('perf_hooks').performance;


function calculateAverage(array) {
    var total = 0;
    var count = 0;
    array.forEach(function(item, index) {
        total += item;
        count++;
    });
    return total / count;
}


function tests_performance_isPrimeConventionalWayArr(iterations){
    let isPrimeConventionalWaySum = 0;
    for (let i = 1; i <= iterations; i++){
        let start = performance.now();
        isPrimeConventionalWay(30000239);
        let end = performance.now();
        isPrimeConventionalWaySum += (end - start);
    }
    return isPrimeConventionalWaySum;
}
console.log( "isPrimeConventionalWay: ", tests_performance_isPrimeConventionalWayArr(iterations) );


function tests_performance_isPrimeSquarerootWayArr(iterations){
    let isPrimeSquarerootWaySum = 0;
    for (let i = 1; i <= iterations; i++){
        let start = performance.now();
        isPrimeSquarerootWay(30000239);
        let end = performance.now();
        isPrimeSquarerootWaySum += (end - start);
    } 
    return isPrimeSquarerootWaySum;
}
console.log( "isPrimeSquarerootWay: ", tests_performance_isPrimeSquarerootWayArr(iterations) );


function tests_performance_primeArr(iterations){
    let primeSum = 0;
    for (let i = 1; i <= iterations; i++){
        let start = performance.now();
        prime(30000239);
        let end = performance.now();
        primeSum += (end - start);
    }
    return primeSum;
}
console.log( "prime (SUGGESTED): ", tests_performance_primeArr(iterations) );


function tests_performance_isPrimeSquarerootOptimisedArr(iterations){
    let isPrimeSquarerootOptimisedSum = 0;
    for (let i = 1; i <= iterations; i++){
        let start = performance.now();
        isPrimeSquarerootOptimised(30000239);
        let end = performance.now();
        isPrimeSquarerootOptimisedSum += (end - start);
    }
    return isPrimeSquarerootOptimisedSum;
}  
console.log( "isPrimeSquarerootOptimised: ", tests_performance_isPrimeSquarerootOptimisedArr(iterations) );

