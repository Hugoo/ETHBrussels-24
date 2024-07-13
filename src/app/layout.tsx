import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
  title: "PolyScout 🔗 - A Universal Chain explorer",
  description: "Built with Blockscout API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-gray-800">
        <header className="bg-blue-300">
          <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8">
            <div className="flex items-center justify-center">
              <div className="grow text-left">
                <h1 className="text-3xl font-bold">
                  <Link className="hover:text-gray-500" href="/">
                    PolyScout 🔗
                  </Link>
                </h1>
              </div>
              <div className="text-lef">
                <Link className="hover:text-gray-500" href="/transactions">
                  Transactions
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8">
          {children}
        </main>
        <footer className="bg-white">
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
                <a href="https://docs.blockscout.com/for-users/api">
                  Blockscout API
                </a>{" "}
                &mdash;{" "}
                <a
                  className="hover:underline"
                  href="https://github.com/Hugoo/ETHBrussels-24"
                >
                  Source
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
