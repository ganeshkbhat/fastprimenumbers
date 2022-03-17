/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Tests for Prime Numbers
*/

import { prime } from './primes';
import { isPrimeConventionalWay, isPrimeSquarerootWay, isPrimeSquarerootWayTwo } from './primes_alternate_ways';
import { performance } from 'perf_hooks';


let iterations = 10000000;

function calculateAverage(array: number[]): number {
    var total: number = 0;
    var count: number = 0;
    array.forEach(function (item: number, index: number) {
        total += item;
        count++;
    });
    return total / count;
}


function tests_performance_isPrimeConventionalWayArr(iterations: number): number {
    let isPrimeConventionalWaySum: number = 0;
    for (let i: number = 1; i <= iterations; i++) {
        let start: number = performance.now();
        isPrimeConventionalWay(30000239);
        let end: number = performance.now();
        isPrimeConventionalWaySum += (end - start);
    }
    return isPrimeConventionalWaySum;
}
console.log("isPrimeConventionalWay: ", tests_performance_isPrimeConventionalWayArr(iterations));


function tests_performance_isPrimeSquarerootWayArr(iterations: number): number {
    let isPrimeSquarerootWaySum: number = 0;
    for (let i: number = 1; i <= iterations; i++) {
        let start: number = performance.now();
        isPrimeSquarerootWay(30000239);
        let end: number = performance.now();
        isPrimeSquarerootWaySum += (end - start);
    }
    return isPrimeSquarerootWaySum;
}
console.log("isPrimeSquarerootWay: ", tests_performance_isPrimeSquarerootWayArr(iterations));


function tests_performance_primeArr(iterations: number): number {
    let primeSum: number = 0;
    for (let i: number = 1; i <= iterations; i++) {
        let start: number = performance.now();
        prime(30000239);
        let end: number = performance.now();
        primeSum += (end - start);
    }
    return primeSum;
}
console.log("prime (SUGGESTED): ", tests_performance_primeArr(iterations));


function tests_performance_isPrimeSquarerootWayTwoArr(iterations: number): number {
    let isPrimeSquarerootWayTwoSum: number = 0;
    for (let i: number = 1; i <= iterations; i++) {
        let start: number = performance.now();
        isPrimeSquarerootWayTwo(30000239);
        let end: number = performance.now();
        isPrimeSquarerootWayTwoSum += (end - start);
    }
    return isPrimeSquarerootWayTwoSum;
}
console.log("isPrimeSquarerootWayTwo: ", tests_performance_isPrimeSquarerootWayTwoArr(iterations));
