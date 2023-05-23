// Recursive
// Time complexity: O(n)
// Space complexity:
// • O(1) if we don’t consider the size of the stack for function calls.
// • O(h) if we consider the size of the stack for function calls, where
//  h is the height of the tree.

class Node {
	constructor(val) {
		this.key = val;
		this.left = null;
		this.right = null;
	}
}

var root = null;

function printPreOrder(node) {
	if (node == null) return;

	console.log(node.key + ' ');
	printPreOrder(node.left);
	printPreOrder(node.right);
}

function printInOrder(node) {
	if (node == null) return;

	printInOrder(node.left);
	console.log(node.key + ' ');
	printInOrder(node.right);
}

function printPostOrder(node) {
	if (node == null) return;

	printPostOrder(node.left);
	printPostOrder(node.right);
	console.log(node.key + ' ');
}

/**
 *         10
 *        /  \
 *       5    20
 *            / \
 *           3   7
 *          / \
 *         9   18
 */

root = new Node(10);
root.left = new Node(5);
root.right = new Node(20);
root.right.left = new Node(3);
root.right.left.left = new Node(9);
root.right.left.right = new Node(18);
root.right.right = new Node(7);

console.log('Pre order traversal of binary tree is');
printPreOrder(root);

console.log('In order traversal of binary tree is');
printInOrder(root);

console.log('Post order traversal of binary tree is');
printPostOrder(root);

// Pre Order
// root, left, right

// In Order
// left, root, right

// Post Order
// left, right, root
