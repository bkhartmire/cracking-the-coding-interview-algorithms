const { expect } = require("chai");
const {
  SetOfStacks
} = require("../../index/data_structures/stacks_and_queues");

describe("SetOfStacks", () => {
  it("should be initialized with a capacity", () => {
    const newSet = new SetOfStacks(5);
    expect(newSet.capacity).to.equal(5);
  });
  it("should create a new stack if pushing item exceeds capacity", () => {
    const newSet = new SetOfStacks(2);
    newSet.push("a");
    expect(newSet.stacks).to.deep.equal([["a"]]);
    newSet.push("b");
    expect(newSet.stacks).to.deep.equal([["a", "b"]]);
    newSet.push("c");
    expect(newSet.stacks).to.deep.equal([["a", "b"], ["c"]]);
  });
});
