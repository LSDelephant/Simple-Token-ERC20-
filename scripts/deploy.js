async function main() {
  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy(1000);
  await token.deployed();
  console.log("💰 MyToken deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
