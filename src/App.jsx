import React from "react";
import Routes from "./Routes";

import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";

const sdk = new ThirdwebSDK("fantom");
const contract = await sdk.getContract("0xc8b19C1FE7c3C6a7F63588727d118049199aF10E");

function App() {
  return <Routes />;
}

export default App;
