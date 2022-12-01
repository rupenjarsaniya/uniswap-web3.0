async function main() {
    const TransactionFactory = await hre.ethers.getContractFactory(
        "Transactions"
    );
    const transactionContract = await TransactionFactory.deploy();
    await transactionContract.deployed();
    console.log(`Transactions deployed to ${transactionContract.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

// 0x51F69D819A108ad63DeeE31Dcbe5831a8E2012f3
