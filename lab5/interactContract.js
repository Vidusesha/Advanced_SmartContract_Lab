// Inject environemnt variable in this file
require("dotenv").config("./env");

// Import Web3
const Web3 = require("web3");

// Import abi
const abi = require("./contract.json");

// create web3 instance
const web3 = new Web3(
  new Web3.providers.HttpProvider(process.env.URI)
);

// add account to wallet
web3.eth.accounts.wallet.add("0x" + process.env.PRIVATE_KEY);

// get contract instance
const bankContract = new web3.eth.Contract(
  abi,
  process.env.CONTRACT_ADDRESS
);


bankContract.methods
      .createAccount("Mary" , 100)
      .send({ from: web3.eth.accounts.wallet[0].address});


 //read the value of number
 bankContract.methods
  .checkStudent(1)
  .call()
  .then((result) => {
    console.log(result[0]);
  });