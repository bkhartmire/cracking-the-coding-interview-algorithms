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
    console.log("inside before each");
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
    it("should", () => {});
  });
  describe("deleteNode", () => {
    it("should", () => {});
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
