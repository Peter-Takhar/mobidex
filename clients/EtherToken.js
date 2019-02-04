import { ContractDefinitionLoader } from 'web3-contracts-loader';
import { time } from '../lib/decorators/cls';

const TokenABI = require('../abi/WETH9.json');

let CONTRACT = null;

export default class EtherToken {
  constructor(ethereumClient, address) {
    this.ethereumClient = ethereumClient;
    this.address = address;
  }

  @time
  async getContract() {
    if (!CONTRACT) {
      const networkId = await this.ethereumClient.getNetworkId();
      const account = await this.ethereumClient.getAccount();
      CONTRACT = ContractDefinitionLoader({
        web3: this.ethereumClient.getWeb3(),
        contractDefinitions: {
          WETH9: {
            ...TokenABI,
            networks: {
              [networkId]: {
                address: this.address
              }
            }
          }
        },
        options: {
          from: account
        }
      }).WETH9;
    }

    return CONTRACT;
  }

  @time
  async depositTx() {
    const contract = await this.getContract();
    return contract.methods.deposit().encodeABI();
  }

  @time
  async withdrawTx(wad) {
    const contract = await this.getContract();
    return contract.methods.withdraw(wad).encodeABI();
  }
}