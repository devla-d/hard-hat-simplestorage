const { ethers } = require("hardhat");
const { assert, expect } = require("chai");

describe("SimpleStorage", function () {
  let SimpleStorageFactory, SimpleStorage;
  beforeEach(async function () {
    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    SimpleStorage = await SimpleStorageFactory.deploy();
  });
  it("Should start with a favorite number 0f 0", async function () {
    const currentValue = await SimpleStorage.get();
    const expectedValue = "0";
    assert.equal(currentValue.toString(), expectedValue);
  });
  it("Should update when we call store", async function () {
    const expectedValue = "20";
    const txResponse = await SimpleStorage.set(expectedValue);
    await txResponse.wait(1);
    const updatedValue = await SimpleStorage.get();
    assert.equal(updatedValue.toString(), expectedValue);
  });
});
