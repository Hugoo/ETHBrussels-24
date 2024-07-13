import { useEffect, useState } from "react";
import Link from "next/link";

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
import { generateBlockscoutTransactionLink } from "@/services/utils";
import { BlockscoutTransactionApiResponse } from "@/types/blockscout/api";
import { Network } from "@/constants";
import Heading from "../Heading";

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
      <Heading level={1}>
        Latest Transactions - <i>on many chains ✨</i>
      </Heading>

      <Table>
        <TableCaption>A list of recent transactions.</TableCaption>
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
            <TableRow key={tx.hash}>
              <TableCell className="font-medium">{tx.network}</TableCell>
              <TableCell>
                <Link href={`/address/${tx.from.hash}`} target="_blank">
                  <code>{tx.from.hash}</code>
                </Link>
              </TableCell>
              <TableCell>{tx.status}</TableCell>
              <TableCell className="text-right">
                <Link
                  href={generateBlockscoutTransactionLink(
                    tx.network as Network,
                    tx.hash
                  )}
                  target="_blank"
                >
                  <code>{tx.hash}</code>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionsList;
