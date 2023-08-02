import React from "react";
import ConnectWallet from "./ConnectWallet";

const Menu = () => {
  return (
    <div className="flex items-center justify-between text-white px-5 py-2">
      <div className="bg-[#40b126] border-[#198726] px-2 py-1 rounded-[2rem] hover:bg-[#198726]">
        <ConnectWallet />
      </div>
    </div>
  );
};

export default Menu;
