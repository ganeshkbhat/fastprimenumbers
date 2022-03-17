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
    let isPrimeConventionalWayArr: number[] = [];
    for (let i: number = 1; i <= iterations; i++) {
        let start: number = performance.now();
        isPrimeConventionalWay(30000239);
        let end: number = performance.now();
        isPrimeConventionalWayArr.push(end - start);
    }
    return calculateAverage(isPrimeConventionalWayArr);
}
console.log("isPrimeConventionalWay: ", tests_performance_isPrimeConventionalWayArr(iterations));


function tests_performance_isPrimeSquarerootWayArr(iterations: number): number {
    let isPrimeSquarerootWayArr: number[] = [];
    for (let i: number = 1; i <= iterations; i++) {
        let start: number = performance.now();
        isPrimeSquarerootWay(30000239);
        let end: number = performance.now();
        isPrimeSquarerootWayArr.push(end - start);
    }
    return calculateAverage(isPrimeSquarerootWayArr);
}
console.log("isPrimeSquarerootWay: ", tests_performance_isPrimeSquarerootWayArr(iterations));


function tests_performance_primeArr(iterations: number): number {
    let primeArr: number[] = [];
    for (let i: number = 1; i <= iterations; i++) {
        let start: number = performance.now();
        prime(30000239);
        let end: number = performance.now();
        primeArr.push(end - start);
    }
    return calculateAverage(primeArr);
}
console.log("prime (SUGGESTED): ", tests_performance_primeArr(iterations));


function tests_performance_isPrimeSquarerootWayTwoArr(iterations: number): number {
    let isPrimeSquarerootWayTwoArr: number[] = [];
    for (let i: number = 1; i <= iterations; i++) {
        let start: number = performance.now();
        isPrimeSquarerootWayTwo(30000239);
        let end: number = performance.now();
        isPrimeSquarerootWayTwoArr.push(end - start);
    }
    return calculateAverage(isPrimeSquarerootWayTwoArr);
}
console.log("isPrimeSquarerootWayTwo: ", tests_performance_isPrimeSquarerootWayTwoArr(iterations));
