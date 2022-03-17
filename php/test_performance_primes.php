<?php
/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Tests for Prime Numbers
*/

require_once("./primes.php");
require_once("./primes_alternate_ways.php");


$iterations = 10000000;

// For Average (removing this due to memory related issues in php during calculation of 10 Million records)
// Average calculation is being used for all other languages

function calculateAverage($arr) {
    return array_sum($arr) / count($arr);
}

function tests_performance_isPrimeConventionalWayArr(){
    global $iterations;
    global $isPrimeConventionalWay;
    $isPrimeConventionalWayArr = [];
    $isPrimeConventionalWaySum = 0;
    for ($i = 1; $i <= $iterations; $i++){
        $start = microtime(true);
        isPrimeConventionalWay(30000239);
        $end = microtime(true);
        // array_push($isPrimeConventionalWayArr, $time);
        $isPrimeConventionalWaySum = $isPrimeConventionalWaySum + ($end - $start);
    }
    return $isPrimeConventionalWaySum;
}

// $result = calculateAverage($isPrimeConventionalWayArr);
// echo "isPrimeConventionalWayArr: ", $result, "\n";
// $isPrimeConventionalWayArr = [];
echo "isPrimeConventionalWaySum: ", tests_performance_isPrimeConventionalWayArr(), "\n";
clearstatcache();


function tests_performance_isPrimeSquarerootWayArr(){
    global $iterations;
    global $isPrimeSquarerootWay;
    $isPrimeSquarerootWayArr = [];
    $isPrimeSquarerootWaySum = 0;
    for ($i = 1; $i <= $iterations; $i++){
        $start = microtime(true);
        isPrimeSquarerootWay(30000239);
        $end = microtime(true);
        // array_push($isPrimeSquarerootWayArr, $time);
        $isPrimeSquarerootWaySum = $isPrimeSquarerootWaySum + ($end - $start);
    } 
    return $isPrimeSquarerootWaySum;
}

// $result = calculateAverage($isPrimeSquarerootWayArr);
// echo "isPrimeSquarerootWayArr: ", $result, "\n";
// $isPrimeSquarerootWayArr = [];
echo "isPrimeSquarerootWaySum: ", tests_performance_isPrimeSquarerootWayArr(), "\n";
clearstatcache();


function tests_performance_isPrimeSquarerootWayTwoArr(){
    global $iterations;
    global $isPrimeSquarerootWayTwo;
    $isPrimeSquarerootWayTwoArr = [];
    $isPrimeSquarerootWayTwoSum = 0;
    for ($i = 1; $i <= $iterations; $i++){
        $start = microtime(true);
        isPrimeSquarerootWayTwo(30000239);
        $end = microtime(true);
        // array_push($isPrimeSquarerootWayTwoArr, $time);
        $isPrimeSquarerootWayTwoSum = $isPrimeSquarerootWayTwoSum + ($end - $start);
    }
    return $isPrimeSquarerootWayTwoSum;
}

// $result = calculateAverage($isPrimeSquarerootWayTwoArr);
// echo "isPrimeSquarerootWayTwoArr: ", $result, "\n";
// $isPrimeSquarerootWayTwoArr = [];
echo "isPrimeSquarerootWayTwoSum: ", tests_performance_isPrimeSquarerootWayTwoArr(), "\n";
clearstatcache();


function tests_performance_primeArr(){
    global $iterations;
    global $prime;
    $primeArr = [];
    $primeSum = 0;
    for ($i = 1; $i <= $iterations; $i++){
        $start = microtime(true);
        prime(30000239);
        $end = microtime(true);
        // array_push($primeArr, $time);
        $primeSum = $primeSum + ($end - $start);
    }
    return $primeSum;
}

// $result = calculateAverage($primeArr);
// echo "primeArr: ", $result, "\n";
// $primeArr = [];
echo "primeSum: ", tests_performance_primeArr(), "\n";
clearstatcache();

