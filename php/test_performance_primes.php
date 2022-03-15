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
$isPrimeConventionalWayArr = [];
$isPrimeSquarerootWayArr = [];
$primeArr = [];
$isPrimeSquarerootWayTwoArr = [];

$isPrimeConventionalWaySum = 0;
$isPrimeSquarerootWaySum = 0;
$primeSum = 0;
$isPrimeSquarerootWayTwoSum = 0;

function calculateAverage($arr) {
    return array_sum($arr) / count($arr);
}

function tests_performance_isPrimeConventionalWayArr(){
    global $iterations;
    global $isPrimeConventionalWay;
    global $isPrimeConventionalWayArr;
    global $isPrimeConventionalWaySum;
    for ($i = 1; $i <= $iterations; $i++){
        $start = microtime(true);
        isPrimeConventionalWay(30000239);
        $end = microtime(true);
        // array_push($isPrimeConventionalWayArr, $time);
        $isPrimeConventionalWaySum = $isPrimeConventionalWaySum + ($end - $start);
    }
}
tests_performance_isPrimeConventionalWayArr();

// $result = calculateAverage($isPrimeConventionalWayArr);
// echo "isPrimeConventionalWayArr: ", $result, "\n";
// $isPrimeConventionalWayArr = [];
echo "isPrimeConventionalWaySum: ", $isPrimeConventionalWaySum, "\n";
clearstatcache();


function tests_performance_isPrimeSquarerootWayArr(){
    global $iterations;
    global $isPrimeSquarerootWay;
    global $isPrimeSquarerootWayArr;
    global $isPrimeSquarerootWaySum;
    for ($i = 1; $i <= $iterations; $i++){
        $start = microtime(true);
        isPrimeSquarerootWay(30000239);
        $end = microtime(true);
        // array_push($isPrimeSquarerootWayArr, $time);
        $isPrimeSquarerootWaySum = $isPrimeSquarerootWaySum + ($end - $start);
    } 
}
tests_performance_isPrimeSquarerootWayArr();

// $result = calculateAverage($isPrimeSquarerootWayArr);
// echo "isPrimeSquarerootWayArr: ", $result, "\n";
// $isPrimeSquarerootWayArr = [];
echo "isPrimeSquarerootWaySum: ", $isPrimeSquarerootWaySum, "\n";
clearstatcache();


function tests_performance_isPrimeSquarerootWayTwoArr(){
    global $iterations;
    global $isPrimeSquarerootWayTwo;
    global $isPrimeSquarerootWayTwoArr;
    global $isPrimeSquarerootWayTwoSum;
    for ($i = 1; $i <= $iterations; $i++){
        $start = microtime(true);
        isPrimeSquarerootWayTwo(30000239);
        $end = microtime(true);
        // array_push($isPrimeSquarerootWayTwoArr, $time);
        $isPrimeSquarerootWayTwoSum = $isPrimeSquarerootWayTwoSum + ($end - $start);
    }
}
tests_performance_isPrimeSquarerootWayTwoArr();

// $result = calculateAverage($isPrimeSquarerootWayTwoArr);
// echo "isPrimeSquarerootWayTwoArr: ", $result, "\n";
// $isPrimeSquarerootWayTwoArr = [];
echo "isPrimeSquarerootWayTwoSum: ", $isPrimeSquarerootWayTwoSum, "\n";
clearstatcache();


function tests_performance_primeArr(){
    global $iterations;
    global $prime;
    global $primeArr;
    global $primeSum;
    for ($i = 1; $i <= $iterations; $i++){
        $start = microtime(true);
        prime(30000239);
        $end = microtime(true);
        // array_push($primeArr, $time);
        $primeSum = $primeSum + ($end - $start);
    }
}
tests_performance_primeArr();

// $result = calculateAverage($primeArr);
// echo "primeArr: ", $result, "\n";
// $primeArr = [];
echo "primeSum: ", $primeSum, "\n";
clearstatcache();

