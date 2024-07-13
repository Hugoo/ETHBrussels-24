import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isAddress } from "ethers";
import { useState } from "react";

const AddressInput: React.FC = () => {
  const [address, setAddress] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isAddress(address)) {
      window.location.href = `/address/${address}`;
    }
  };

  return (
    <form
      className="flex flex-col w-full max-w-lg items-center space-x-2"
      onSubmit={handleSubmit}
    >
      <Input
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        data-form-type="other"
        data-1p-ignore
        data-lpignore="true"
        placeholder="Address 0x... or ENS .eth"
      />
      <br />
      <Button onClick={handleSubmit} type="submit">
        Lookup
      </Button>
    </form>
  );
};

export default AddressInput;
