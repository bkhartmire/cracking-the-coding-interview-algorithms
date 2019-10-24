const { expect } = require("chai");
const {
  SetOfStacks
} = require("../../index/data_structures/stacks_and_queues");

describe("SetOfStacks", () => {
  it("should be initialized with a capacity", () => {
    const newSet = new SetOfStacks(5);
    expect(newSet.capacity).to.equal(5);
  });
});
