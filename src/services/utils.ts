import { BLOCKSCOUT_BASE_URLS, Network } from "@/constants";

export const generateBlockscoutAddressLink = (
  network: Network,
  address: string
) => {
  if (!BLOCKSCOUT_BASE_URLS[Network[network]]) {
    return "#";
  }

  return (
    BLOCKSCOUT_BASE_URLS[network].replace("api/v2/", "") + "address/" + address
  );
};

export const generateBlockscoutTransactionLink = (
  network: Network,
  txHash: string
) => {
  if (!BLOCKSCOUT_BASE_URLS[Network[network]]) {
    return "#";
  }

  return BLOCKSCOUT_BASE_URLS[network].replace("api/v2/", "") + "tx/" + txHash;
};
