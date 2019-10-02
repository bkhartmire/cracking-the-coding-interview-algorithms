//Singly Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  appendToTail(value) {
    const newTail = new Node(value);
    const end = this.next;
    while (this.next !== null) {
      end = end.next;
    }
    end.next = newTail;
  }

  delete() {
    this.value = this.next.value;
    this.next = this.next.next;
  }
}

// 2.1 Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?

const removeDups = headNode => {
  const hash = {};
  hash[headNode.value] = 1;
  node = headNode;
  while (node.next !== null) {
    if (hash[node.next.value]) {
      node.next = node.next.next;
    } else {
      hash[node.next.value] = 1;
    }
    node = node.next;
  }
};
//Dup Linked List
// 1 -> 2 -> 2 -> 3 -> 1 -> 4 -> 5
// const head = new Node(1);
// const two = new Node(2);
// head.next = two;
// const twoDup = new Node(2);
// two.next = twoDup;
// const three = new Node(3);
// twoDup.next = three;
// const oneDup = new Node(1);
// three.next = oneDup;
// const four = new Node(4);
// oneDup.next = four;
// const five = new Node(5);
// four.next = five;
// console.log(head)
// removeDups(head);
// console.log(head)

// 2.2 Implement an algorithm to find the kth to last element of a singly linked list.
const findKthToLastNode = (headNode, k) => {
  const elements = [headNode.value];
  let node = headNode.next;
  while (node.next !== null) {
    elements.push(node.value);
    node = node.next;
  }
  if (k === 0 || k < 0) throw new Error("k must be greater than 0");
  if (k > elements.length)
    throw new Error("k cannot be greater than the length of the linked list");
  if (k === 1) return node.value;
  return elements[elements.length - k + 1];
};

// console.log(findKthToLastNode(head, -1)); // should throw error
// console.log(findKthToLastNode(head, 0)); // should throw error
// console.log(findKthToLastNode(head, 1)); // should be 5
// console.log(findKthToLastNode(head, 2)); // should be 4
// console.log(findKthToLastNode(head, 3)); // should be 1
// console.log(findKthToLastNode(head, 4)); // should be 3
// console.log(findKthToLastNode(head, 10)); // should throw error

// 2.3 Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node.
// EXAMPLE
// Input: the node c from the linked list a -> b -> c -> d -> e
// Result: nothing is returned, but the new linked list looks like a -> b -> d -> e

// oneDup.delete();
//implemented here as well as as a class method
const deleteNode = node => {
  node.value = node.next.value;
  node.next = node.next.next;
};
// 2.4 Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x.
const partition = (headNode, x) => {
  let node = headNode;
  let lastLessThanX;
  let firstGreaterThanorEqualToX;
  let lastGreaterThanorEqualToX;
  while (node.next !== null) {
    if (node.value < x) {
      if (!lastLessThanX) {
        lastLessThanX = node;
      } else {
        lastLessThanX.next = node;
        lastLessThanX = node;
      }
    } else {
      if (!firstGreaterThanorEqualToX) {
        firstGreaterThanorEqualToX = node;
        lastGreaterThanorEqualToX = node;
      } else {
        lastGreaterThanorEqualToX.next = node;
        lastGreaterThanorEqualToX = node;
      }
    }
    node = node.next;
  }
  //final node with null next
  if (node.value < x) {
    lastLessThanX.next = node;
    lastLessThanX = node;
  } else {
    lastGreaterThanorEqualToX.next = node;
    lastGreaterThanorEqualToX = node;
  }
  //append two linked lists
  lastGreaterThanorEqualToX.next = null;
  lastLessThanX.next = firstGreaterThanorEqualToX;
};

// 12 -> 2 -> 5 -> 11 -> 2 -> 16 -> 1
// const head = new Node(12);
// const two = new Node(2);
// head.next = two;
// const five = new Node(5);
// two.next = five;
// const eleven = new Node(11);
// five.next = eleven;
// const twoDup = new Node(2);
// eleven.next = twoDup;
// const sixteen = new Node(16);
// twoDup.next = sixteen;
// const one = new Node(1);
// sixteen.next = one;
// console.log(head);
// partition(head, 10);
// console.log(head);

// 2.5 You have two numbers represented by a linked list, where each node contains a single digit.
// The digits are stored in reverse order, such that the 1's digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list.
// EXAMPLE
// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295
// Output: 2 -> 1 -> 9. That is, 912.
// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above problem.
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is 617 + 295.
// Output: 9 -> 1 -> 2. That is, 912.

// 2.6 Given a circular linked list, implement an algorithm which returns the node at the beginning of the loop.
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.
// EXAMPLE
// Input: A -> B -> C -> D -> E -> C[the same C as earlier]
// Output: C

// 2.7 Implement a function to check if a linked list is a palindrome.
