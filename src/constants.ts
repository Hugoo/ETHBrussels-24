export enum Network {
  ethereum = "ethereum",
  base = "base",
  lukso = "lukso",
  optimism = "optimism",
  zora = "zora",
}

export const NETWORK_CONFIGS: Record<
  Network,
  { color: string; symbol: string }
> = {
  // NOTE: don't forget to add colors to tailwind safelist
  // not the best... but it works for now
  [Network.zora]: { color: "purple-300", symbol: "ETH" },
  [Network.ethereum]: { color: "blue-300", symbol: "ETH" },
  [Network.base]: { color: "blue-600", symbol: "ETH" },
  [Network.lukso]: { color: "pink-300", symbol: "LYX" },
  [Network.optimism]: { color: "red-300", symbol: "ETH" },
};

export const BLOCKSCOUT_BASE_URLS: Record<Network, string> = {
  [Network.zora]: "https://explorer.zora.energy/api/v2/",
  [Network.ethereum]: "https://eth.blockscout.com/api/v2/",
  [Network.base]: "https://base.blockscout.com/api/v2/",
  [Network.lukso]: "https://explorer.execution.mainnet.lukso.network/api/v2/",
  [Network.optimism]: "https://optimism.blockscout.com/api/v2/",
  // TODO: add more base URLs here + maybe add backend version number
};
