/*
Number: 1
Title: Two Sum
Difficulty: Easy
Link: https://leetcode.com/problems/two-sum
*/

// Solution 1
// Time complexity: O(n^2)
// Space complexity: O(n)

class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        vector<int> answer(2);

        for (int i = 0; i < nums.size(); i++)
        {
            for (int j = i + 1; j < nums.size(); j++)
            {
                if (nums[i] + nums[j] == target)
                {
                    answer[0] = i;
                    answer[1] = j;
                    return answer;
                }
            }
        }
        return answer;
    }
};