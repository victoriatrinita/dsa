/**
 * Title: Fractional Knapsack
 * Difficulty: Medium
 * Link: https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1
 */

// Solution 1
// Time complexity: O(n log n)
// Space complexity: O(n)

/**
 * Pseudocode:
 * 1. Calculate the valuableness, that is, ratio (profit/weight) for each item
 * 2. Sort items based on ratio in descending order
 * 3. Initialise maximum value
 * 4. Do the following for every item in the sorted order:
 *     - If the weight of the current item is less than or equal to the remaining capacity,
 *       add the value of that item to maximum value
 *     - Else add the current item as much as we can and break out of the loop
 * 5. Return maximum value
 */

class Solution {
	fractionalKnapsack(W, arr, n) {
		function compare(a, b) {
			let r1 = a.value / a.weight;
			let r2 = b.value / b.weight;
			return r2 - r1;
		}

		arr.sort(compare);
		let maxVal = 0;

		for (let i = 0; i < n; i++) {
			if (arr[i].weight <= W) {
				W -= arr[i].weight;
				maxVal += arr[i].value;
			} else {
				maxVal += (W / arr[i].weight) * arr[i].value;
				return maxVal;
			}
		}
		return maxVal;
	}
}
