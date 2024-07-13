import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddressInput: React.FC = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        data-form-type="other"
        data-1p-ignore
        data-lpignore="true"
        placeholder="Address 0x... or ENS .eth"
      />
      <Button type="submit">Lookup</Button>
    </div>
  );
};

export default AddressInput;
