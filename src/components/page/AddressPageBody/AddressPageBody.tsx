"use client";

import { BLOCKSCOUT_BASE_URLS } from "@/constants";
import { getAddressDetails } from "@/services/blockscout";
import { isAddress } from "ethers";
import { useEffect } from "react";

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
      <h1>Address</h1>
      <p>{address}</p>
    </div>
  );
};

export default AddressPageBody;
