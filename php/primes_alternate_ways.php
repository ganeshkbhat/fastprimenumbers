<?php
/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Alternate ways for calculation of Prime Numbers
 * 
 * 
*/


/**
 * 
 * ALTERNATE WAY 
 * for Calculation of Prime Numbers
 *
 * @param {*} $n
 * @return {*} 
 * 
 */
function isPrimeConventionalWay($n) {
    $count = 0;
    if ($n <= 1) {
        return false;
    }
    // Check from 2 to n-1
    // Max iterations 99998 for $n == 100000 
    for ($i = 2; $i < $n; $i++) {
        // Counting Iterations
        $count += 1;
        if ($n % $i == 0) {
            // print("count: Prime Conventional way $count");
            return false;
        }
    }
    // print("count: Prime Conventional way $count");
    return true;
}

/**
 * 
 * ALTERNATE WAY 
 * for Calculation of Prime Numbers
 *
 * @param {*} $num
 * @return {*} 
 * 
 */
function isPrimeSquarerootWay($num) {
    $count = 0;
    // if not is_number num return false
    if ($num < 2) {
        // print("count: Prime Squareroot way $count")
        return false;
    }

    $s = sqrt($num);
    for ($i = 2; $i <= $s; $i++) {
        // Counting Iterations
        $count += 1;
        if ($num % $i === 0) {
            // print("count: Prime Squareroot way $count");
            return false;
        }
    }
    // print("count: Prime Squareroot way $count");
    return true;
}

/**
 * 
 * ALTERNATE WAY 
 * for Calculation of Prime Numbers
 *
 * @param {*} $num
 * @return {*} 
 * 
 */
function isPrimeSquarerootWayTwo($num) {
    $s = sqrt($num);
    for ($i = 2; $i <= $s; $i++) {
        if ($num % $i === 0) {
            return false;
        }
    }
    return $num > 1;
}

