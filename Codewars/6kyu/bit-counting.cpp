/*
Title: Bit Counting
Link: https://www.codewars.com/kata/526571aae218b8ee490006f4
*/

// Time complexity: O(n)
// Space complexity: O(n)

#include <cmath>
#include <iostream>
#include <vector>

unsigned int countBits(unsigned long long n)
{
    std::vector<int> binaryRev;
    std::vector<int> binary;
    int count = 0;

    // Convert to reversed binary
    for (int i = 0; n > 0; i++)
    {
        binaryRev.push_back(n % 2);
        n = n / 2;
    }

    // Reverse reversed binary
    for (int i = binaryRev.size() - 1; i >= 0; i--)
    {
        binary.push_back(binaryRev[i]);
    }

    // Count ones
    for (int unsigned i = 0; i < binary.size(); i++)
    {
        if (binary[i] == 1)
            count = count + 1;
    }

    return count;
}
