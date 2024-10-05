"use client";
import React from "react";

import { TonConnectUIProvider } from "@tonconnect/ui-react";
// import { manifestUrl } from "./data";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/WebDevTalha/src-images/main/data.json">
      {mounted && children}
    </TonConnectUIProvider>
  );
}
