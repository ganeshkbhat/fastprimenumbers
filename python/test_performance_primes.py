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


1.940599238979692e-06


4.111346501763623e-06
2.0435583430845877e-06
1.9665250797781405e-06


isPrimeConventionalWayArr = []
isPrimeSquarerootWayArr = []
primeArr = []
isprimeAKSWayArr = []


def tests_performance_isPrimeConventionalWayArr():
    global isPrimeConventionalWayArr
    for i in range(1, 1000000):
        start = time.perf_counter()
        isPrimeConventionalWay(30000239)
        end = time.perf_counter()
        isPrimeConventionalWayArr.append(end - start)


tests_performance_isPrimeConventionalWayArr()


def tests_performance_isPrimeSquarerootWayArr():
    global isPrimeSquarerootWayArr
    for i in range(1, 1000000):
        start = time.perf_counter()
        isPrimeSquarerootWay(30000239)
        end = time.perf_counter()
        isPrimeSquarerootWayArr.append(end - start)


tests_performance_isPrimeSquarerootWayArr()


def tests_performance_isprimeAKSWayArr():
    global isprimeAKSWayArr
    for i in range(1, 1000000):
        start = time.perf_counter()
        isprimeAKSWay(30000239)
        end = time.perf_counter()
        isprimeAKSWayArr.append(end - start)


tests_performance_isprimeAKSWayArr()


def tests_performance_primeArr():
    global primeArr
    for i in range(1, 1000000):
        start = time.perf_counter()
        prime(30000239)
        end = time.perf_counter()
        primeArr.append(end - start)


tests_performance_primeArr()



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


print("isPrimeConventionalWayArr Average: ", sum(
    isPrimeConventionalWayArr)/len(isPrimeConventionalWayArr))
print("isPrimeSquarerootWayArr Average: ", sum(
    isPrimeSquarerootWayArr)/len(isPrimeSquarerootWayArr))
print("isprimeAKSWayArr Average: ", sum(isprimeAKSWayArr)/len(isprimeAKSWayArr))
print("primeArr Average: ", sum(primeArr)/len(primeArr))

