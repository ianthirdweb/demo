"use client";

import ConnectWalletButton from "./connect-wallet-button";
import { SpeakerSimpleNone, SpeakerSimpleSlash } from "@phosphor-icons/react";
import { useAddress } from "@thirdweb-dev/react";

export function Header({
  playing,
  toggle,
}: {
  playing: boolean;
  toggle: () => void;
}) {
  const address = useAddress();

  return (
    <div className="w-full h-24 px-4 flex items-center justify-end space-x-4">
      {playing ? (
        <SpeakerSimpleNone
          className="text-white cursor-pointer hover:opacity-80"
          size={32}
          onClick={toggle}
        />
      ) : (
        <SpeakerSimpleSlash
          className="text-white cursor-pointer hover:opacity-80"
          size={32}
          onClick={toggle}
        />
      )}
      {address ? <ConnectWalletButton title={"START GAME"} /> : null}
    </div>
  );
}
