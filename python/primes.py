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
    if ((n == 2 or n == 3 or n == 5 or n == 7)):
        print("count: Prime Unconventional way for ", n, "is ", count)
        return True
    if (n == 1 or ((n > 7) and (n % 5 == 0 or n % 7 == 0 or n % 2 == 0 or n % 3 == 0))):
        print("count: Prime Unconventional way for ", n, "is ", count)
        return False
    factorminusone = (n-1)/6
    factorplusone = (n+1)/6
    if ( not ( factorminusone > int(factorminusone) )  or not ( factorplusone > int(factorplusone) ) ):
        for i in range(1, n):
            # Counting Iterations
            count += 1
            factorsix = (i * 6)
            fivebase = n / (5 + factorsix)
            sevenbase = n / (7 + factorsix)
            if (((fivebase > 1) and not ( fivebase > int(fivebase) ) ) or ((sevenbase > 1) and not ( sevenbase > int(sevenbase) ) )):
                print("count: Prime Unconventional way for ", n, "is ", count)
                return False

            if (factorsix > n):
                # Max iterations 16666 for n == 100000 instead of 100000
                break

        print("count: Prime Unconventional way for ", n, "is ", count)
        return True
    print("count: Prime Unconventional way for ", n, "is ", count)
    return False


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
            print("count: Prime Conventional way for ", n, "is ", count)
            return False
    print("count: Prime Conventional way for ", n, "is ", count)
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
        print("count: Prime Squareroot way ", num, "is ", count)
        return False

    s = math.sqrt(num)
    for i in range(2, num):
        # Counting Iterations
        count += 1
        if (num % i == 0):
            print("count: Prime Squareroot way ", num, "is ", count)
            return False
    print("count: Prime Squareroot way ", num, "is ", count)
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
    if n == 2:
        return True
    if n == 3:
        return True
    if n % 2 == 0:
        return False
    if n % 3 == 0:
        return False

    i = 5
    w = 2

    while i * i <= n:
        count += 1
        if n % i == 0:
            print("count: Prime AKS - Mersenne primes - Fermat's little theorem or whatever way ", n, "is ", count)
            return False

        i += w
        w = 6 - w
    print("count: Prime AKS - Mersenne primes - Fermat's little theorem or whatever way ", n, "is ", count)
    return True


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


# def test_primecalculations():
#     count = 0
#     iterations = 100000
#     arr = []
#     for i in range(1, (iterations+1)):
#         traditional = isPrimeConventionalWay(i)
#         newer = prime(i)
#         if (traditional == newer):
#             count = count + 1
#         else:
#             arr.append([traditional, newer, i])
#     print("[count, iterations, Error Array] list: ", count, iterations, arr)
#     # print("[count, iterations, Error Items] list: ", count, iterations, len(arr))
#     if (count == iterations):
#         return True
#     return False


# print("Tests Passed: ", test_primecalculations())


# isPrimeConventionalWayArr = []
# isPrimeSquarerootWayArr = []
# primeArr = []
# isprimeAKSWayArr = []


# def tests_performance_isPrimeConventionalWayArr():
#     global isPrimeConventionalWayArr
#     for i in range(1, 1000000):
#         start = time.perf_counter()
#         isPrimeConventionalWay(30000239)
#         end = time.perf_counter()
#         isPrimeConventionalWayArr.append(end - start)


# tests_performance_isPrimeConventionalWayArr()


# def tests_performance_isPrimeSquarerootWayArr():
#     global isPrimeSquarerootWayArr
#     for i in range(1, 1000000):
#         start = time.perf_counter()
#         isPrimeSquarerootWay(30000239)
#         end = time.perf_counter()
#         isPrimeSquarerootWayArr.append(end - start)


# tests_performance_isPrimeSquarerootWayArr()


# def tests_performance_isprimeAKSWayArr():
#     global isprimeAKSWayArr
#     for i in range(1, 1000000):
#         start = time.perf_counter()
#         isprimeAKSWay(30000239)
#         end = time.perf_counter()
#         isprimeAKSWayArr.append(end - start)


# tests_performance_isprimeAKSWayArr()


# def tests_performance_primeArr():
#     global primeArr
#     for i in range(1, 1000000):
#         start = time.perf_counter()
#         prime(30000239)
#         end = time.perf_counter()
#         primeArr.append(end - start)


# tests_performance_primeArr()



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


# print("isPrimeConventionalWayArr Average: ", sum(
#     isPrimeConventionalWayArr)/len(isPrimeConventionalWayArr))
# print("isPrimeSquarerootWayArr Average: ", sum(
#     isPrimeSquarerootWayArr)/len(isPrimeSquarerootWayArr))
# print("isprimeAKSWayArr Average: ", sum(isprimeAKSWayArr)/len(isprimeAKSWayArr))
# print("primeArr Average: ", sum(primeArr)/len(primeArr))


# def generate_prime(from, to):
#     arr = [2, 3, 5, 7];
#
#     return arr
#
# print(generate_prime(1, 100))
