
const primes = require("../index");

console.log(
    primes.sum,
    "sum primes between: 11 - 13",
    primes.sum.alternatesRange, primes.sum.alternatesRange(11, 13),
    primes.sum.alternatesRangeOptimized, primes.sum.alternatesRangeOptimized(11, 13),
    primes.sum.alternatesCount, primes.sum.alternatesCount(11, 2),
    primes.sum.alternatesCountOptimized, primes.sum.alternatesCountOptimized(11, 2),
    primes.sum.fastCount, primes.sum.fastCount(11, 2),
    primes.sum.fastCountOptimized, primes.sum.fastCountOptimized(11, 2),
    primes.sum.fastRange, primes.sum.fastRange(11, 13),
    primes.sum.fastRangeOptimized, primes.sum.fastRangeOptimized(11, 13)
)

