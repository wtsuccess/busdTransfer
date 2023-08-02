import { configureChains, createClient } from "wagmi";
import { bsc } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import { EthereumClient, w3mConnectors } from "@web3modal/ethereum";

export const projectId = "38b18542365e7ddbd6d969da36302b48";

export const { chains, provider, webSocketProvider } = configureChains(
  [bsc],
  [publicProvider()]
);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
  webSocketProvider,
});

export const ethereumClient = new EthereumClient(wagmiClient, chains);
