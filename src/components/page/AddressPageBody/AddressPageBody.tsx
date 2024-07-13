"use client";

import { isAddress } from "ethers";
import { useEffect } from "react";

import NetworkCards from "@/components/NetworkCards";
import { BLOCKSCOUT_BASE_URLS } from "@/constants";
import { getAddressDetails } from "@/services/blockscout";
import Heading from "@/components/Heading";

interface Props {
  address: string;
}

const AddressPageBody: React.FC<Props> = ({ address }) => {
  useEffect(() => {
    (async () => {
      getAddressDetails(BLOCKSCOUT_BASE_URLS.lukso, address);
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
      <p>TODO: add transaction table</p>
    </div>
  );
};

export default AddressPageBody;
