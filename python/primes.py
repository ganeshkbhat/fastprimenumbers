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
        # print("count: Prime Unconventional way", count)
        return True
    if (n == 1 or ((n > 7) and (n % 5 == 0 or n % 7 == 0 or n % 2 == 0 or n % 3 == 0))):
        # print("count: Prime Unconventional way", count)
        return False
    if (type((n - 1) / 6) == int or type((n + 1) / 6) == int):
        for i in range(1, n):
            # Counting Iterations
            count += 1
            factorsix = (i * 6)
            fivebase = n / (5 + factorsix)
            sevenbase = n / (7 + factorsix)
            if (((fivebase > 1) and type(fivebase) == int) or ((sevenbase > 1) and type(sevenbase) == int)):
                # print("count: Prime Unconventional way", count)
                return False

            if (factorsix > n):
                # Max iterations 16666 for n == 100000 instead of 100000
                break

        # print("count: Prime Unconventional way", count)
        return True
    # print("count: Prime Unconventional way", count)
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
            # print("count: Prime Conventional way", count)
            return False
    # print("count: Prime Conventional way", count)
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
        # print("count: Prime Squareroot way", count)
        return False

    s = math.sqrt(num)
    for i in range(2, num):
        # Counting Iterations
        count += 1
        if (num % i == 0):
            # print("count: Prime Squareroot way", count)
            return False
    # print("count: Prime Squareroot way", count)
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
            # print("count: Prime AKS - Mersenne primes - Fermat's little theorem or whatever way", count)
            return False

        i += w
        w = 6 - w
    # print("count: Prime AKS - Mersenne primes - Fermat's little theorem or whatever way", count)
    return True


print("Is Prime 100007: ", isPrimeConventionalWay(100007))
print("Is Prime 100007: ", isPrimeSquarerootWay(100007))
print("Is Prime 100007: ", prime(100007))
print("Is Prime 100007: ", isprimeAKSWay(100007))


def test_primecalculations():
    count = 0
    iterations = 100000
    arr = []
    for i in range(1, iterations):
        traditional = isPrimeConventionalWay(i)
        newer = prime(i)
        if (traditional == newer):
            count = count + 1
        else:
            arr.append([traditional, newer, i])
    print("[count, iterations, arr] list: ", count, iterations, arr)
    if (count == iterations):
        return True
    return False


print("Tests Passed: ", test_primecalculations())


isPrimeConventionalWayArr = []
isPrimeSquarerootWayArr = []
primeArr = []
isprimeAKSWayArr = []


def tests_performance_isPrimeConventionalWayArr():
    global isPrimeConventionalWayArr
    for i in range(1, 1000000):
        start = time.perf_counter_ns()
        isPrimeConventionalWay(30000239)
        end = time.perf_counter_ns()
        isPrimeConventionalWayArr.append(end - start)


tests_performance_isPrimeConventionalWayArr()


def tests_performance_isPrimeSquarerootWayArr():
    global isPrimeSquarerootWayArr
    for i in range(1, 1000000):
        start = time.perf_counter_ns()
        isPrimeSquarerootWay(30000239)
        end = time.perf_counter_ns()
        isPrimeSquarerootWayArr.append(end - start)


tests_performance_isPrimeSquarerootWayArr()


def tests_performance_primeArr():
    global primeArr
    for i in range(1, 1000000):
        start = time.perf_counter_ns()
        prime(30000239)
        end = time.perf_counter_ns()
        primeArr.append(end - start)


tests_performance_primeArr()


def tests_performance_isprimeAKSWayArr():
    global isprimeAKSWayArr
    for i in range(1, 1000000):
        start = time.perf_counter_ns()
        isprimeAKSWay(30000239)
        end = time.perf_counter_ns()
        isprimeAKSWayArr.append(end - start)


tests_performance_isprimeAKSWayArr()

# # PRINT RESULTS OF PERFORMANCE TO FILES
# #
# with open("./isPrimeConventionalWayFile.log", 'w') as f:
#     for item in isPrimeConventionalWayArr:
#         f.write("%s\n" % item)
# with open("./isPrimeSquarerootWayFile.log", 'w') as f:
#     for item in isPrimeSquarerootWayArr:
#         f.write("%s\n" % item)
# with open("./primeFile.log", 'w') as f:
#     for item in primeArr:
#         f.write("%s\n" % item)
# with open("./isprimeAKSWayFile.log", 'w') as f:
#     for item in isprimeAKSWayArr:
#         f.write("%s\n" % item)


print("primeArr: ", sum(primeArr)/len(primeArr))
print("isPrimeConventionalWayArr: ", sum(
    isPrimeConventionalWayArr)/len(isPrimeConventionalWayArr))
print("isPrimeSquarerootWayArr: ", sum(
    isPrimeSquarerootWayArr)/len(isPrimeSquarerootWayArr))
print("isprimeAKSWayArr: ", sum(isprimeAKSWayArr)/len(isprimeAKSWayArr))


# def generate_prime(from, to):
#     arr = [2, 3, 5, 7];
#
#     return arr
#
# print(generate_prime(1, 100))
