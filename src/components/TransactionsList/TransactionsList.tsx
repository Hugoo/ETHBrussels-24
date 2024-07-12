import { getLatestBlockscoutTransactionsForAllNetworks } from "@/services/blockscout";
import { BlockscoutTransactionApiResponse } from "@/types/blockscout/api";
import { useEffect, useState } from "react";

const TransactionsList: React.FC = () => {
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
    <div>
      <h1>Transactions</h1>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.hash}>
            {tx.network} - <code>{tx.hash}</code> - {tx.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
