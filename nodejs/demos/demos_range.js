
const primes = require("../index");

console.log(
    primes.range,
    "range primes between: 11 - 13",
    primes.range.alternates, primes.range.alternates(11, 13),
    primes.range.alternatesOptimized, primes.range.alternatesOptimized(11, 13),
    primes.range.fast, primes.range.fast(11, 13),
    primes.range.fastOptimized, primes.range.fastOptimized(11, 13)
)
