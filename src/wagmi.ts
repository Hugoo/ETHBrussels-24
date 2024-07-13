import { http, createConfig, createStorage, cookieStorage } from "wagmi";
import { mainnet, lukso } from "wagmi/chains";
import { injected } from "wagmi/connectors";

const supportedChains: any = [mainnet, lukso];

export const config = createConfig({
  chains: [mainnet],
  connectors: [injected()],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),

  transports: supportedChains.reduce(
    // @ts-ignore
    (obj, chain) => ({ ...obj, [chain.id]: http() }),
    {}
  ),
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
