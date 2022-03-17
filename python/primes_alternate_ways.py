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

