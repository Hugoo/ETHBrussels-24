import { Network } from "@/constants";
import NetworkCard from "../NetworkCard/NetworkCard";

interface Props {
  address: string;
}

const NetworkCards: React.FC<Props> = ({ address }) => {
  // TODO: fetch network balances

  return (
    <div>
      <NetworkCard network={Network.base} balance="3232$" address={address} />
      <NetworkCard
        network={Network.lukso}
        balance="0.4343$"
        address={address}
      />
    </div>
  );
};

export default NetworkCards;
