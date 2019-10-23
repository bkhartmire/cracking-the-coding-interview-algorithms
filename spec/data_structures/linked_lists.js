const { expect } = require("chai");
const {
  Node,
  removeDups,
  findKthToLastNode,
  deleteNode,
  partition,
  sumLinkedLists,
  getLoopedNode,
  isPalindrome
} = require("../../index/data_structures/linked_lists");
let linkedList;
describe("linked list algorithms", () => {
  beforeEach(() => {
    linkedList = new Node(1);
  });

  describe("removeDups", () => {
    it("should remove duplicates from an unsorted linked list", () => {
      //Dup Linked List
      // 1 -> 2 -> 2 -> 3 -> 1 -> 4 -> 5
      const two = new Node(2);
      linkedList.next = two;
      const twoDup = new Node(2);
      two.next = twoDup;
      const three = new Node(3);
      twoDup.next = three;
      const oneDup = new Node(1);
      three.next = oneDup;
      const four = new Node(4);
      oneDup.next = four;
      const five = new Node(5);
      four.next = five;
      removeDups(linkedList);
      expect(two.next).to.deep.equal(three);
      expect(three.next).to.deep.equal(four);
    });
  });

  describe("findKthToLastNode", () => {
    it("should find the kth to last element of a singly linked list", () => {
      //Linked List
      // 1 -> 2 -> 3 -> 4 -> 5
      const two = new Node(2);
      linkedList.next = two;
      const three = new Node(3);
      two.next = three;
      const four = new Node(4);
      three.next = four;
      const five = new Node(5);
      four.next = five;
      expect(findKthToLastNode(linkedList, 1)).to.equal(5);
      expect(findKthToLastNode(linkedList, 2)).to.equal(4);
      expect(findKthToLastNode(linkedList, 3)).to.equal(3);
      expect(findKthToLastNode(linkedList, 4)).to.equal(2);
      expect(findKthToLastNode(linkedList, 5)).to.equal(1);
    });
    it("should throw for invalid input", () => {
      expect(() => findKthToLastNode(linkedList, -1)).to.throw;
      expect(() => findKthToLastNode(linkedList, 0)).to.throw;
      expect(() => findKthToLastNode(linkedList, 10)).to.throw;
    });
  });

  describe("deleteNode", () => {
    it("should delete a node in the middle of a singly linked list, given only access to that node", () => {
      //Linked List
      // 1 -> 2 -> 3 -> 4
      const two = new Node(2);
      linkedList.next = two;
      const three = new Node(3);
      two.next = three;
      const four = new Node(4);
      three.next = four;
      expect(two.next).to.deep.equal(three);
      deleteNode(three);
      //Linked List should become
      // 1 -> 2 -> 4
      expect(two.next).to.deep.equal(four);
    });
  });

  describe("partition", () => {
    it("should partition a linked list around a value x", () => {
      // 1 -> 12 -> 2 -> 5 -> 11 -> 2 -> 16 -> 1
      const twelve = new Node(12);
      linkedList.next = twelve;
      const two = new Node(2);
      twelve.next = two;
      const five = new Node(5);
      two.next = five;
      const eleven = new Node(11);
      five.next = eleven;
      const twoDup = new Node(2);
      eleven.next = twoDup;
      const sixteen = new Node(16);
      twoDup.next = sixteen;
      const oneDup = new Node(1);
      sixteen.next = oneDup;
      partition(linkedList, 10);
      //Linked List should become
      //1 -> 2-> 5 -> 2 -> 1 -> 12 -> 11 -> 16
      expect(linkedList.next).to.deep.equal(two);
      expect(two.next).to.deep.equal(five);
      expect(five.next).to.deep.equal(twoDup);
      expect(twoDup.next).to.deep.equal(oneDup);
      expect(oneDup.next).to.deep.equal(twelve);
      expect(twelve.next).to.deep.equal(eleven);
      expect(eleven.next).to.deep.equal(sixteen);
    });
  });

  describe("sumLinkedLists", () => {
    it("should return new linked list that represents sum of two linked list inputs with digits represented in reverse order", () => {
      // EXAMPLE
      // Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295
      // Output: 2 -> 1 -> 9. That is, 912.
      const linkedListA = new Node(7);
      linkedListA.next = new Node(1);
      linkedListA.next.next = new Node(6);
      const linkedListB = new Node(5);
      linkedListB.next = new Node(9);
      linkedListB.next.next = new Node(2);
      const expected = new Node(2);
      expected.next = new Node(1);
      expected.next.next = new Node(9);
      const actual = sumLinkedLists(linkedListA, linkedListB);
      expect(actual).to.deep.equal(expected);
    });
  });

  describe("getLoopedNode", () => {
    it("should return node at the beginning of loop in a circular linked list", () => {
      // EXAMPLE
      // Input: A -> B -> C -> D -> E -> C[the same C as earlier]
      // Output: C
      const head = new Node("A");
      const b = new Node("B");
      head.next = b;
      const c = new Node("C");
      b.next = c;
      const d = new Node("D");
      c.next = d;
      const e = new Node("E");
      d.next = e;
      e.next = c;
      expect(getLoopedNode(head)).to.deep.equal(c);
    });
  });

  describe("isPalindrome", () => {
    it("should", () => {});
  });
});
