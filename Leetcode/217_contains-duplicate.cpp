/*
Number: 217
Title: Contains Duplicate
Difficulty: Easy
Link: https://leetcode.com/problems/contains-duplicate
*/

// Solution 1
// Time complexity: O(n)
// Space complexity: O(n)

class Solution
{
public:
    bool containsDuplicate(vector<int> &nums)
    {

        unordered_map<int, int> occurrences;

        for (int i = 0; i < nums.size(); i++)
        {
            auto itr = occurrences.find(nums[i]);

            if (itr != occurrences.end())
                return true;
            occurrences.insert({nums[i], 0});
        }
        return false;
    }
};
