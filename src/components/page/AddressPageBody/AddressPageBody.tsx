"use client";

import { isAddress } from "ethers";
import { useEffect } from "react";

import NetworkCards from "@/components/NetworkCards";
import { BLOCKSCOUT_BASE_URLS } from "@/constants";
import { getAddressDetails } from "@/services/blockscout";

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
      <h1 className="text-h1">Address</h1>
      <p>{address}</p>
      <h2 className="text-h2">Stats</h2>
      <NetworkCards address={address} />
      <h2 className="text-h2">Transactions</h2>
      <p>TODO: add transaction table</p>
    </div>
  );
};

export default AddressPageBody;
