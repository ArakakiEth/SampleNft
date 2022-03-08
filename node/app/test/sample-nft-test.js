const {
  expect,
} = require("chai");

const {
  ethers,
} = require("hardhat");

describe("SampleNft", () => {
  beforeEach(async () => {
    signers = await ethers.getSigners();

    const contractFactory = await ethers.getContractFactory("SampleNft", {
      signer: signers[0],
    });

    contract = await contractFactory.deploy();
  });

  it("should be able to return token name by token id", async () => {
    await contract.deployed();

    await contract.getName();
  });
});

