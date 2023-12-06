"use client";

import { ConnectWallet } from "./thirdweb-client";
import { useAddress } from "@thirdweb-dev/react";

export default function ConnectWalletButton({ title }: { title: string }) {
  const address = useAddress();

  return <ConnectWallet className="w-full" btnTitle={title} />;
}
