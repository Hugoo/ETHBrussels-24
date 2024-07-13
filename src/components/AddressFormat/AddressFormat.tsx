import { useEnsName } from "wagmi";

interface Props {
  address?: string;
}

const AddressFormat: React.FC<Props> = ({ address }) => {
  const address0x = address as any;
  const { data: name } = useEnsName({ address: address0x });

  if (!address) {
    return null;
  }

  if (!name) {
    return <code>{address}</code>;
  }

  return <code className="font-semibold">{name}</code>;
};

export default AddressFormat;
