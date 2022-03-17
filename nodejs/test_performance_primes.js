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


function tests_performance_isPrimeConventionalWayArr(){
    let isPrimeConventionalWayArr = [];
    for (let i = 1; i <= iterations; i++){
        let start = performance.now();
        isPrimeConventionalWay(30000239);
        let end = performance.now();
        isPrimeConventionalWayArr.push(end - start);
    }
    return calculateAverage(isPrimeConventionalWayArr);
}
console.log( "isPrimeConventionalWay: ", tests_performance_isPrimeConventionalWayArr() );


function tests_performance_isPrimeSquarerootWayArr(){
    let isPrimeSquarerootWayArr = [];
    for (let i = 1; i <= iterations; i++){
        let start = performance.now();
        isPrimeSquarerootWay(30000239);
        let end = performance.now();
        isPrimeSquarerootWayArr.push(end - start);
    } 
    return calculateAverage(isPrimeSquarerootWayArr);
}
console.log( "isPrimeSquarerootWay: ", tests_performance_isPrimeSquarerootWayArr() );


function tests_performance_primeArr(){
    let primeArr = [];
    for (let i = 1; i <= iterations; i++){
        let start = performance.now();
        prime(30000239);
        let end = performance.now();
        primeArr.push(end - start);
    }
    return calculateAverage(primeArr);
}
console.log( "prime (SUGGESTED): ", tests_performance_primeArr() );


function tests_performance_isPrimeSquarerootWayTwoArr(){
    let isPrimeSquarerootWayTwoArr = [];
    for (let i = 1; i <= iterations; i++){
        let start = performance.now();
        isPrimeSquarerootWayTwo(30000239);
        let end = performance.now();
        isPrimeSquarerootWayTwoArr.push(end - start);
    }
    return calculateAverage(isPrimeSquarerootWayTwoArr);
}  
console.log( "isPrimeSquarerootWayTwo: ", tests_performance_isPrimeSquarerootWayTwoArr() );


