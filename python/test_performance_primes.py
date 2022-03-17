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


def tests_performance_isPrimeConventionalWayArr():
    isPrimeConventionalWaySum = 0
    for i in range(1, 1000000):
        start = time.perf_counter()
        isPrimeConventionalWay(30000239)
        end = time.perf_counter()
        isPrimeConventionalWaySum += (end - start)
    return isPrimeConventionalWaySum

print( "isPrimeConventionalWayArr Sum: ", tests_performance_isPrimeConventionalWayArr() )


def tests_performance_isPrimeSquarerootWayArr():
    isPrimeSquarerootWaySum = 0
    for i in range(1, 1000000):
        start = time.perf_counter()
        isPrimeSquarerootWay(30000239)
        end = time.perf_counter()
        isPrimeSquarerootWaySum += (end - start)
    return isPrimeSquarerootWaySum

print( "isPrimeSquarerootWayArr Sum: ", tests_performance_isPrimeSquarerootWayArr() )


def tests_performance_isprimeAKSWayArr():
    isprimeAKSWaySum = 0
    for i in range(1, 1000000):
        start = time.perf_counter()
        isprimeAKSWay(30000239)
        end = time.perf_counter()
        isprimeAKSWaySum += (end - start)
    return isprimeAKSWaySum

print( "isprimeAKSWayArr Sum: ", tests_performance_isprimeAKSWayArr() )


def tests_performance_primeArr():
    primeSum = 0
    for i in range(1, 1000000):
        start = time.perf_counter()
        prime(30000239)
        end = time.perf_counter()
        primeSum += (end - start)
    return primeSum

print( "primeArr Sum: ", tests_performance_primeArr() )


# # # PRINT RESULTS OF PERFORMANCE TO FILES
# # #
# # with open("./isPrimeConventionalWayFile.log", 'w') as f:
# #     for item in isPrimeConventionalWayArr:
# #         f.write("%s\n" % item)
# # with open("./isPrimeSquarerootWayFile.log", 'w') as f:
# #     for item in isPrimeSquarerootWayArr:
# #         f.write("%s\n" % item)
# # with open("./primeFile.log", 'w') as f:
# #     for item in primeArr:
# #         f.write("%s\n" % item)
# # with open("./isprimeAKSWayFile.log", 'w') as f:
# #     for item in isprimeAKSWayArr:
# #         f.write("%s\n" % item)


