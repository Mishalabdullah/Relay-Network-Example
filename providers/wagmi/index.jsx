import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { polygonMumbai, polygon } from "wagmi/chains";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai, polygon],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: false,
  connectors: [new MetaMaskConnector({ chains })],
  publicClient,
  webSocketPublicClient,
});

// Provider
// ========================================================
const WagmiProvider = ({ children }) => {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};

// Exports
// ========================================================
export default WagmiProvider;
