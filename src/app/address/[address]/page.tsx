import AddressPageBody from "@/components/page/AddressPageBody";

const AddressPage = ({ params }: { params: { address: string } }) => {
  return <AddressPageBody address={params.address} />;
};

export default AddressPage;
