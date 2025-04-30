const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SkillToken", function () {
  let SkillToken, skillToken, owner, addr1;

  beforeEach(async () => {
    [owner, addr1] = await ethers.getSigners();
    SkillToken = await ethers.getContractFactory("SkillToken");
    skillToken = await SkillToken.deploy();
    await skillToken.deployed();
  });

  it("should mint tokens only by owner", async () => {
    await skillToken.mint(addr1.address, 1000);
    expect(await skillToken.balanceOf(addr1.address)).to.equal(1000);
  });

  it("should not allow non-owner to mint", async () => {
    await expect(
      skillToken.connect(addr1).mint(addr1.address, 1000)
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("should allow users to burn their tokens", async () => {
    await skillToken.mint(addr1.address, 1000);
    await skillToken.connect(addr1).burn(500);
    expect(await skillToken.balanceOf(addr1.address)).to.equal(500);
  });
});
