
const primes = require("../index");

console.log(primes.random.get());
console.log(primes.random.get(1, 100));
console.log(primes.random.get(13, 25));

console.log(primes.random.counts(0, 2));
console.log(primes.random.counts(0, 5));

console.log(primes.random.range(13, 25));
console.log(primes.random.range(0, 25));

console.log(primes.random.prime(5));
console.log(primes.random.prime(2));
console.log(primes.random.prime(8));


console.log(primes.random.primesArray(5, 2));
console.log(primes.random.primesArray(5, 6));

