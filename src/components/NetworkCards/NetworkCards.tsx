"use client";

import { Network } from "@/constants";
import NetworkCard from "../NetworkCard/NetworkCard";
import { useEffect, useState } from "react";
import { getBlockscoutAddressDetailsForAllNetworks } from "@/services/blockscout";
import { BlockscoutAddressApiResponse } from "@/types/blockscout/api";

interface Props {
  address: string;
}

const NetworkCards: React.FC<Props> = ({ address }) => {
  const [details, setDetails] = useState<BlockscoutAddressApiResponse[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getBlockscoutAddressDetailsForAllNetworks(address);
      setDetails(response);
    })();
  }, [address]);

  return (
    <div className="my-6 flex flex-row gap-4">
      {details.map((detail) => (
        <NetworkCard
          key={detail.network}
          network={detail.network as Network}
          balance={detail.coin_balance}
          address={address}
        />
      ))}
    </div>
  );
};

export default NetworkCards;
