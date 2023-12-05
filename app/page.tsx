import { ConnectWallet } from "@thirdweb-dev/react";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <p className="flex w-full justify-center text-4xl pb-6 dark:from-inherit lg:static lg:w-auto lg:p-4">
         Web of Truth 3
        </p>
        
        <ConnectWallet btnTitle={"START GAME"} />
    </main>
  )
}
