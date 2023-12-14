"use client";

import { ConnectWallet } from "./thirdweb-client";

export default function ConnectWalletButton({ title }: { title: string }) {
  return (
    <ConnectWallet
      className="w-full"
      btnTitle={title}
      auth={{
        onLogout: () =>
          typeof window !== "undefined" &&
          localStorage.setItem("logged-in", "false"),
      }}
    />
  );
}
