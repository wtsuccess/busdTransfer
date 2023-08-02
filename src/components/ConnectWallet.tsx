import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useDisconnect } from "wagmi";

const ConnectWallet = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { open: openWeb3Modal } = useWeb3Modal();

  const handleConnectButtonClick = () => {
    if (address) {
        console.log("connect");
        
      disconnect();
    } else {
        console.log("disconnect");

      openWeb3Modal();
    }
  };

  return (
    <button onClick={handleConnectButtonClick}>
      {!address ? "Connect Wallet" : "Disconnect"}
    </button>
  );
};

export default ConnectWallet;
