const { ethers, run, network } = require('hardhat')
require("dotenv").config();

/**
 * main asyc function for deploying contract
 */
async function main() {
    const contractFactory = await ethers.getContractFactory('SimpleStorage')
    console.log('Deploying contarct....')
    const contract = await contractFactory.deploy()
    await contract.deployed()
    console.log(contract.address)
     
    if (network.config.chainId === 5 && process.env.ETHERSCANAPIKEY) {
        await contract.deployTransaction.wait(6)
        await verify(contract.address, []);
    }

    const currentvalue = await contract.get()
    console.log(`Current value is ${currentvalue.toString()}`)

    const txRes = await contract.set(10)
    await txRes.wait(1)

    const updatedValue = await contract.get()
    console.log(`updatedValue value is ${updatedValue.toString()}`)

   await contract.addPerson("sammy",19)
   console.log("ading person:::::::::::")

   const people = await contract.getPerson()
   console.log(`people : ${people}`)


}

/**
 * verifiying contract after deploying
 * @param {*} contractAddress 
 * @param {*} arg 
 */
const verify = async(contractAddress, arg) => {
    console.log('verifing contract ::::')
    try {
        await run('verify:verify', {
            address: contractAddress,
            constructorArguments: arg
        })
    } catch (e) {
        console.log(e)

    }


}


main()
    .then(() => process.exit())
    .catch((error) => console.log(error))