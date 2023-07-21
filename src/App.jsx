import React from "react";
import Routes from "./Routes";

import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";

import { ThirdwebProvider, ConnectWallet, metamaskWallet } from "@thirdweb/react";
import { ThirdwebProvider, ConnectWallet, walletConnect } from "@thirdweb/react";
const sdk = new ThirdwebSDK("fantom");
const contract = await sdk.getContract("0xc8b19C1FE7c3C6a7F63588727d118049199aF10E");

export default function App() {
return (
    <ThirdwebProvider supportedWallets={[ metamaskWallet() ]}>
      <ConnectWallet theme="light" />
    </ThirdwebProvider>
  );
}
