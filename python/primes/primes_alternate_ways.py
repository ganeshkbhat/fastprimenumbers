##
# 
# Ganesh Bhat
# https://github.com/ganeshkbhat/fastprimecalculations
# Fastest method of Prime Number Calculations
# Functions and Alternate ways for calculation of Prime Numbers
# 
# ** prime(n) ** is the Recommended Way for calculation checks of prime numbers
# All others are alternative ways
#
##

import time
import math


def isPrimeConventionalWay(n):
    """
    ALTERNATE WAY

    Args:
        n (int): Number which has to be checked for being prime or not
    Returns:
        boolean: Returns whether the number of Prime (True) or not (False)
    """
    count = 0
    if (n <= 1):
        return False
    # Check from 2 to n-1
    # Max iterations 99998 for n == 100000
    for i in range(2, n):
        # Counting Iterations
        count += 1
        if (n % i == 0):
            # print("count: Prime Conventional way for ", n, "is ", count)
            return False
    # print("count: Prime Conventional way for ", n, "is ", count)
    return True


def isPrimeSquarerootWay(num):
    """
    ALTERNATE WAY

    Args:
        num (int): Number which has to be checked for being prime or not
    Returns:
        boolean: Returns whether the number of Prime (True) or not (False)
    """
    count = 0
    # if not is_number num return False
    if (num < 2):
        # print("count: Prime Squareroot way ", num, "is ", count)
        return False

    s = math.sqrt(num)
    s = int(s+1)
    for i in range(2, s):
        # Counting Iterations
        count += 1
        if (num % i == 0):
            # print("count: Prime Squareroot way ", num, "is ", count)
            return False
    # print("count: Prime Squareroot way ", num, "is ", count)
    return True


def isprimeAKSWay(n):
    """
    ALTERNATE WAY

    Args:
        n (int): Number which has to be checked for being prime or not
    Returns:
        boolean: Returns whether the number of Prime (True) or not (False)
    """
    count = 0
    if ( (n == 2) or (n == 3) ):
        return True
    if ( ( (n % 2) == 0 ) or ( (n % 3) == 0 ) ):
        return False

    i = 5
    w = 2

    while ( (i * i) <= n ):
        count += 1
        if n % i == 0:
            # print("count: Prime AKS - Mersenne primes - Fermat's little theorem or whatever way ", n, "is ", count)
            return False

        i += w
        w = 6 - w
    # print("count: Prime AKS - Mersenne primes - Fermat's little theorem or whatever way ", n, "is ", count)
    return True



def isPrimeFermetWayRange(r):
    primes = [2];
    for i in range(1, r):
        if (isPrimeFermetWay(i)):
            primes.append(i);
    return primes;



def isPrimeFermetWay(num):
    if (num < 2): return False;
    if (2**(num - 1) % num == 1): return True;
    return False;


def isPrimeFermetWayConfirmed(num):
    if (isPrimeFermetWay(num)):
        if (isComposite(num)):
            return False;
        return True;
    return False;


def isPrimeNewWay(num):
    ## AKS in different way
    if (num % 2 == 0 or num % 3 == 0):
        return False;
    i = 5;
    while (i * i <= num):
        if ((not (num % i == 0)) or (not (num % (i + 2) == 0))):
            return False;
        i += 6;
    return True;


def isComposite(num):
    if (num <= 1):
        return True;
    
    if (num <= 3):
        return False;
    
    if (num % 2 == 0 or num % 3 == 0):
        return True;
    
    i = 5;
    while (i * i <= num):
        if (num % i == 0 or num % (i + 2) == 0):
            return True;
        i += 6;
    
    return False;











# at this point of time, `fermet method` may be the `fastest way` of `matching prime numbers`. but there are cases when fermet may go wrong (`carmichael numbers`). in such cases you may wish to use the `square root primes check method` to do a recheck of whether it is prime or not. 

# i have not seen any person use this way of calculation at this time. well, say till july 2024, strange?

# [https://en.wikipedia.org/wiki/Fermat_number](https://en.wikipedia.org/wiki/Fermat_number)

# [https://en.wikipedia.org/wiki/Primality_test](https://en.wikipedia.org/wiki/Primality_test)


# ```

# # Fermet way of checking primes with base 2
# # you can change the 2 into any other coprime number

# def isPrimeFermet(num):
#     if (num < 2): return False;
#     if (2**(num - 1) % num == 1): return True;
#     return False;

# #
# # optimised uses checks of primes for until 11 and its multiplicals 
# #      before using the use of fermet method
# # 
# # this check reduces the possibilities of carmichael numbers which are 
# #     derivatived from coprimes of 2,3,5,7,11 
# # 
# # you may add more of prime numbers to the checks to 
# #     better the possibility until 100 or more stored primes
# #     the function will have better probability to not
# #     get any carmichael nonprime number
# #

# def isPrimeFermetOptimized(num):
#     if (num < 2): return False;
#     if (num == 2 or num == 3 or num == 5 or num == 7 or num == 11): 
#         return True
#     if ( (num == 1) or ( (num > 11) and ( ((num % 2) == 0) or ((num % 3) == 0) or ((num % 5) == 0) or ((num % 7) == 0) ) ) ):
#         return False
#     if (2**(num - 1) % num == 1): return True;
#     return False;

# ```

# get prime numbers between `one` (or alternatively `start`) `to` `range` of until `r` using the function `isPrimeFermetRange(range)` or `isPrimeFermetRange(start, range)`

# ```

# def isPrimeFermetRange(r):
#     primes = [2];
#     for i in range(1, r):
#         if (isPrimeFermet(i)):
#             primes.append(i);
#     return primes;


# def isPrimeFermetRange(s, r):
#     primes = [];
#     for i in range(s, r):
#         if (isPrimeFermet(i)):
#             primes.append(i);
#     return primes;

# ```

# a confirmation for carmichael numbers can be done using the square root methods of checking primes.

# ```

# # if you are unsure whether it is a carmical number, then
# #      you may use the square root method to 
# #      recheck and confirm the number to be a prime or carmical

# def isPrimeSquareRoot(num):
#     count = 0
#     if (num < 2): return False;

#     s = math.sqrt(num)
#     s = int(s+1)
#     for i in range(2, s):
#         count += 1
#         if (num % i == 0):
#             return False
#     return True

# ```

# ```

# #
# # optimised uses checks of primes for until 11 and its multiplicals 
# #      before using the use of fermet method
# # 
# # this check reduces the possibilities of carmichael numbers which are 
# #     derivatived from coprimes of 2,3,5,7,11 
# # 
# # you may add more of prime numbers to the checks to 
# #     better the possibility until 100 or more stored primes
# #     the function will have better probability to not
# #     get any carmichael nonprime number
# #

# def isPrimeSquareRootOptimised(num):
#     count = 0
#     if (num < 2): return False;
#     if (num == 2 or num == 3 or num == 5 or num == 7 or num == 11): 
#         return True
#     if ( (num == 1) or ( (num > 11) and ( ((num % 2) == 0) or ((num % 3) == 0) or ((num % 5) == 0) or ((num % 7) == 0) ) ) ):
#         return False
#     s = math.sqrt(num)
#     s = int(s+1)
#     for i in range(2, s):
#         count += 1
#         if (num % i == 0):
#             return False
#     return True

# ```