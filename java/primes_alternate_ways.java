/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Alternate ways for calculation of Prime Numbers
 * 
 * 
*/

import java.lang.*;

public class PrimesAlternateWays {
    public static boolean conventionalWay(int n)  {
        int count = 0
        if (n <= 1) {
            return false;
        }
        // Check from 2 to n-1
        // Max iterations 99998 for n == 100000
        for (int i = 1; i <= n; i++) {
            count += 1
            if (n % i == 0){
                System.out.println("count: Prime Conventional way for " + n + "is " + count);
                return false;
            }
        }
        System.out.println("count: Prime Conventional way for " + n + "is " + count);
        return true;
    }

    public static boolean squarerootWay(int num)  {
        int count = 0;
        if (num < 2){
            System.out.println("count: Prime Squareroot way " + num + "is " + count);
            return false;
        }

        double s = Math.sqrt(num);
        for (int i = 1; i <= s; i++){
            count += 1;
            if (num % i == 0){
                System.out.println("count: Prime Squareroot way " + num + "is " + count);
                return false;
            }
        }
        System.out.println("count: Prime Squareroot way " + num + "is " + count);
        return true;
    }

    public static boolean squarerootWayTwo(int num)  {
        int count = 0;
        double s = Math.sqrt(num);
        for ( int i = 2, ; i <= s; i++ ) {
            count += 1;
            if (num % i === 0) {
                System.out.println("count: Prime Squareroot Way Two " + n + "is " + count);
                return false;
            }
        }
        System.out.println("count: Prime Squareroot Way Two " + n + "is " + count);
        return num > 1;
    }

    public static boolean primesAKSWay(int n) {
        int count = 0;
        if ( (n == 2) || (n == 3) ) {
            System.out.println("count: Prime AKS - Mersenne primes - Fermat's little theorem or whatever way " + n + "is " + count);
            return true;
        }
        if ( ( (n % 2) == 0 ) || ( (n % 3) == 0 ) ) {
            System.out.println("count: Prime AKS - Mersenne primes - Fermat's little theorem or whatever way " + n + "is " + count);
            return false;
        }
        int i = 5;
        int w = 2;
        while ( (i * i) <= n ) {
            count += 1;
            if ( (n % i) == 0 ){
                System.out.println("count: Prime AKS - Mersenne primes - Fermat's little theorem or whatever way " + n + "is " + count);
                return false;
            }
            i += w;
            w = (6 - w);
        }
        System.out.println("count: Prime AKS - Mersenne primes - Fermat's little theorem or whatever way " + n + "is " + count);
        return true;
    }

    public static void main(String args[]) {
        System.out.println("Importing Primes Alternate Way ");

        // System.out.println("Is Prime 83: conventionalWay is " +  conventionalWay(83));
        // System.out.println("Is Prime 83: squarerootWay is " +  squarerootWay(83));
        // System.out.println("Is Prime 83: squarerootWayTwo is " +  squarerootWayTwo(83));
        // System.out.println("Is Prime 83: primesAKSWay is " +  primesAKSWay(83));


        // System.out.println("Is Prime 169: conventionalWay is " +  conventionalWay(169));
        // System.out.println("Is Prime 169: squarerootWay is " +  squarerootWay(169));
        // System.out.println("Is Prime 169: squarerootWayTwo is " +  squarerootWayTwo(169));
        // System.out.println("Is Prime 169: primesAKSWay is " +  primesAKSWay(169));


        // System.out.println("Is Prime 100007: conventionalWay is " +  conventionalWay(100007));
        // System.out.println("Is Prime 100007: squarerootWay is " +  squarerootWay(100007));
        // System.out.println("Is Prime 100007: squarerootWayTwo is " +  squarerootWayTwo(100007));
        // System.out.println("Is Prime 100007: primesAKSWay is " +  primesAKSWay(100007));

        // System.out.println("Is Prime 300530164787: conventionalWay is " +  conventionalWay(300530164787));
        // System.out.println("Is Prime 300530164787: squarerootWay is " +  squarerootWay(300530164787));
        // System.out.println("Is Prime 300530164787: squarerootWayTwo is " +  squarerootWayTwo(300530164787));
        // System.out.println("Is Prime 300530164787: primesAKSWay is " +  primesAKSWay(300530164787));

    }
}

