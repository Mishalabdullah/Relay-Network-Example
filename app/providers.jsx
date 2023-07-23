"use client";

// Imports
// ========================================================
import React from "react";
import WagmiProvider from "../providers/wagmi";

// Root Provider
// ========================================================
const RootProvider = ({ children }) => {
  return (
    <div>
      <WagmiProvider>{children}</WagmiProvider>
    </div>
  );
};

// Exports
// ========================================================
export default RootProvider;
