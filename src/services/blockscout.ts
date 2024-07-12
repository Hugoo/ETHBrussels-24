import { BLOCKSCOUT_BASE_URLS } from "@/constants";
import { BlockscoutTransactionApiResponseMain } from "@/types/blockscout/api";

export const getLatestBlockscoutTransactionsForAllNetworks = async () => {
  let transactions = [];
  const networks = Object.keys(BLOCKSCOUT_BASE_URLS);

  for (const network of networks) {
    const response = await getLatestBlockscoutTransactions(
      // @ts-ignore
      BLOCKSCOUT_BASE_URLS[network]
    );
    transactions.push(...response.items.map((item) => ({ ...item, network })));
  }

  // TODO: check if correct
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
    }${index ? `&index=${index}` : ""}&items_count=${itemsCount || "50"}`,
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
