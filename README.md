1>
yarn add ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers
ethers.js, chai, and hardhat.
2>
npx hardhat
test: This folder contains a test script written in Chai and it is used to test our smart contract

hardhat.config.js: This file contains the configuration for Hardhat

scripts: This folder contains a sample script to show to deploy a smart contract

contracts: This is the folder, which includes the files, in which we write our smart contract code.

3>
npx hardhat compile

4>
npx hardhat node

5>
npx hardhat run scripts/deploy.js --network localhost
