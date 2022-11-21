import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@openzeppelin/hardhat-upgrades";
import "@typechain/hardhat";
import { config } from "dotenv";
import { readFileSync } from "fs";
import "hardhat-gas-reporter";
import { task } from "hardhat/config";
import { File, NFTStorage } from "nft.storage";
import { join } from "path";
import "solidity-coverage";

config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  // eslint-disable-next-line no-restricted-syntax
  for (const account of accounts) {
    console.log(account.address);
  }
});

// Mint a nft token

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/artifacts",
  },
  typechain: {
    outDir: "src/types",
    target: "ethers-v5",
  },
  networks: {
    hardhat: {
      chainId: 1337,
      initialBaseFeePerGas: 0, // workaround from https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136 . Remove when that issue is closed.
    },
    matictestnet: {
      chainId: 80001,
      url: process.env.MATIC_PROVIDER_URL ||
        "https://speedy-nodes-nyc.moralis.io/036063875a28828fa0c00596/polygon/mumbai",
      accounts: process.env.PRIVATE_KEY !== undefined
        ? [process.env.PRIVATE_KEY]
        : [],
    },
    bsctestnet: {
      chainId: 97,
      url: process.env.BSC_PROVIDER_URL ||
        "https://speedy-nodes-nyc.moralis.io/036063875a28828fa0c00596/bsc/testnet",
      accounts: process.env.PRIVATE_KEY !== undefined
        ? [process.env.PRIVATE_KEY]
        : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
