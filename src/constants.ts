export enum Network {
  base = "base",
  lukso = "lukso",
}

export const BLOCKSCOUT_BASE_URLS: Record<Network, string> = {
  [Network.base]: "https://base.blockscout.com/api/v2/",
  [Network.lukso]: "https://explorer.execution.mainnet.lukso.network/api/v2/",
  // TODO: add more base URLs here + maybe add backend version number
};
