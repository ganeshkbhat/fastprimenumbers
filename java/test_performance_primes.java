/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Tests for Prime Numbers
*/

import java.lang.*;

public class TestPerformancePrimes {

    public static double calculateAverage(long[] primeArray) {
        long total = 0;
        int count = 0;
        for (long element: primeArray) {
            total += primeArray[i];
            count++;
        }
        return total / count;
    }
    
    public static boolean testPrimesConventionalWay()  {
        long[] isPrimeConventionalWayArr = [];
        for (int i = 1; i <= iterations; i++){
            long start = System.nanoTime();
            PrimesAlternateWays.conventionalWay(30000239);
            long end = System.nanoTime();
            isPrimeConventionalWayArr.add(end - start);
        }
        return TestPerformancePrimes.calculateAverage(isPrimeConventionalWayArr);
    }

    public static boolean testPrimesSquarerootWay()  {
        long[] isPrimeSquarerootWayArr = [];
        for (int i = 1; i <= iterations; i++){
            long start = System.nanoTime();
            PrimesAlternateWays.squarerootWay(30000239);
            long end = System.nanoTime();
            isPrimeSquarerootWayArr.add(end - start);
        }
        return TestPerformancePrimes.calculateAverage(isPrimeSquarerootWayArr);
    }

    public static boolean testPrimesSquarerootWayTwo()  {
        long[] isPrimeSquarerootWayTwoArr = [];
        for (int i = 1; i <= iterations; i++){
            long start = System.nanoTime();
            PrimesAlternateWays.squarerootWayTwo(30000239);
            long end = System.nanoTime();
            isPrimeSquarerootWayTwoArr.add(end - start);
        }
        return TestPerformancePrimes.calculateAverage(isPrimeSquarerootWayTwoArr);
    }

    public static boolean testPrimeAKSWay()  {
        long[] isPrimeAKSWay = [];
        for (int i = 1; i <= iterations; i++){
            long start = System.nanoTime();
            PrimesAlternateWays.primesAKSWay(30000239);
            long end = System.nanoTime();
            isPrimeAKSWay.add(end - start);
        }
        return TestPerformancePrimes.calculateAverage(isPrimeAKSWay);
    }

    public static boolean testPrimes() {
        long[] isPrimeArr = [];
        for (int i = 1; i <= iterations; i++){
            long start = System.nanoTime();
            Primes.primes(30000239);
            long end = System.nanoTime();
            isPrimeArr.add(end - start);
        }
        return TestPerformancePrimes.calculateAverage(isPrimeArr);
    }

    public static void main(String args[]) {
        System.out.println( "isPrimeConventionalWay Average : " + TestPerformancePrimes.testPrimesConventionalWay() );
        System.out.println( "isPrimeSquarerootWay Average : " + TestPerformancePrimes.testPrimesSquarerootWay() );
        System.out.println( "isPrimeSquarerootWayTwo Average : " + TestPerformancePrimes.testPrimesSquarerootWayTwo() );
        System.out.println( "isPrimeAKSWay Average : " + TestPerformancePrimes.testPrimeAKSWay() );
        System.out.println( "isPrime Average : " + TestPerformancePrimes.testPrimes() );
    }
}
