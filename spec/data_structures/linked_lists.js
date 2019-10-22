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
      expect(two.next).to.deep.equal(four);
    });
  });

  describe("partition", () => {
    it("should", () => {});
  });

  describe("sumLinkedLists", () => {
    it("should", () => {});
  });

  describe("getLoopedNode", () => {
    it("should", () => {});
  });

  describe("isPalindrome", () => {
    it("should", () => {});
  });
});
