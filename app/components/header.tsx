"use client";

import ConnectWalletButton from "./connect-wallet-button";
import { useAddress } from "@thirdweb-dev/react";

export function Header() {
  const address = useAddress();

  return (
    <div className="w-full h-24 px-4 flex items-center justify-end space-x-4">
      {address ? <ConnectWalletButton title={"START GAME"} /> : null}
    </div>
  );
}
