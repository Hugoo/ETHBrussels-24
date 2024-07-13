import { BLOCKSCOUT_BASE_URLS } from "@/constants";
import {
  BlockscoutAddressApiResponse,
  BlockscoutTransactionApiResponse,
  BlockscoutTransactionApiResponseMain,
} from "@/types/blockscout/api";

export const getBlockscoutAddressDetailsForAllNetworks = async (
  address: string
) => {
  let networksDetails: BlockscoutAddressApiResponse[] = [];

  const networks = Object.keys(BLOCKSCOUT_BASE_URLS);

  for (const network of networks) {
    const details = await getAddressDetails(
      // @ts-ignore
      BLOCKSCOUT_BASE_URLS[network],
      address
    );

    if (details) {
      networksDetails.push({ ...details, network });
    }
  }

  return networksDetails;
};

export const getAddressDetails = async (
  networkBaseUrl: string,
  address: string
): Promise<BlockscoutAddressApiResponse | null> => {
  const response = await fetch(`${networkBaseUrl}addresses/${address}`, {
    next: { revalidate: 10 },
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  console.log(data);
  return data as BlockscoutAddressApiResponse;
};

//

export const getBlockscoutAddressTransactionsForAllNetworks = async (
  address: string
) => {
  let transactions: BlockscoutTransactionApiResponse[] = [];

  const networks = Object.keys(BLOCKSCOUT_BASE_URLS);

  for (const network of networks) {
    const txs = await getAddressTransactions(
      // @ts-ignore
      BLOCKSCOUT_BASE_URLS[network],
      address
    );

    if (txs) {
      for (const tx of txs) {
        transactions.push({ ...tx, network });
      }
    }
  }

  transactions.sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  return transactions;
};

export const getAddressTransactions = async (
  networkBaseUrl: string,
  address: string
): Promise<BlockscoutTransactionApiResponse[] | null> => {
  const response = await fetch(
    `${networkBaseUrl}addresses/${address}/transactions`,
    {
      next: { revalidate: 10 },
    }
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data.items as BlockscoutTransactionApiResponse[];
};

//

export const getLatestBlockscoutTransactionsForAllNetworks = async () => {
  // @ts-ignore
  let transactions = [];
  const networks = Object.keys(BLOCKSCOUT_BASE_URLS);

  const promises = [];

  for (const network of networks) {
    promises.push(
      getLatestBlockscoutTransactions(
        // @ts-ignore
        BLOCKSCOUT_BASE_URLS[network]
      )
    );
  }

  const responses = await Promise.all(promises);

  console.log(responses);

  let i = 0;
  for (const network of networks) {
    transactions.push(
      ...responses[i].items.map((item) => ({ ...item, network }))
    );
    i++;
  }

  transactions.sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  return transactions;
};

export const getLatestBlockscoutTransactions = async (
  networkBaseUrl: string,
  blockNumber?: string | null,
  index?: string | null,
  itemsCount?: string | null
): Promise<BlockscoutTransactionApiResponseMain> => {
  const response = await fetch(
    `${networkBaseUrl}transactions?filter=validated${
      blockNumber ? `&block_number=${blockNumber}` : ""
    }${index ? `&index=${index}` : ""}&items_count=${itemsCount || "10"}`,
    {
      next: { revalidate: 10 },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data as BlockscoutTransactionApiResponseMain;
};
