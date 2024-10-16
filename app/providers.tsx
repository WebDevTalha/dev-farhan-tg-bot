"use client";
import React from "react";

import { TonConnectUIProvider } from "@tonconnect/ui-react";

import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";
// import { manifestUrl } from "./data";
// declare let window: any;

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/WebDevTalha/src-images/main/data.json">
      <MetaMaskUIProvider
        sdkOptions={{
          dappMetadata: {
            name: "DevFarhansBot",
            url: typeof window !== "undefined" ? window.location.href : "",
          },
          infuraAPIKey: process.env.INFURA_API_KEY,
          // Other options
        }}
      >
        {mounted && children}
      </MetaMaskUIProvider>
    </TonConnectUIProvider>
  );
}
