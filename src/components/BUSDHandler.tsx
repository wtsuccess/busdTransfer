import React, { useState } from "react";
import { useSigner, useBalance } from "wagmi";
import { ethers } from "ethers";
import { BUSDContractAddress } from "../constants/basic";
import { useTransferBUSD } from "../hooks/useTransferBUSD";

const BUSDHandler = () => {
  const { data: signer } = useSigner<ethers.Signer>();

  const [connectStatus, setConnectStatus] = useState("");
  const [BUSDAmount, setBUSDAmount] = useState(0);
  const [receiveraddress, setReceiveraddress] = useState("0x0000000000000");
  const { send: transferBUSD, state: transferBUSDStatus } = useTransferBUSD();

  const { data: BUSDBalance } = useBalance({ address: BUSDContractAddress });

  const handleTransferPressed = async () => {
    if (!signer) {
      setConnectStatus("Connect Wallet!");
      return;
    }

    if (!BUSDBalance) return;

    if (Number(BUSDBalance?.formatted) < BUSDAmount) return;
    setConnectStatus("");
    await transferBUSD(BUSDAmount, signer, receiveraddress);
  };

  return (
    <div className="bg-[#0d0d0d] w-full py-5 rounded-lg text-gray-200 font-sans mx-3">
      <div className="border-b border-white p-4 sm:p-5">
        <h4 className="text-xl sm:text-2xl font-medium">Transfer BUSD</h4>
      </div>
      <div className="p-4 sm:p-5">
        <div className="mb-4 bg-black rounded-lg p-3">
          <p className="py-2 sm:py-3 text-[12px] sm:text-base">
            Enter BUSD Value to transfer:
          </p>
          <input
            type="number"
            placeholder="0"
            onChange={(e) => {setBUSDAmount((Number(e.target.value)))}}
            value={BUSDAmount}
            className="bg-gray-800 py-2 px-3 text-white appearance-none text-[12px] sm:text-base"
          />
          <p className="py-2 sm:py-3 text-[12px] sm:text-base">
            Enter Address to transfer:
          </p>
          <input
            type="string"
            placeholder=""
            onChange={(e) => {setReceiveraddress(e.target.value)}}
            value={receiveraddress}
            className="bg-gray-800 py-2 px-3 text-white appearance-none text-[12px] sm:text-base"
          />
        </div>
        <div className="mb-4 bg-black rounded-lg p-3">
          <p className="text-[12px] sm:text-base">
            BUSD Amount:{" "}
            <span className="text-[#ff7500]">{BUSDAmount || 0} BUSD</span>
          </p>
        </div>
        <div className="flex justify-between">
          <button
            className="py-2 px-4 rounded-md bg-orange-500 hover: text-[12px] sm:text-base cursor-pointer"
            onClick={handleTransferPressed}
            disabled={transferBUSDStatus?.status === "Pending"}
          >
            Transfer BUSD
          </button>
        </div>
        {!signer && (
          <p className="text-[#fa1111] py-2 sm:py-3 text-[12px] sm:text-base text-right">
            {connectStatus}
          </p>
        )}
        {transferBUSDStatus?.status === "Failed" && (
          <p className="text-[#fa1111] py-2 sm:py-3 text-[12px] sm:text-base text-right">
            {transferBUSDStatus.errMsg}
          </p>
        )}
        {transferBUSDStatus?.status === "Success" && (
          <p className="text-green-500 py-2 sm:py-3 text-[12px] sm:text-base text-right">
            Transaction successful
          </p>
        )}
      </div>
    </div>
  );
};

export default BUSDHandler;
