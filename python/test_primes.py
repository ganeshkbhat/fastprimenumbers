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

from primes import *
from primes_alternate_ways import *
import time
import math


print("Is Prime 83 isPrimeConventionalWay: ", isPrimeConventionalWay(83))
print("Is Prime 83 isPrimeSquarerootWay: ", isPrimeSquarerootWay(83))
print("Is Prime 83 prime (SUGGESTED): ", prime(83))
print("Is Prime 83 isprimeAKSWay: ", isprimeAKSWay(83))


print("Is Prime 169 isPrimeConventionalWay: ", isPrimeConventionalWay(169))
print("Is Prime 169 isPrimeSquarerootWay: ", isPrimeSquarerootWay(169))
print("Is Prime 169 prime (SUGGESTED): ", prime(169))
print("Is Prime 169 isprimeAKSWay: ", isprimeAKSWay(169))


print("Is Prime 100007 isPrimeConventionalWay: ", isPrimeConventionalWay(100007))
print("Is Prime 100007 isPrimeSquarerootWay: ", isPrimeSquarerootWay(100007))
print("Is Prime 100007 prime (SUGGESTED): ", prime(100007))
print("Is Prime 100007 isprimeAKSWay: ", isprimeAKSWay(100007))


print("Is Prime 300530164787 isPrimeConventionalWay: ", isPrimeConventionalWay(300530164787))
print("Is Prime 300530164787 isPrimeSquarerootWay: ", isPrimeSquarerootWay(300530164787))
print("Is Prime 300530164787 prime (SUGGESTED): ", prime(300530164787))
print("Is Prime 300530164787 isprimeAKSWay: ", isprimeAKSWay(300530164787))


def test_primecalculations():
    count = 0
    iterations = 100000
    arr = []
    for i in range(1, (iterations+1)):
        traditional = isPrimeConventionalWay(i)
        newer = prime(i)
        if (traditional == newer):
            count = count + 1
        else:
            arr.append([traditional, newer, i])
    print("[count, iterations, Error Array] list: ", count, iterations, arr)
    # print("[count, iterations, Error Items] list: ", count, iterations, len(arr))
    if (count == iterations):
        return True
    return False


print("Tests Passed: ", test_primecalculations())

