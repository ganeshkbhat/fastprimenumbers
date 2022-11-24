# Fast Prime Calculations

Fastest Prime Number Calculation logic (checks, random generator, prime range generator, primes count generator, summation of primes, factorial of primes, primes generator)

`This probably is the BEST solution in the internet as of today 11th March 2022`

This same code can be applied in any languages like `Python`, `Go` Lang, `Java`, `PHP`, `Node.js`, `Javascript`, `C`, `C++`, `.NET`, `Rust`, etc with the same logic and have performance benefits. It is pretty fast based on the number of iterations needed. Performance time checks were not consistent across languages (in my local system - to be direct about wordings). I have not seen this implemented before and has been indigenously done. Feedback and usage is welcome.

`Max iterations 16666 for n == 100000 instead of 100000 of conventional way`. The `iterations` counts for different ways for Prime number check 100007 can be seen as follows:

        count: Prime Conventional way for  83 is  81
        Is Prime 83 isPrimeConventionalWay:  True

        count: Prime Squareroot way  83 is  8
        Is Prime 83 isPrimeSquarerootWay:  True

        count: Prime Unconventional way for  83 is  14
        Is Prime 83 prime (SUGGESTED):  True

        count: Prime AKS - Mersenne primes - Fermat's little theorem or whatever way  83 is  2
        Is Prime 83 isprimeAKSWay:  True

        count: Prime Conventional way for  169 is  12
        Is Prime 169 isPrimeConventionalWay:  False

        count: Prime Squareroot way  169 is  12
        Is Prime 169 isPrimeSquarerootWay:  False

        count: Prime Unconventional way for  169 is  1
        Is Prime 169 prime (SUGGESTED):  False

        count: Prime AKS - Mersenne primes - Fermat's little theorem or whatever way  169 is  4
        Is Prime 169 isprimeAKSWay:  False

        count: Prime Conventional way for  100007 is  96
        Is Prime 100007 isPrimeConventionalWay:  False

        count: Prime Squareroot way  100007 is  96
        Is Prime 100007 isPrimeSquarerootWay:  False

        count: Prime Unconventional way for  100007 is  15
        Is Prime 100007 prime (SUGGESTED):  False

        count: Prime AKS - Mersenne primes - Fermat's little theorem or whatever way  100007 is  32
        Is Prime 100007 isprimeAKSWay:  False

        count: Prime Conventional way for  300530164787 is  1180
        Is Prime 300530164787 isPrimeConventionalWay:  False

        count: Prime Squareroot way  300530164787 is  1180
        Is Prime 300530164787 isPrimeSquarerootWay:  False

        count: Prime Unconventional way for  300530164787 is  196
        Is Prime 300530164787 prime (SUGGESTED):  False

        count: Prime AKS - Mersenne primes - Fermat's little theorem or whatever way  300530164787 is  393
        Is Prime 300530164787 isprimeAKSWay:  False

### Code Base

##### Javascript

