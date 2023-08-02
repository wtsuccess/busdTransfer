import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { WagmiConfig } from "wagmi";
import { ethereumClient, projectId, wagmiClient } from "./constants/wagmi-config";
import { Web3Modal } from "@web3modal/react";

const walletIds = {
  metamask: "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
  trustWallet: "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <App />
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeMode="dark"
        explorerRecommendedWalletIds={[
          walletIds.metamask,
          walletIds.trustWallet,
        ]}
        themeVariables={{
          "--w3m-background-color": "#12B3A8",
          "--w3m-accent-color": "#12B3A8",
        }}
      />
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
