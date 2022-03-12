/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Functions and Alternate ways for calculation of Prime Numbers
 * 
 * ** prime(n) ** is the Recommended Way for calculation checks of prime numbers
 * 
*/


/**
 * 
 * RECOMMENDED WAY
 * for Calculation of Prime Numbers
 * 
 * ** FASTEST ** Calculation checks for prime numbers **
 *
 * @param {*} n
 * @return {*} 
 * 
 */
 function prime(n) {
    count = 0;
    if ((n === 2 || n === 3 || n === 5 || n === 7)) {
        // console.log("count: Prime Unconventional way", count);
        return true;
    }
    if (n === 1 || ((n > 7) && (n % 5 == 0 || n % 7 == 0 || n % 2 == 0 || n % 3 == 0))) {
        // console.log("count: Prime Unconventional way", count);
        return false;
    }
    if ((Number.isInteger(((n - 1) / 6))) || (Number.isInteger((n + 1) / 6))) {
        for (let i = 1; i < n; i++) {
            // Counting Iterations
            count += 1;
            let factorsix = (i * 6);
            let fivebase = n / (5 + factorsix), sevenbase = n / (7 + factorsix);
            if (((fivebase > 1) && Number.isInteger(fivebase)) || ((sevenbase > 1) && (Number.isInteger(sevenbase)))) {
                // console.log("count: Prime Unconventional way", count);
                return false;
            }
            if (factorsix > n) {
                // Max iterations 16666 for n == 100000 instead of 100000
                break;
            }
        }
        // console.log("count: Prime Unconventional way", count)
        return true;
    }
    // console.log("count: Prime Unconventional way", count)
    return false;
}


/**
 * 
 * ALTERNATE WAY 
 * for Calculation of Prime Numbers
 *
 * @param {*} n
 * @return {*} 
 * 
 */
function isPrimeConventionalWay(n) {
    count = 0;
    if (n <= 1)
        return false;
    // Check from 2 to n-1
    // Max iterations 99998 for n == 100000 
    for (let i = 2; i < n; i++) {
        // Counting Iterations
        count += 1;
        if (n % i == 0) {
            // console.log("count: Prime Conventional way", count);
            return false;
        }
    }
    // console.log("count: Prime Conventional way", count);
    return true;
}

/**
 * 
 * ALTERNATE WAY 
 * for Calculation of Prime Numbers
 *
 * @param {*} num
 * @return {*} 
 * 
 */
function isPrimeSquarerootWay(num) {
    count = 0;
    // if not is_number num return false
    if (num < 2) {
        // console.log("count: Prime Squareroot way", count)
        return false;
    }

    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        // Counting Iterations
        count += 1;
        if (num % i === 0) {
            // console.log("count: Prime Squareroot way", count);
            return false;
        }
    }
    // console.log("count: Prime Squareroot way", count);
    return true;
}

/**
 * 
 * ALTERNATE WAY 
 * for Calculation of Prime Numbers
 *
 * @param {*} num
 * @return {*} 
 * 
 */
const isPrimeSquarerootWayTwo = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

console.log("Is Prime 100007: ", isPrimeConventionalWay(100007))
console.log("Is Prime 100007: ", isPrimeSquarerootWay(100007))
console.log("Is Prime 100007: ", prime(100007))
console.log("Is Prime 100007: ", isPrimeSquarerootWayTwo(100007))

console.log("Is Prime 300530164787: ", isPrimeConventionalWay(300530164787))
console.log("Is Prime 300530164787: ", isPrimeSquarerootWay(300530164787))
console.log("Is Prime 300530164787: ", prime(300530164787))
console.log("Is Prime 300530164787: ", isPrimeSquarerootWayTwo(300530164787))


let iterations = 10000000;
let isPrimeConventionalWayArr = [], isPrimeSquarerootWayArr = [], primeArr = [], isPrimeSquarerootWayTwoArr = []
let performance = window.performance;


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

function tests_performance_isPrimeConventionalWayArr(){
    for (let i = 1; i <= iterations; i++){
        let start = performance.now()
        isPrimeConventionalWay(30000239)
        let end = performance.now()
        isPrimeConventionalWayArr.push(end - start)
    }
}
tests_performance_isPrimeConventionalWayArr()

function tests_performance_isPrimeSquarerootWayArr(){
    for (let i = 1; i <= iterations; i++){
        let start = performance.now()
        isPrimeSquarerootWay(30000239)
        let end = performance.now()
        isPrimeSquarerootWayArr.push(end - start)
    } 
}
tests_performance_isPrimeSquarerootWayArr()

function tests_performance_primeArr(){
    for (let i = 1; i <= iterations; i++){
        let start = performance.now()
        prime(30000239)
        let end = performance.now()
        primeArr.push(end - start)
    }
}
tests_performance_primeArr()

function tests_performance_isPrimeSquarerootWayTwoArr(){
    for (let i = 1; i <= iterations; i++){
        let start = performance.now()
        isPrimeSquarerootWayTwo(30000239)
        let end = performance.now()
        isPrimeSquarerootWayTwoArr.push(end - start)
    }
}  
tests_performance_isPrimeSquarerootWayTwoArr()  


function calculateAverage(array) {
    var total = 0;
    var count = 0;
    array.forEach(function(item, index) {
        total += item;
        count++;
    });
    return total / count;
}

console.log("isPrimeConventionalWayArr: ", calculateAverage(isPrimeConventionalWayArr))
console.log("isPrimeSquarerootWayArr: ", calculateAverage(isPrimeSquarerootWayArr))
console.log("primeArr: ", calculateAverage(primeArr))
console.log("isPrimeSquarerootWayTwoArr: ", calculateAverage(isPrimeSquarerootWayTwoArr))
