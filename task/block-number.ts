import { task } from "hardhat/config";

export default task(
  "block-number",
  "print the current number of blocks"
).setAction(async (taskArgs, hre) => {
  const blockNumber = await hre.ethers.provider.getBlockNumber();
  console.log("Current Block Number is " + blockNumber);
});