![Javascript Codebase](https://github.com/ganeshkbhat/fastprimecalculations/blob/main/Fastest_Prime_Number_Calculations_codebase_javascript.jpeg)

- Access Node code using require("fast-prime")
- Access client (browser code) for just basic prime checks using `./node_modules/src/client/primes.js` and `node_modules/src/client/primes.min.js`
- Access client (browser code) using `./node_modules/src/client/primes.all.js` and `node_modules/src/client/primes.all.min.js`
- Access client (browser code) using cdn `https://unpkg.com/fast-prime@{version}/src/client/primes.all.js`. Example `https://unpkg.com/fast-prime@0.0.64/src/client/primes.all.min.js`
- Access client (browser code) smaller non optimised size using `./node_modules/src/client/primes.ip.js` and `node_modules/src/client/primes.ip.min.js`
- Access client (browser code) smaller non optimised using cdn `https://unpkg.com/fast-prime@{version}/src/client/primes.ip.js`. Example `https://unpkg.com/fast-prime@0.0.64/src/client/primes.ip.min.js`
- [Demos](https://github.com/ganeshkbhat/fastprimenumbers/tree/main/nodejs/demos)

### Features of the Library

- Different ways of prime number checks (isprime)

        - Fast prime (Recommended innovative function)

        - Iterative/Recursive (Conventional iterative way)

        - SquareRoot (AKS - Mersenne primes - Fermat's little theorem)

- Different ways of getting primes (using all above different ways)

        - Fetch prime between two number range (min - max)

        - Fetch counts (numbers) of prime starting from any number

        - Random prime number generator

        - Optimized function with pre-calculated stored values (< 10000, < 100000, < 1000000)

                - Stored value calculation Failover to JIT calculation using above formulaes

- Different ways of getting summation of primes (using all above different ways)

        - Fetch summation of prime between two number range (min - max)

        - Fetch summation of counts (numbers) of prime starting from any number

        - Fetch summation of Custom array provided [TODO]

        - Fetch factorial - Optimized function with pre-calculated stored values (< 10000, < 100000, < 1000000)

                - Stored value calculation Failover to JIT calculation using above formulaes

- Different ways of getting factorial of primes (using all above different ways)

        - Fetch factorial of prime between two number range (min - max)

        - Fetch factorial of counts (numbers) of prime starting from any number

        - Fetch factorial of Custom array provided [TODO]

        - Fetch factorial - Optimized function with pre-calculated stored values (< 10000, < 100000, < 1000000)

                - Stored value calculation Failover to JIT calculation using above formulaes

```


// Usage API for node.js
// Check demos folder for usage in the github repos
// https://github.com/ganeshkbhat/fastprimenumbers/tree/main/nodejs/demos

require("fast-prime").fast // Recommended or Suggested way
require("fast-prime").prime // Recommended or Suggested way
require("fast-prime").recursive
require("fast-prime").sqrootExpressive
require("fast-prime").sqroot


require("fast-prime").count.alternateWays
require("fast-prime").count.alternateWaysOptimized (async - promise)
require("fast-prime").count.fast
require("fast-prime").count.fastOptimized (async - promise)

require("fast-prime").range.alternateWays
require("fast-prime").range.alternateWaysOptimized (async - promise)
require("fast-prime").range.fast
require("fast-prime").range.fastOptimized (async - promise)

require("fast-prime").sum.alternateWaysCount
require("fast-prime").sum.alternateWaysCountOptimized (async - promise)
require("fast-prime").sum.alternateWaysRange
require("fast-prime").sum.alternateWaysRangeOptimized (async - promise)
require("fast-prime").sum.fastCount
require("fast-prime").sum.fastCountOptimized (async - promise)
require("fast-prime").sum.fastRange
require("fast-prime").sum.fastRangeOptimized (async - promise)

require("fast-prime").factorial.factorial
require("fast-prime").factorial.alternateWaysCount
require("fast-prime").factorial.alternateWaysCountOptimized (async - promise)
require("fast-prime").factorial.alternateWaysRange
require("fast-prime").factorial.alternateWaysRangeOptimized (async - promise)
require("fast-prime").factorial.fastCount
require("fast-prime").factorial.fastCountOptimized (async - promise)
require("fast-prime").factorial.fastRange
require("fast-prime").factorial.fastRangeOptimized (async - promise)


```

```


// Usage API for client
// Check demos folder for usage in the github repos
// https://github.com/ganeshkbhat/fastprimenumbers/tree/main/nodejs/demos


primes().fast // Recommended or Suggested way
primes().primes // Recommended or Suggested way
primes().recursive
primes().sqrootExpressive
primes().sqroot


primesCount().alternateWays
primesCount().alternateWaysOptimized (async - promise)
primesCount().fast
primesCount().fastOptimized (async - promise)

primesRange().alternateWays
primesRange().alternateWaysOptimized (async - promise)
primesRange().fast
primesRange().fastOptimized (async - promise)

primesSum().alternateWaysCount
primesSum().alternateWaysCountOptimized (async - promise)
primesSum().alternateWaysRange
primesSum().alternateWaysRangeOptimized (async - promise)
primesSum().fastCount
primesSum().fastCountOptimized (async - promise)
primesSum().fastRange
primesSum().fastRangeOptimized (async - promise)

primesFactorial().factorial
primesFactorial().alternateWaysCount
primesFactorial().alternateWaysCountOptimized (async - promise)
primesFactorial().alternateWaysRange
primesFactorial().alternateWaysRangeOptimized (async - promise)
primesFactorial().fastCount
primesFactorial().fastCountOptimized (async - promise)
primesFactorial().fastRange
primesFactorial().fastRangeOptimized (async - promise)


```

##### Python

![Python Codebase](https://github.com/ganeshkbhat/fastprimecalculations/blob/main/Fastest_Prime_Number_Calculations_codebase_python.jpeg)

Stack overflow Link for Calculations

- [Javascript Codebase](https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript/71437628?noredirect=1#comment126271353_71437628)

- [Python Codebase](https://stackoverflow.com/questions/1801391/how-to-create-the-most-compact-mapping-n-%e2%86%92-isprimen-up-to-a-limit-n/71438297#71438297)

### LICENSE

Custom Crediting License [`PROPRIETARY LICENSE AGREEMENT ONLY`](https://github.com/ganeshkbhat/fastprimecalculations/blob/main/LICENSE)

### TODO

- [D] Add summation of array of primes using (range, count)
- Add summation of array of primes using custom prime numbers
- [D] Add factorial of array of primes using (range, count)
- Add factorial of array of primes using custom prime numbers
- Consider adding random prime generator
- Consider adding generator using generator functions
- [D] Consider adding fetching primes from remote api for stored primes
- Consider adding support for very large prime numbers (checks, range, count, sum, factorial, random) and related generators
- Consider adding support for very large random prime generator
- Adding following (all) APIs to Javascript, Typescript, Python, Java
- Adding all APIs to Go, TS (Consider C#, Rust, C, Cpp)
- Consider adding function to library

```

const primes = require("fast-primes")
primes().isPrime
primes().sum
primes().range
primes().count
primes().factorial

```
