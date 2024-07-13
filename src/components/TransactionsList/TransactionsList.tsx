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

import { generateBlockscoutTransactionLink } from "@/services/utils";
import { BlockscoutTransactionApiResponse } from "@/types/blockscout/api";
import { Network } from "@/constants";
import AddressFormat from "../AddressFormat";
import ChainIcon from "../ChainIcon";

interface Props {
  transactions: BlockscoutTransactionApiResponse[];
}

const TransactionsList: React.FC<Props> = ({ transactions }) => {
  return (
    <div>
      <Table>
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
              <TableCell className="font-medium text-center">
                <ChainIcon network={tx.network} />
              </TableCell>
              <TableCell>
                <Link href={`/address/${tx.from.hash}`} target="_blank">
                  <AddressFormat address={tx.from.hash} />
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
