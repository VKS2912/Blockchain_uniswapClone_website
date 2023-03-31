import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xcB58c7F46512a7020E9264a98859dDfb1E7745E4"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/Mv00Pws2vXF67el8rWDlCPQk1qT4nPGu",
  },
};