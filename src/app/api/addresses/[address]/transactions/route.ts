import { isAddress } from "ethers";

import { getBlockscoutAddressTransactionsForAllNetworks } from "@/services/blockscout";

export async function GET(
  request: Request,
  { params }: { params: { address: string } }
) {
  if (!isAddress(params.address)) {
    // TODO: add proper 404 status code
    return Response.json({ error: "Address is not valid" });
  }

  const data = await getBlockscoutAddressTransactionsForAllNetworks(
    params.address
  );

  return Response.json({ data });
}
