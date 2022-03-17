/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Tests for Prime Numbers
 * 
 * TODO - INCOMPLETE
 * 
*/

import java.lang.*;

public class TestPerformancePrimes {

    public static double calculateAverage(long[] primeArray) {
        long total = 0;
        int count = 0;
        for (long element: primeArray) {
            total += element;
            count++;
        }
        return total / count;
    }
    
    public static double testPrimesConventionalWay(long iterations)  {
        long isPrimeConventionalWaySum = 0;
        for (int i = 1; i <= iterations; i++){
            long start = System.nanoTime();
            PrimesAlternateWays.conventionalWay(30000239);
            long end = System.nanoTime();
            isPrimeConventionalWaySum += (end - start);
        }
        return isPrimeConventionalWaySum;
    }

    public static double testPrimesSquarerootWay(long iterations)  {
        long isPrimeSquarerootWaySum = 0;
        for (int i = 1; i <= iterations; i++){
            long start = System.nanoTime();
            PrimesAlternateWays.squarerootWay(30000239);
            long end = System.nanoTime();
            isPrimeSquarerootWaySum += (end - start);
        }
        return isPrimeSquarerootWaySum;
    }

    public static double testPrimesSquarerootWayTwo(long iterations)  {
        long isPrimeSquarerootWayTwoSum = 0;
        for (int i = 1; i <= iterations; i++){
            long start = System.nanoTime();
            PrimesAlternateWays.squarerootWayTwo(30000239);
            long end = System.nanoTime();
            isPrimeSquarerootWayTwoSum += (end - start);
        }
        return isPrimeSquarerootWayTwoSum;
    }

    public static double testPrimeAKSWay(long iterations)  {
        long isPrimeAKSWaySum = 0;
        for (int i = 1; i <= iterations; i++){
            long start = System.nanoTime();
            PrimesAlternateWays.primesAKSWay(30000239);
            long end = System.nanoTime();
            isPrimeAKSWaySum += (end - start);
        }
        return isPrimeAKSWaySum;
    }

    public static double testPrimes(long iterations) {
        long isPrimeSum = 0;
        for (int i = 1; i <= iterations; i++){
            long start = System.nanoTime();
            Primes.primes(30000239);
            long end = System.nanoTime();
            isPrimeSum += (end - start);
        }
        return isPrimeSum;
    }

    public static void main(String args[]) {
        
        long iterations = 10000000;

        System.out.println( "isPrimeConventionalWay Average : " + TestPerformancePrimes.testPrimesConventionalWay(iterations) );
        System.out.println( "isPrimeSquarerootWay Average : " + TestPerformancePrimes.testPrimesSquarerootWay(iterations) );
        System.out.println( "isPrimeSquarerootWayTwo Average : " + TestPerformancePrimes.testPrimesSquarerootWayTwo(iterations) );
        System.out.println( "isPrimeAKSWay Average : " + TestPerformancePrimes.testPrimeAKSWay(iterations) );
        System.out.println( "isPrime Average : " + TestPerformancePrimes.testPrimes(iterations) );

    }
}
