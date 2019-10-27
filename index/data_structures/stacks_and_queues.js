class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(item) {
    const newItem = new Node(item);
    this.top = newItem;
  }

  pop() {
    if (this.top === null) return null;
    const item = this.top;
    this.top = item.next;
    return item;
  }

  push(item) {
    const newItem = new Node(item);
    newItem.next = this.top;
    this.top = newItem;
  }
}

class Queue {
  constructor(item) {
    const newItem = new Node(item);
    this.first = newItem;
    this.last = newItem;
  }

  enqueue(item) {
    const newItem = new Node(item);
    if (this.first === null) {
      this.first = newItem;
    } else {
      this.last.next = newItem;
    }
    this.last = newItem;
  }
}

// 3.1 Describe how you could use a single array to implement three stacks.

//array of 3 nested arrays representing stacks

// 3.2 How would you design a stack which, in addition to push and pop, also has a function min which returns the minimum element?
// Push, pop, and min should all operate in O(1) time.

//besides using Math.min(stack)??

// 3.3 Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold.
// Implement a data structure SetOfStacks that mimics this.
// SetOfStacks should be composed of several stacks and should create a new stack once the previous once exceeds capacity.
// SetOfStacks.push() and SetOfStacks.pop() should begave identically to a single stack (that is, pop() should return the same values as it would if there just a single stack).
// FOLLOW UP
// Implement a function popAt(int index) which performs a pop operation on a specific sub-stack

class SetOfStacks {
  constructor(capacity) {
    this.capacity = capacity;
    this.stacks = [[]];
  }

  push(item) {
    if (this.stacks[this.stacks.length - 1].length < this.capacity) {
      this.stacks[this.stacks.length - 1].push(item);
    } else {
      this.stacks.push([item]);
    }
  }

  pop() {
    const result = this.stacks[this.stacks.length - 1].pop();
    if (this.stacks[this.stacks.length - 1].length === 0) this.stacks.pop();
    return result;
  }

  popAt(index) {
    const result = this.stacks[index].pop();
    if (this.stacks[index].length === 0) this.stacks.splice(index, 1);
    return result;
  }
}
// const newSet = new SetOfStacks(1);
// newSet.push(1);
// newSet.push(1);
// newSet.push(1);
// console.log(newSet.stacks);
// console.log(newSet.pop());
// console.log(newSet.pop());
// console.log(newSet.stacks);

// 3.4 In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of different sizes which can slide onto any tower.
// The puzzle starts with disks sorted in ascending order of size from top to bottom (i.e., each disk sits on top of an even larger one).
// You have the following constraints:
// (1) Only one disk can be moved at a time.
// (2) A disk is slid off the top of one tower onto the next tower.
// (3) A disk can only be placed on top of a larger disk.
// Write a program to move the disks from the first tower to the last using stacks.

// 3.5 Implement a MyQueue class which implements a queue using two stacks.

// 3.6 Write a program to sort a stack in ascending order (with biggest items on top).
// You may use at most one additional stack to hold items, but you may not copy the elements into any other data strcture (such as an array).
// The stack supports the following operations: push, pop, peek, and isEmpty.

// 3.7 An animal shelter holds only dogs and cats, and operates on a strictly "first in, first out" basis.
// People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat
// (and will receive the oldest animal of that type). They cannot select which specific animal they would like.
// Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog and dequeueCat.
// You may use the built-in LinkedList data structure.

module.exports = { SetOfStacks };
