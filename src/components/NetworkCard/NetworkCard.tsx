"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Network } from "@/constants";
import { generateBlockscoutAddressLink } from "@/services/utils";

interface Props {
  network: Network;
  balance: string;
  address: string;
}

// TODO: add link to blockscout explorer page for each network

const NetworkCard: React.FC<Props> = ({ network, balance, address }) => {
  return (
    <div className="w-80">
      <Card>
        <a href={generateBlockscoutAddressLink(network, address)}>
          <CardHeader>
            <CardDescription>{network}</CardDescription>
            <CardTitle>{balance}</CardTitle>
          </CardHeader>
        </a>
      </Card>
    </div>
  );
};

export default NetworkCard;
