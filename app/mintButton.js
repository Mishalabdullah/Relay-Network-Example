// import * as React from "react";
// import { useState } from "react";
// import { usePrepareContractWrite, useContractWrite } from "wagmi";
// import { Relayer } from "@openzeppelin/defender-relay-client";
// export function MintNFT() {
//   const apiKey = process.env.NEXT_PUBLIC_API_KEY;
//   const apiSecret = process.env.NEXT_PUBLIC_SECREACT_KEY;
//   const network = "mainnet"; // Replace with the desired network

//   const Signer = async () => {
//     const relayClient = new Relayer({
//       apiKey: apiKey,
//       apiSecret: apiSecret,
//     });
//     const tx = await relayClient.sendTransaction({
//       to: "0x6b175474e89094c44da98b954eedeac495271d0f",
//       value: "0x16345785d8a0000",
//       data: "0x5af3107a",
//       speed: "fast",
//       gasLimit: 100000,
//     });
//   };

//   // const signer = new DefenderRelaySigner(apiKey, network);
//   const [status, setStatus] = useState("");
//   const handleTriggerAutotask = async () => {
//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_HOOKURL}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(inputData),
//       });

//       const data = await response.json();
//       setStatus(data.status);
//     } catch (error) {
//       console.error("Error triggering Autotask:", error);
//       setStatus("Error");
//     }
//   };
//   const { config } = usePrepareContractWrite({
//     address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
//     abi: abi,
//     functionName: "register",
//     args: [inputData],
//     gasLimit: 200000,
//   });
//   const { write } = useContractWrite(config);
//   return (
//     <div>
//       <PrimaryButton onClick={() => Signer()} text="Send" />
//     </div>
//   );
// }
import { inputData } from "./page";
import { useEffect, useState } from "react";
import PrimaryButton from "./components/primaryButton";
import abidata from "./components/abi.json";
import { GelatoRelay } from "@gelatonetwork/relay-sdk";
import { ethers } from "ethers";

export default function MintNFT() {
  const [relayResponse, setRelayResponse] = useState("");

  const handleRelay = async () => {
    const relay = new GelatoRelay();

    const counter = "0xa662186227892E6768724c5f86924BfAc57c6D21";
    const abi = abidata;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const user = await signer.getAddress();

    const contract = new ethers.Contract(counter, abi, signer);
    const { data } = await contract.populateTransaction.register(
      "0x" + inputData
    );

    const request = {
      chainId: provider.network.chainId,
      target: counter,
      data: data,
      user: user,
    };

    const apiKey = "Dqv4nn6OjnKjZt7YyTVrzXbT3bXYx54wx5O4ZN0F9SA_";

    const response = await relay.sponsoredCallERC2771(
      request,
      provider,
      apiKey
    );
    setRelayResponse(response);
    console.log(relayResponse, "response");
  };

  return (
    <div>
      <PrimaryButton onClick={handleRelay} text="Send" />
    </div>
  );
}
