import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center bg-gradient-to-r from-[#ffc600] to-[#ff7500] py-5 text-[0.75rem] bg-transparent">
      Copyright © {new Date().getFullYear()}, BUSDHandler.
    </footer>
  );
};

export default Footer;
