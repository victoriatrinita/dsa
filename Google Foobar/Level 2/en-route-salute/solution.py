import doctest

"""
Iteration 1

Pseudocode:
1. Traverse string, create array of > (R) and < (L) indexes
2. Get max index of string
3. Compare R to L
    - If element in R is less than element in L, count one
4. Multiply total count by 2

Time Complexity: O(n^2)
Space Complexity: O(n)
"""


def solution_one(string):
    """ 
    Test Cases

    >>> solution_one("--->-><-><-->-")
    10

    >>> solution_one(">----<")
    2

    >>> solution_one("<<>><")
    4

    """

    right = []
    left = []
    count = 0
    for index, el in enumerate(string):
        if (el == '>'):
            right.append(index)
        elif (el == '<'):
            left.append(index)

    for right_el in right:
        for left_el in left:
            if right_el < left_el:
                count += 1

    return (count*2)


"""
Iteration 2

Submittted solution

Time Complexity: O(n)
Space Complexity: O(1)
"""


def solution(string):
    """ 
    Test Cases

    >>> solution("--->-><-><-->-")
    10

    >>> solution(">----<")
    2

    >>> solution("<<>><")
    4

    """

    count = 0
    bow = 0

    for el in string:
        if (el == '>'):
            count += 1
        elif (el == '<'):
            if (count):
                bow += count

    return (bow*2)


doctest.testmod()
