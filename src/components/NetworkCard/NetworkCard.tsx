"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Network, NETWORK_CONFIGS } from "@/constants";
import { generateBlockscoutAddressLink } from "@/services/utils";
import { ethers } from "ethers";

interface Props {
  network: Network;
  balance: string;
  address: string;
}

// TODO: add link to blockscout explorer page for each network

const NetworkCard: React.FC<Props> = ({ network, balance, address }) => {
  return (
    <div className="w-80">
      <Card className={`bg-${NETWORK_CONFIGS[network].color}`}>
        <a href={generateBlockscoutAddressLink(network, address)}>
          <CardHeader>
            <CardDescription>{network}</CardDescription>
            <CardTitle>
              {Math.round(parseFloat(ethers.formatEther(balance)) * 10000) /
                10000}{" "}
              {NETWORK_CONFIGS[network].symbol}
            </CardTitle>
          </CardHeader>
        </a>
      </Card>
    </div>
  );
};

export default NetworkCard;
