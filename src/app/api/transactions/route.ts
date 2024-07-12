import { getLatestBlockscoutTransactionsForAllNetworks } from "@/services/blockscout";

export async function GET() {
  const data = await getLatestBlockscoutTransactionsForAllNetworks();

  return Response.json({ items: data });
}
