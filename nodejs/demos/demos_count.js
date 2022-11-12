
const primes = require("../index");

console.log(
    primes.count,
    "primes count 3 after: 11",
    primes.count.alternates, primes.count.alternates(11, 3),
    primes.count.alternatesOptimized, primes.count.alternatesOptimized(11, 3),
    primes.count.fast, primes.count.fast(11, 3),
    primes.count.fastOptimized, primes.count.fastOptimized(11, 3)
)
