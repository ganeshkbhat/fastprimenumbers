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


def prime_old(n):
    """
    RECOMMENDED WAY
    FASTEST Calculation method for prime number checks

    Args:
        n (int): Number which has to be checked for being prime or not
    Returns:
        boolean: Returns whether the number of Prime (True) or not (False)
    """
    count = 0
    if n == 2 or n == 3 or n == 5 or n == 7:
        # print("count: Prime Unconventional way for ", n, "is ", count)
        return True
    if (n == 1) or (
        (n > 7)
        and (((n % 5) == 0) or ((n % 7) == 0) or ((n % 2) == 0) or ((n % 3) == 0))
    ):
        # print("count: Prime Unconventional way for ", n, "is ", count)
        return False

    factorminusone = (n - 1) / 6
    factorplusone = (n + 1) / 6

    # if ( not ( factorminusone > int(factorminusone) )  or not ( factorplusone > int(factorplusone) ) ):
    if (factorminusone.is_integer()) or (factorplusone.is_integer()):
        for i in range(1, n):
            # Counting Iterations
            count += 1
            factorsix = i * 6
            fivebase = n / (5 + factorsix)
            sevenbase = n / (7 + factorsix)
            # if (((fivebase > 1) and not ( fivebase > int(fivebase) ) ) or ((sevenbase > 1) and not ( sevenbase > int(sevenbase) ) )):
            if ((fivebase > 1) and fivebase.is_integer()) or (
                (sevenbase > 1) and sevenbase.is_integer()
            ):
                # print("count: Prime Unconventional way for ", n, "is ", count)
                return False
            if factorsix > n:
                # Max iterations 16666 for n == 100000 instead of 100000
                break
        # print("count: Prime Unconventional way for ", n, "is ", count)
        return True
    # print("count: Prime Unconventional way for ", n, "is ", count)
    return False


# def generate_prime(from, to):
#     arr = [2, 3, 5, 7];
#
#     return arr
#
# print(generate_prime(1, 100))


def range_prime(n, s):
    count = 0
    arr = []

    if n == 2 or n == 3 or n == 5 or n == 7 or n == 11:
        return True

    if n < 2:
        return False

    if (n > 11) and (
        ((n % 2) == 0)
        or ((n % 3) == 0)
        or ((n % 5) == 0)
        or ((n % 7) == 0)
        or ((n % 11) == 0)
    ):
        return False

    if ((n - 1) % 6 == 0) or ((n + 1) % 6 == 0):
        if s == None:
            s = 1
        for i in range(s, n):
            count += 1

            factorsix = i * 6
            ffive = (n > (5 + factorsix)) and ((n % (5 + factorsix)) == 0)
            fseven = (n > (7 + factorsix)) and ((n % (7 + factorsix)) == 0)

            if ffive or fseven:
                return False

            if factorsix > n:
                break

        arr.append(n)
        if s == None:
            return True
        return arr
    return False


def prime(n):
    """
    RECOMMENDED WAY
    FASTEST Calculation method for prime number checks

    Args:
        n (int): Number which has to be checked for being prime or not
    Returns:
        boolean: Returns whether the number of Prime (True) or not (False)
    """
    count = 0

    if n == 2 or n == 3 or n == 5 or n == 7 or n == 11:
        return True

    if n < 2:
        return False

    if (n > 11) and (
        ((n % 2) == 0)
        or ((n % 3) == 0)
        or ((n % 5) == 0)
        or ((n % 7) == 0)
        or ((n % 11) == 0)
    ):
        return False

    if ((n - 1) % 6 == 0) or ((n + 1) % 6 == 0):

        for i in range(1, n):
            count += 1

            factorsix = i * 6
            ffive = (n > (5 + factorsix)) and ((n % (5 + factorsix)) == 0)
            fseven = (n > (7 + factorsix)) and ((n % (7 + factorsix)) == 0)

            if ffive or fseven:
                return False

            if factorsix > n:
                break

        return True
    return False
