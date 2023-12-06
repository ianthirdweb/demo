import ConnectWalletButton from "./components/ConnectWalletButton";
import MintButton from "./components/MintButton";
import Inventory from "./components/Inventory";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <Image
        src="/weboftruth.png"
        alt="Vercel Logo"
        width={700}
        height={100}
        priority
      />
      <div className="flex-column space-y-4 lg:space-x-8 lg:space-y-0 lg:flex justify-center items-center">
        <ConnectWalletButton title={"START GAME"} />
        <MintButton title={"Mint A Scroll"} tokenId={"1"} quantity={1} />
      </div>
      <Inventory />
    </main>
  );
}
