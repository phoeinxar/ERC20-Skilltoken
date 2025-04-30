const hre = require("hardhat");

async function main() {
  const SkillToken = await hre.ethers.getContractFactory("SkillToken");
  const skillToken = await SkillToken.deploy();
  await skillToken.deployed();
  console.log("SkillToken deployed to:", skillToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
