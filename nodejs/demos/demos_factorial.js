
const primes = require("../index");

console.log(
    primes.factorial,
    "factorial primes between: 11 - 13",
    primes.factorial.alternatesRange, primes.factorial.alternatesRange(11, 13),
    primes.factorial.alternatesRangeOptimized, primes.factorial.alternatesRangeOptimized(11, 13),
    primes.factorial.alternatesCount, primes.factorial.alternatesCount(11, 2),
    primes.factorial.alternatesCountOptimized, primes.factorial.alternatesCountOptimized(11, 2),
    primes.factorial.fastCount, primes.factorial.fastCount(11, 2),
    primes.factorial.fastCountOptimized, primes.factorial.fastCountOptimized(11, 2),
    primes.factorial.fastRange, primes.factorial.fastRange(11, 13),
    primes.factorial.fastRangeOptimized, primes.factorial.fastRangeOptimized(11, 13)
)

