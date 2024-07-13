import { isAddress } from "ethers";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getEnsAddress } from "@/services/enstate";

const AddressInput: React.FC = () => {
  const [addressOrEns, setAddressOrEns] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (error) {
      window.location.href = `https://app.ens.domains/${addressOrEns}`;
    }

    setError("");
    if (isAddress(addressOrEns)) {
      window.location.href = `/address/${addressOrEns}`;
    }

    try {
      setStatus("Looking up ENS address...");
      const address = await getEnsAddress(addressOrEns);

      window.location.href = `/address/${address}`;
    } catch (e) {
      // not valid ENS
      setStatus("");
      setError("Invalid address or ENS name");
      console.error(e);
    }
  };

  return (
    <form
      className="flex flex-col w-full items-center space-x-2"
      onSubmit={handleSubmit}
    >
      <Input
        value={addressOrEns}
        onChange={(e) => {
          setError("");
          setAddressOrEns(e.target.value);
        }}
        data-form-type="other"
        data-1p-ignore
        data-lpignore="true"
        placeholder="Address 0x... or ENS .eth"
      />
      <br />
      <Button onClick={handleSubmit} type="submit">
        {error ? "Get this ENS" : "Lookup"}
      </Button>
      <div className="pt-5">
        <span className="text-slate-400">{status}</span>
        <span className="text-red-400">{error}</span>
      </div>
    </form>
  );
};

export default AddressInput;
