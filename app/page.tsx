"use client";

import ConnectBtn from "@/components/ConnectBtn";
import TonConnectBtn from "@/components/TonConnectBtn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <TonConnectBtn />

      <ConnectBtn />
    </main>
  );
}
