"use client";

import TransactionsList from "@/components/TransactionsList";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TransactionsList />
      <Button>Button</Button>
    </main>
  );
}
