
const primes = require("../index.js");

console.log("primes.utils.nextPrime(10): ", primes.utils.nextPrime(10))
console.log("primes.utils.nextPrime(11): ", primes.utils.nextPrime(11))
console.log("primes.utils.nextPrime(10000000): ", primes.utils.nextPrime(10000000))
// console.log("primes.utils.nextPrime(): ", primes.utils.nextPrime())
console.log("primes.utils.nextPrimeSets(10, 2): ", primes.utils.nextPrimeSets(10, 2))
console.log("primes.utils.nextPrimeSets(7, 2): ", primes.utils.nextPrimeSets(7, 2))
console.log("primes.utils.nextPrimeSets(10000000, 4): ", primes.utils.nextPrimeSets(10000000, 4))
// console.log("primes.utils.nextPrimeSets(): ", primes.utils.nextPrimeSets())
console.log("primes.utils.previousPrime(10): ", primes.utils.previousPrime(10))
console.log("primes.utils.previousPrime(11): ", primes.utils.previousPrime(11))
console.log("primes.utils.previousPrime(10000000): ", primes.utils.previousPrime(10000000))
// console.log("primes.utils.previousPrime(): ", primes.utils.previousPrime())
console.log("primes.utils.previousPrimeSets(10, 5): ", primes.utils.previousPrimeSets(10, 5))
console.log("primes.utils.previousPrimeSets(11, 5): ", primes.utils.previousPrimeSets(11, 5))
console.log("primes.utils.previousPrimeSets(10000000, 4): ", primes.utils.previousPrimeSets(10000000, 4))
// console.log("primes.utils.previousPrimeSets(): ", primes.utils.previousPrimeSets())
