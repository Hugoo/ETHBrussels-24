"use client";

import Heading from "@/components/Heading";
import TransactionsList from "@/components/TransactionsList";
import { getLatestBlockscoutTransactionsForAllNetworks } from "@/services/blockscout";
import { BlockscoutTransactionApiResponse } from "@/types/blockscout/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [transactions, setTransactions] = useState<
    BlockscoutTransactionApiResponse[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const txs = await getLatestBlockscoutTransactionsForAllNetworks();

      setTransactions(txs);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <Heading level={1}>
        Latest Transactions - <i>on many chains ✨</i>
      </Heading>
      {isLoading ? (
        <p className="text-center text-3xl">Loading...</p>
      ) : (
        <TransactionsList transactions={transactions} />
      )}
    </>
  );
}
