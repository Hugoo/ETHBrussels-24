"use client";

import { cookieToInitialState, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { config } from "./wagmi";

const queryClient = new QueryClient();

interface Props {
  children: React.ReactNode;
  cookie?: string | null;
}

const Providers: React.FC<Props> = ({ children, cookie }) => {
  const initialState = cookieToInitialState(config, cookie);

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};

export default Providers;
