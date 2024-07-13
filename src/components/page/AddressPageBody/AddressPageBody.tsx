"use client";

import { isAddress } from "ethers";
import { useEffect, useState } from "react";

import NetworkCards from "@/components/NetworkCards";
import { BLOCKSCOUT_BASE_URLS } from "@/constants";
import {
  getAddressDetails,
  getBlockscoutAddressTransactionsForAllNetworks,
} from "@/services/blockscout";
import Heading from "@/components/Heading";
import { Transaction } from "ethers";
import TransactionsList from "@/components/TransactionsList";
import { BlockscoutTransactionApiResponse } from "@/types/blockscout/api";

interface Props {
  address: string;
}

const AddressPageBody: React.FC<Props> = ({ address }) => {
  const [transactions, setTransactions] = useState<
    BlockscoutTransactionApiResponse[]
  >([]);

  useEffect(() => {
    (async () => {
      getBlockscoutAddressTransactionsForAllNetworks(address).then((data) => {
        setTransactions(data);
      });
    })();
  }, []);

  if (!isAddress(address)) {
    return (
      <div>
        <h1>Invalid Address</h1>
        <p>{address}</p>
      </div>
    );
  }

  return (
    <div>
      <Heading level={1}>Address</Heading>
      <p>{address}</p>
      <Heading level={2}>Stats</Heading>
      <NetworkCards address={address} />
      <Heading level={2}>Transactions</Heading>
      <TransactionsList transactions={transactions} />
    </div>
  );
};

export default AddressPageBody;
