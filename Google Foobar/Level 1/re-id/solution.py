"""
Iteration 1
Fails hidden tests 3,5,7

Pseudocode:
1. Make a string of primes
    - Check if a number is a prime
    - Put all primes into one string
2. Define result
    - Check input i
    - Define result is equal to prime in index i and four numbers after (i+1, i+2, i+3, i+4)
3. Return result

Time complexity: O(n^2)
Space complexity: O(n)
"""

import doctest


def solution_one(i):
    """ Test Cases

    >>> solution_one(0)
    '23571'

    >>> solution_one(3)
    '71113'

    """

    primes = []
    primes_str = ""
    result = ""

    for x in range(1, 10005):
        # Check if a number is a prime
        for n in range(2, x+1):
            if (x != n and x % n == 0):
                break
            # Put all primes into one list
            if (x == n):
                primes.append(str(x))

    # Convert list into string
    primes_str = primes_str.join(primes)

    # Result is equal to prime in index i and four numbers after
    result = primes_str[i] + primes_str[i+1] + \
        primes_str[i+2] + primes_str[i+3] + primes_str[i+4]

    return (result)


"""
Iteration 2
Fails all tests but it is interesting to see that what this iteration 
is lacking is a separate function to check the primes (added in iteration 3).

For checking if a number is prime or not we do not need to iterate through all the number from 2 to n-1.
A prime cannot be divided by any number greater than n/2. So, we only need to iterate through 2 to n/2.

Time complexity: O(n^2)
Space complexity: O(n)
"""


def solution_two(i):
    """ Test Cases

    >>> solution_two(0)
    23571

    >>> solution_two(3)
    71113

    """

    primes = ''

    for x in range(2, 10005):

        for n in range(2, (x//2)+1):
            if (x % n == 0):
                break
            primes += str(x)
            break

    return (primes[i:i + 5])


"""
Iteration 3
Fails hidden tests 3,5,7

For checking if a number is prime or not we do not need to iterate through all the number from 2 to n/2.
A prime cannot be divided by any number less than or equal to its square root. 
So, we only need to iterate through 2 to the square root of n.

Time complexity: O(n log n)
Space complexity: O(n)
"""


def solution_three(i):
    """ Test Cases

    >>> solution_three(0)
    '23571'

    >>> solution_three(3)
    '71113'

    """

    primes = ''

    for x in range(2, 10005):
        if (is_prime(x)):
            primes += str(x)

    return (primes[i:i + 5])


def is_prime(i):
    for n in range(2, int(i**0.5)+1):
        if (i % n == 0):
            return False
    return True


"""
Iteration 4

Submitted solution.
It seems that the foobar platform accepts both string and integer data type.

*   Fails tests 3,5,7 when
    for x in range(2, 10004):
        if len(primes) < 10004:

*   Fails test 5 when
    for x in range(2, 20000):
        if len(primes) < 10004:

*   Passes all tests when
    for x in range(2, 21000):
        if len(primes) < 10004:

The list of primes needs to be at least 10000 + 4 numbers long. This article 
https://towardsdatascience.com/my-google-foobar-journey-2d02e8150158 mentions 
that to find enough primes to fill string with length 10004, we need to iterate 
prime checker until 206412. So, we can round up the range to 21000.

Time complexity: O(n log n)
Space complexity: O(n)
"""


def solution(i):
    """ Test Cases

    >>> solution(0)
    '23571'

    >>> solution(3)
    '71113'

    """

    primes = ''

    for x in range(2, 21000):
        if len(primes) < 10004:
            if (is_prime(x)):
                primes += str(x)
        else:
            break

    return (primes[i:i + 5])


def is_prime(i):

    for n in range(2, int(i**0.5)+1):
        if (i % n == 0):
            return False
    return True


"""
Iteration 5

Create string of primes with sieve of eratosthenes algorithm (reference: 
https://www.geeksforgeeks.org/program-to-print-first-n-prime-numbers/)

*   Fails tests 3,5,7 when
    primes = sieve_of_eratosthenes(10000)

*   Fails test 5 when
    primes = sieve_of_eratosthenes(20500) 
    or 20100, 20200, and 20000

Time complexity: O(n log n)
Space complexity: O(n)
"""


def solution_soe(i):
    """ Test Cases

    >>> solution_soe(0)
    '23571'

    >>> solution_soe(3)
    '71113'

    """

    primes = sieve_of_eratosthenes(21000)

    return (primes[i:i + 5])


def sieve_of_eratosthenes(n):
    primes = ''
    is_prime = [True] * (n+1)
    is_prime[0] = is_prime[1] = False
    for p in range(2, int(n**0.5)+1):
        if is_prime[p]:
            for i in range(p*p, n+1, p):
                is_prime[i] = False
    for i in range(2, n+1):
        if is_prime[i]:
            primes += str(i)
    return primes


doctest.testmod()
