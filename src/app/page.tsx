"use client";

import AddressInput from "@/components/AddressInput";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-6">
      <p>
        PolyScout is an attempt to demonstrate the versatility of the Blockscout
        API across multiple networks, supported by the ENS protocol.
      </p>
      <div className="flex items-center justify-center h-96">
        <AddressInput />
      </div>
      <strong>Try with:</strong>
      <br />
      <ul className="pt-4">
        <li>
          <Link
            className="hover:underline"
            href="/address/0x95E9BeDBc090da23Fd2975C38505B59c24143a9d"
          >
            ebibapiri.eth
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline"
            href="/address/0xFdf6576E21641A65bCceA63B576B3D29FFC2D12f"
          >
            hugom.eth
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline"
            href="/address/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
          >
            vitalik.eth
          </Link>
        </li>
      </ul>
    </div>
  );
}
