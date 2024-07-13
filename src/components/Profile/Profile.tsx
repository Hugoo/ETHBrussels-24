import { useAccount, useEnsName, useEnsAvatar } from "wagmi";

const Profile: React.FC = () => {
  const { address } = useAccount();
  const { data: name } = useEnsName({ address });
  //   const { data: avatar } = useEnsAvatar({ name });

  return (
    <div className="flex items-center gap-2">
      <img
        alt="avatar"
        src={avatar || "https://docs.ens.domains/fallback.svg"}
        className="w-8 h-8 rounded-full"
      />
      <div className="flex flex-col gap-0 leading-3 pr-10">
        {name && <span className="font-bold">{name}</span>}
        {/* <span>{formatAddress(address)}</span> */}
      </div>
    </div>
  );
};

export default Profile;
