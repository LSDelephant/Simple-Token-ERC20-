const { expect } = require("chai");

describe("MyToken", function () {
  it("видає початковий баланс власнику", async function () {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("MyToken");
    const token = await Token.deploy(1000);
    await token.deployed();

    expect(await token.balanceOf(owner.address)).to.equal(1000);
  });
});
