
/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Functions and Alternate ways for calculation of Prime Numbers
 * 
 * ** prime(n) ** is the Recommended Way for calculation checks of prime numbers
 * 
*/

import java.lang.*;

public class Primes {
    
    public static boolean primes(long n)  {
        long count = 0;
        if ( (n == 2 || n == 3 || n == 5 || n == 7) ) {
            System.out.println("count: Prime Unconventional way for " + n + " is " + count + "\n"); 
            return true;
        }
        if ( n == 1 || ((n > 7) && (n % 5 == 0 || n % 7 == 0 || n % 2 == 0 || n % 3 == 0)) ) {
            System.out.println("count: Prime Unconventional way for " + n + " is " + count + "\n"); 
            return false;
        }
        double factorminusone = (n-1)/6;
        double factorplusone = (n+1)/6;
        if ( !( factorminusone > (long)factorminusone ) || !( factorplusone > (long)factorplusone ) ){
            for (long i=1; i <= n; i++) {
                count += 1;
                long factorsix = (i * 6);
                double fivebase = n / (5 + factorsix);
                double sevenbase = n / (7 + factorsix);
                if (((fivebase > 1) && !( fivebase > (long) fivebase ) ) || ((sevenbase > 1) && !( sevenbase > (long) sevenbase ) )){
                    System.out.println("count: Prime Unconventional way for " + n + " is " + count + "\n"); 
                    return false;
                }
                if (factorsix > n) {
                    // Max iterations 16666 for n == 100000 instead of 100000
                    break;
                }   
            }
            System.out.println("count: Prime Unconventional way for " + n + " is " + count + "\n"); 
            return true;
        }
        return false;
    }

    public static void main(String args[]) {

        System.out.println("Importing Primes Recommended Way ");

        // System.out.println("Is Prime Unconventional way for 83: prime is  " + " is " + primes(83));
        // System.out.println("Is Prime Unconventional way for 169: prime is  " + " is " + primes(169));
        // System.out.println("Is Prime Unconventional way for 167: prime is  " + " is " + primes(167));
        // System.out.println("Is Prime Unconventional way for 300530164787: prime is " +  prime(300530164787));

    }
}


