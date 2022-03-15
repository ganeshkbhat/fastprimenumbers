<?php
/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Comparision results for correctness Tests for Prime Numbers
*/

require_once("./primes.php");
require_once("./primes_alternate_ways.php");
$iterations = 100000;

function strbool($value){
    return $value ? 'true' : 'false';
}


$result = isPrimeConventionalWay(83);
echo "Is Prime 83 (isPrimeConventionalWay): ", strbool($result), "\n";
$result = isPrimeSquarerootWay(83);
echo "Is Prime 83 (prime): ", strbool($result), "\n";
$result = isPrimeSquarerootWay(83);
echo "Is Prime 83 (isPrimeSquarerootWay): ", strbool($result), "\n";
$result = prime(83);
echo "Is Prime 83 (prime): ", strbool($result), "\n";


$result = isPrimeConventionalWay(169);
echo "Is Prime 169 (isPrimeConventionalWay): ", strbool($result), "\n";
$result = isPrimeSquarerootWay(169);
echo "Is Prime 169 (prime): ", strbool($result), "\n";
$result = isPrimeSquarerootWay(169);
echo "Is Prime 169 (isPrimeSquarerootWay): ", strbool($result), "\n";
$result = prime(169);
echo "Is Prime 169 (prime): ", strbool($result), "\n";


$result = isPrimeConventionalWay(100007);
echo "Is Prime 100007 (isPrimeConventionalWay): ", strbool($result), "\n";
$result = isPrimeSquarerootWay(100007);
echo "Is Prime 100007 (prime): ", strbool($result), "\n";
$result = isPrimeSquarerootWay(100007);
echo "Is Prime 100007 (isPrimeSquarerootWay): ", strbool($result), "\n";
$result = prime(100007);
echo "Is Prime 100007 (prime): ", strbool($result), "\n";

$result = isPrimeConventionalWay(300530164787);
echo "Is Prime 300530164787 (isPrimeConventionalWay): ", strbool($result), "\n";
$result = isPrimeSquarerootWay(300530164787);
echo "Is Prime 300530164787 (prime): ", strbool($result), "\n";
$result = isPrimeSquarerootWay(300530164787);
echo "Is Prime 300530164787 (isPrimeSquarerootWay): ", strbool($result), "\n";
$result = prime(300530164787);
echo "Is Prime 300530164787 (prime): ", strbool($result), "\n";


function test_primecalculations() {
    global $iterations;
    $count = 0;
    $arr = [];
    for ($i = 1; $i <= $iterations; $i++) {
        $traditional = isPrimeConventionalWay($i);
        $newer = prime($i);
        if ($traditional == $newer) {
            $count += 1;
        } else {
            array_push($arr, array($traditional, $newer, $i));
        }
    }
    print("[count, iterations, Error Array] list: \n");
    var_dump($count, $iterations, $arr);
    if ($count === $iterations) {
        return true;
    }
    return false;
}

$result = test_primecalculations();
echo "Results for comparision of calculations: ", strbool($result);


