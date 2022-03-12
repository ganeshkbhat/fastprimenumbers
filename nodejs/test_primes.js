/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Performance Tests for Prime Numbers
*/

const { prime } = require("./primes");
const { isPrimeConventionalWay, isPrimeSquarerootWay, isPrimeSquarerootWayTwo } = require("./primes_alternate_ways")
let iterations = 10000000;

console.log("Is Prime 100007: ", isPrimeConventionalWay(100007))
console.log("Is Prime 100007: ", isPrimeSquarerootWay(100007))
console.log("Is Prime 100007: ", prime(100007))
console.log("Is Prime 100007: ", isPrimeSquarerootWayTwo(100007))

console.log("Is Prime 300530164787: ", isPrimeConventionalWay(300530164787))
console.log("Is Prime 300530164787: ", isPrimeSquarerootWay(300530164787))
console.log("Is Prime 300530164787: ", prime(300530164787))
console.log("Is Prime 300530164787: ", isPrimeSquarerootWayTwo(300530164787))

function test_primecalculations() {
    let count = 0;
    let arr = [];
    for (let i = 1; i <= iterations; i++) {
        let traditional = isPrimeConventionalWay(i), newer = prime(i);
        if (traditional == newer) {
            count = count + 1
        } else {
            arr.push([traditional, newer, i])
        }
    }
    console.log("[count, iterations, arr] list: ", count, iterations, arr)
    if (count === iterations) {
        return true;
    }
    return false;
}

console.log("Tests Passed: ", test_primecalculations())

