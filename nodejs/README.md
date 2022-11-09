# Fast Prime Calculations


Fastest Prime Number Calculation (checks) logic and `This probably is the BEST solution in the internet as of today 11th March 2022`


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
        - Access client (browser code) using `./node_modules/src/client/primes.js` and `node_modules/src/client/primes.min.js`

```


// Usage API for node.js

require("fast-prime").fast
require("fast-prime").prime
require("fast-prime").recursive
require("fast-prime").sqrootExpressive
require("fast-prime").sqroot


```


```


// Usage API for client

primes().primes
primes().recursive
primes().sqrootExpressive
primes().sqroot
primes().isPrime
primes().sum
primes().range
primes().count
primes().factorial



```

##### Python
![Python Codebase](https://github.com/ganeshkbhat/fastprimecalculations/blob/main/Fastest_Prime_Number_Calculations_codebase_python.jpeg)

Stack overflow Link for Calculations

- [Javascript Codebase](https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript/71437628?noredirect=1#comment126271353_71437628)

- [Python Codebase](https://stackoverflow.com/questions/1801391/how-to-create-the-most-compact-mapping-n-%e2%86%92-isprimen-up-to-a-limit-n/71438297#71438297)


### LICENSE

[`PROPRIETARY LICENSE AGREEMENT ONLY`](https://github.com/ganeshkbhat/fastprimecalculations/blob/main/LICENSE)


### TODO

- Adding following APIs to Javascript, Typescript, Python, Java
- Adding all APIs to Go, TS (Consider C#, Rust, C, Cpp)

```

primes().isPrime
primes().sum
primes().range
primes().count
primes().factorial

```

