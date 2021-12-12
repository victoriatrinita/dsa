/*
Title: Binary Gap
Difficulty: Easy
Link: // https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
*/

// Time complexity: O(n)
// Space complexity: O(n)

#include <cmath>
#include <iostream>
#include <vector>

int solution(int N)
{
  std::vector<int> binaryRev;
  std::vector<int> binary;
  std::vector<char> path;

  int curr = 0;
  int max = 0;

  // Convert to reversed binary
  for (int i = 0; N > 0; i++)
  {
    binaryRev.push_back(N % 2);
    N = N / 2;
  }

  // Reverse reversed binary
  for (int i = binaryRev.size() - 1; i >= 0; i--)
  {
    binary.push_back(binaryRev[i]);
  }

  // Find longest binary gap
  for (int unsigned i = 0; i < binary.size(); i++)
  {
    if (binary[i] == 0)
    {
      curr = curr + 1;
    }
    else if (binary[i] == 1)
    {
      if (curr > max)
      {
        max = curr;
      }
      curr = 0;
    }
  }

  return max;
}
