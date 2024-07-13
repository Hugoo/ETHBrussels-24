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
import { formatEther } from "ethers";

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
            <TableHead>To</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((tx) => (
            <TableRow key={tx.hash}>
              <TableCell className="font-medium text-center">
                <Link
                  href={generateBlockscoutTransactionLink(
                    tx.network as Network,
                    tx.hash
                  )}
                  target="_blank"
                >
                  <ChainIcon network={tx.network} />
                </Link>
              </TableCell>
              <TableCell>
                <Link href={`/address/${tx.from.hash}`} target="_blank">
                  <AddressFormat address={tx.from.hash} />
                </Link>
              </TableCell>
              <TableCell>
                <Link href={`/address/${tx.to?.hash}`} target="_blank">
                  <AddressFormat address={tx.to?.hash} />
                </Link>
              </TableCell>
              <TableCell>{formatEther(tx.value || "0")} ETH</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionsList;
