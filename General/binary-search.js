/**
 * Assume array is sorted
 * Return the index of target element
 */

const arr = ['a', 'b', 'c', 'x', 'y', 'z'];

// Iterative
// Time complexity: O(log n)
// Space complexity: O(1)

function binarySearchI(arr, target) {
	let start = 0;
	let end = arr.length - 1;
	let mid;
	while (start <= end) {
		mid = Math.floor((start + end) / 2);
		if (arr[mid] < target) start = mid + 1;
		else if (arr[mid] > target) end = mid - 1;
		else return mid;
	}
}

console.log(binarySearchI(arr, 'x'));
