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

  useEffect(() => {
    (async () => {
      const txs = await getLatestBlockscoutTransactionsForAllNetworks();

      setTransactions(txs);
    })();
  }, []);

  return (
    <>
      <Heading level={1}>
        Latest Transactions - <i>on many chains ✨</i>
      </Heading>
      <TransactionsList transactions={transactions} />
    </>
  );
}
