import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";

import Providers from "@/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "PolyScout 🔗 - A Universal Chain explorer",
  description: "Built with Blockscout API and ENS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = headers().get("cookie");

  return (
    <html lang="en">
      <body className="text-gray-800">
        <Providers cookie={cookie}>
          <header className="bg-blue-300 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8">
              <div className="flex items-center justify-center">
                <div className="grow text-left">
                  <h1 className="text-3xl font-bold">
                    <Link className="hover:text-gray-300" href="/">
                      PolyScout 🔗
                    </Link>
                  </h1>
                </div>
                <div className="text-lef">
                  <Link className="hover:text-gray-300" href="/transactions">
                    Transactions
                  </Link>{" "}
                  -{" "}
                  <a
                    className="hover:text-gray-300"
                    href="https://github.com/Hugoo/ETHBrussels-24?tab=readme-ov-file#api"
                  >
                    API
                  </a>
                </div>
              </div>
            </div>
          </header>
          <main className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8">
            {children}
          </main>
          <footer className="bg-[#F8F7F4]">
            <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-12 sm:px-6 lg:px-8">
              <div className="mt-16 border-t border-gray-100 pt-8">
                <p className="text-center text-xs/relaxed text-gray-500">
                  <a
                    className="hover:underline"
                    href="https://ethglobal.com/events/brussels"
                  >
                    🇧🇪 ETHGlobal Brussels 2024
                  </a>{" "}
                  &mdash; Built by Ola &amp;{" "}
                  <a className="hover:underline" href="https://x.com/HugoApps">
                    @HugoApps
                  </a>{" "}
                  with{" "}
                  <a
                    className="hover:underline"
                    href="https://docs.blockscout.com/for-users/api"
                  >
                    Blockscout API
                  </a>{" "}
                  and ENS &mdash;{" "}
                  <a
                    className="hover:underline"
                    href="https://github.com/Hugoo/ETHBrussels-24"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
