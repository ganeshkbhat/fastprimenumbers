/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Tests for Prime Numbers
*/

const { prime } = require("./primes");
const { isPrimeConventionalWay, isPrimeSquarerootWay, isPrimeSquarerootWayTwo } = require("./primes_alternate_ways");


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


function tests_performance_isPrimeSquarerootWayTwoArr(iterations){
    let isPrimeSquarerootWayTwoSum = 0;
    for (let i = 1; i <= iterations; i++){
        let start = performance.now();
        isPrimeSquarerootWayTwo(30000239);
        let end = performance.now();
        isPrimeSquarerootWayTwoSum += (end - start);
    }
    return isPrimeSquarerootWayTwoSum;
}  
console.log( "isPrimeSquarerootWayTwo: ", tests_performance_isPrimeSquarerootWayTwoArr(iterations) );


