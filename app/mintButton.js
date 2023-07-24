import * as React from "react";
import PrimaryButton from "./components/primaryButton";
import { usePrepareContractWrite, useContractWrite } from "wagmi";
import abi from "./components/abi.json";
import { inputData } from "./page";

export function MintNFT() {
  console.log(inputData, "insise mindt");
  const { config } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    abi: abi,
    functionName: "register",
    args: [inputData],
  });
  const { write } = useContractWrite(config);
  return (
    <div>
      <PrimaryButton onClick={() => write?.()} text="Send" />
      {/* <button onClick={() => write?.()}>Send</button> */}
    </div>
  );
}
