import * as React from "react";
import { useState } from "react";
import PrimaryButton from "./components/primaryButton";
import { usePrepareContractWrite, useContractWrite } from "wagmi";
import abi from "./components/abi.json";
import { inputData } from "./page";

export function MintNFT() {
  const [status, setStatus] = useState("");
  const handleTriggerAutotask = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_HOOKURL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      const data = await response.json();
      setStatus(data.status);
    } catch (error) {
      console.error("Error triggering Autotask:", error);
      setStatus("Error");
    }
  };
  const { config } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    abi: abi,
    functionName: "register",
    args: [inputData],
    gasLimit: 200000,
  });
  const { write } = useContractWrite(config);
  return (
    <div>
      <PrimaryButton onClick={() => handleTriggerAutotask()} text="Send" />
    </div>
  );
}
