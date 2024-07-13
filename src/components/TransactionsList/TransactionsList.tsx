import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { getLatestBlockscoutTransactionsForAllNetworks } from "@/services/blockscout";
import { BlockscoutTransactionApiResponse } from "@/types/blockscout/api";
import { generateBlockscoutTransactionLink } from "@/services/utils";
import { Network } from "@/constants";

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
      <h1 className="text-h1">
        Latest Transactions - <i>on many chains ✨</i>
      </h1>

      <Table>
        <TableCaption>A list of recent on transactions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Network</TableHead>
            <TableHead>From</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Hash</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((tx) => (
            <TableRow
              key={tx.hash}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => {
                window.open(
                  generateBlockscoutTransactionLink(
                    tx.network as Network,
                    tx.hash
                  ),
                  "_blank"
                );
              }}
            >
              <TableCell className="font-medium">{tx.network}</TableCell>
              <TableCell>{tx.from.hash}</TableCell>
              <TableCell>{tx.status}</TableCell>
              <TableCell className="text-right">
                <code>{tx.hash}</code>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionsList;
