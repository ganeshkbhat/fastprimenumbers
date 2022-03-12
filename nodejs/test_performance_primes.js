/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Tests for Prime Numbers
*/

const { prime } = require("./primes");
const { isPrimeConventionalWay, isPrimeSquarerootWay, isPrimeSquarerootWayTwo } = require("./primes_alternate_ways");


let iterations = 10000000;
let isPrimeConventionalWayArr = [], isPrimeSquarerootWayArr = [], primeArr = [], isPrimeSquarerootWayTwoArr = []
let performance = require('perf_hooks').performance;

function tests_performance_isPrimeConventionalWayArr(){
    for (let i = 1; i <= iterations; i++){
        let start = performance.now()
        isPrimeConventionalWay(30000239)
        let end = performance.now()
        isPrimeConventionalWayArr.push(end - start)
    }
}
tests_performance_isPrimeConventionalWayArr()

function tests_performance_isPrimeSquarerootWayArr(){
    for (let i = 1; i <= iterations; i++){
        let start = performance.now()
        isPrimeSquarerootWay(30000239)
        let end = performance.now()
        isPrimeSquarerootWayArr.push(end - start)
    } 
}
tests_performance_isPrimeSquarerootWayArr()

function tests_performance_primeArr(){
    for (let i = 1; i <= iterations; i++){
        let start = performance.now()
        prime(30000239)
        let end = performance.now()
        primeArr.push(end - start)
    }
}
tests_performance_primeArr()

function tests_performance_isPrimeSquarerootWayTwoArr(){
    for (let i = 1; i <= iterations; i++){
        let start = performance.now()
        isPrimeSquarerootWayTwo(30000239)
        let end = performance.now()
        isPrimeSquarerootWayTwoArr.push(end - start)
    }
}  
tests_performance_isPrimeSquarerootWayTwoArr()  

function calculateAverage(array) {
    var total = 0;
    var count = 0;
    array.forEach(function(item, index) {
        total += item;
        count++;
    });
    return total / count;
}

console.log("isPrimeConventionalWayArr: ", calculateAverage(isPrimeConventionalWayArr))
console.log("isPrimeSquarerootWayArr: ", calculateAverage(isPrimeSquarerootWayArr))
console.log("primeArr: ", calculateAverage(primeArr))
console.log("isPrimeSquarerootWayTwoArr: ", calculateAverage(isPrimeSquarerootWayTwoArr))
