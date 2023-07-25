// web3Helper.js
import { DefenderRelayProvider } from "defender-relay-client/lib/web3";
import Web3 from "web3";

// Replace YOUR_API_KEY and YOUR_API_SECRET with your actual API key and secret
const credentials = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  apiSecret: process.env.NEXT_PUBLIC_SECREACT_KEY,
};
const provider = new DefenderRelayProvider(credentials, { speed: "fast" });
const web3 = new Web3(provider);

const getWeb3Instance = async () => {
  // Wait for the provider to be ready
  await provider.ready;

  return web3;
};

export default getWeb3Instance;
