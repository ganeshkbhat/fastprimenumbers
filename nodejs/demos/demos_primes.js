
const primes = require("../index");

console.log(
    "isprime: 11",
    primes.fast, primes.fast(11),
    primes.prime, primes.prime(11),
    primes.sqroot, primes.sqroot(11),
    primes.sqrootOptimised, primes.sqrootOptimised(11)
)

console.log(
    "isprime: 13",
    primes.fast, primes.fast(13),
    primes.prime, primes.prime(13),
    primes.sqroot, primes.sqroot(13),
    primes.sqrootOptimised, primes.sqrootOptimised(13)
)

console.log(
    "isprime: 10",
    primes.fast, primes.fast(10),
    primes.prime, primes.prime(10),
    primes.sqroot, primes.sqroot(10),
    primes.sqrootOptimised, primes.sqrootOptimised(10)
)

