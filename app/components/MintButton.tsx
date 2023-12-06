"use client";

import { useContract } from "@thirdweb-dev/react";

export default function MintButton({
  title,
  tokenId,
  quantity,
}: {
  title: string;
  tokenId: string;
  quantity: number;
}) {
  const { contract } = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);

  console.log(contract);

  return (
    <button
      className="border border-white rounded-lg text-white hover:text-black hover:bg-white p-4 transition w-full"
      onClick={
        contract
          ? async () => await contract.erc1155.claim(tokenId, quantity)
          : () => console.error("No contract specified.")
      }
    >
      {title}
    </button>
  );
}
