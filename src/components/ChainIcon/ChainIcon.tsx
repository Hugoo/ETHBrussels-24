import { Network } from "@/constants";

interface Props {
  network: Network;
}

const ChainIcon: React.FC<Props> = ({ network }) => {
  return (
    <img
      className="mx-auto"
      src={`/imgs/icons/${network}.svg`}
      width={30}
      alt={network}
    />
  );
};

export default ChainIcon;
