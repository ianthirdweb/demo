import ConnectWalletButton from "./connect-wallet-button";
import Image from "next/image";

export function StartScreen({ address }: { address?: string }) {
  return (
    <div className="w-full flex-col items-center text-center justify-center">
      <Image
        src="/weboftruth.png"
        alt="Web of Truth Logo"
        className="mx-auto"
        width={700}
        height={100}
        priority
      />
      {address ? null : (
        <div className="flex-column space-y-4 lg:space-x-8 lg:space-y-0 lg:flex justify-center items-center">
          <ConnectWalletButton title={"START GAME"} />
        </div>
      )}
    </div>
  );
}
