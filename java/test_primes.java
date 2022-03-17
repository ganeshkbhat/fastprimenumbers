/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Comparision results for correctness for Prime Numbers
 * 
 * 
*/

import java.lang.*;
import java.util.*;

public class TestPerformancePrimes {

    public static boolean testPrimecalculations(int iterations)  {
        int count = 0;
        ArrayList<Object> arr = new ArrayList<Object>();
        for (int i = 1; i <= iterations; i++) {
            boolean traditional = PrimesAlternateWays.conventionalWay(i);
            boolean newer = Primes.primes(i);
            if (traditional == newer) {
                count += 1;
            } else {
                arr.add([traditional, newer, i]);
            }
        }
        System.out.println("[count, iterations, arr] list: " + count  + ", " + iterations + ", " + Arrays.deepToString(array));
        if (count == iterations) {
            return true;
        }
        return false;
    }

    public static void main(String args[]) {
        
        int iterations = 1000000;

        System.out.println("Is Prime 83: isPrimeConventionalWay is " +  PrimesAlternateWays.conventionalWay(83));
        System.out.println("Is Prime 83: isPrimeSquarerootWay is " +  PrimesAlternateWays.squarerootWay(83));
        System.out.println("Is Prime 83: isPrimeSquarerootWayTwo is " +  PrimesAlternateWays.squarerootWayTwo(83));
        System.out.println("Is Prime 83: primesAKSWay is " +  PrimesAlternateWays.primesAKSWay(83));
        System.out.println("Is Prime 83: prime is " +  Primes.primes(83));
        

        System.out.println("Is Prime 169: isPrimeConventionalWay is " +  PrimesAlternateWays.conventionalWay(169));
        System.out.println("Is Prime 169: isPrimeSquarerootWay is " +  PrimesAlternateWays.squarerootWay(169));
        System.out.println("Is Prime 169: isPrimeSquarerootWayTwo is " +  PrimesAlternateWays.squarerootWayTwo(169));
        System.out.println("Is Prime 169: primesAKSWay is " +  PrimesAlternateWays.primesAKSWay(169));
        System.out.println("Is Prime 169: prime is " +  Primes.primes(169));


        System.out.println("Is Prime 100007: isPrimeConventionalWay is " +  PrimesAlternateWays.conventionalWay(100007));
        System.out.println("Is Prime 100007: isPrimeSquarerootWay is " +  PrimesAlternateWays.squarerootWay(100007));
        System.out.println("Is Prime 100007: isPrimeSquarerootWayTwo is " +  PrimesAlternateWays.squarerootWayTwo(100007));
        System.out.println("Is Prime 100007: primesAKSWay is " +  PrimesAlternateWays.primesAKSWay(100007));
        System.out.println("Is Prime 100007: prime is " +  Primes.primes(100007));


        System.out.println("Is Prime 300530164787: isPrimeConventionalWay is " +  PrimesAlternateWays.conventionalWay(300530164787));
        System.out.println("Is Prime 300530164787: isPrimeSquarerootWay is " +  PrimesAlternateWays.squarerootWay(300530164787));
        System.out.println("Is Prime 300530164787: isPrimeSquarerootWayTwo is " +  PrimesAlternateWays.squarerootWayTwo(300530164787));
        System.out.println("Is Prime 300530164787: primesAKSWay is " +  PrimesAlternateWays.primesAKSWay(300530164787));
        System.out.println("Is Prime 300530164787: prime is " +  Primes.primes(300530164787));


        System.out.println("Tests Passed: " + TestPerformancePrimes.testPrimecalculations(iterations));

    }
}

