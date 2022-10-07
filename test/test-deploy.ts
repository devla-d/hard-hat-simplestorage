import { ethers } from "hardhat";
import { assert } from "chai";
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types";

describe("SimpleStorage", function () {
  let SimpleStorageFactory: SimpleStorage__factory,
    SimpleStorage: SimpleStorage;
  beforeEach(async function () {
    SimpleStorageFactory = (await ethers.getContractFactory(
      "SimpleStorage"
    )) as SimpleStorage__factory;
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
  it("Should add person when we call addPerson", async function () {
    const expectedValue = "sammy,20";
    const txResponse = await SimpleStorage.addPerson("sammy", 20);
    await txResponse.wait(1);
    const perosn = await SimpleStorage.getPerson();
    console.log(perosn);
    assert.equal(perosn.toString(), expectedValue);
  });
});
