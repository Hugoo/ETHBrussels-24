import { useAccount, useEnsName, useEnsAvatar } from "wagmi";

interface Props {
  address: `0x${string}`;
}

const Profile: React.FC<Props> = ({ address }) => {
  const { data: name } = useEnsName({ address });
  // const { data: avatar } = useEnsAvatar({ name });

  return (
    <div className="flex items-center gap-2">
      <img
        alt="avatar"
        src={"https://docs.ens.domains/fallback.svg"}
        className="w-8 h-8 rounded-full"
      />
      <div className="flex flex-col gap-0 text-h2 leading-3 pr-10">
        {name && <span className="font-bold">{name}</span>}
        {!name && <span>{address}</span>}
      </div>
    </div>
  );
};

export default Profile;
