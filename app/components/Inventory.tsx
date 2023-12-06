"use client";
import { NFT, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import InventoryItem from "./inventory-item";

export default function Inventory({ address }: { address?: string }) {
  const {
    contract,
    isLoading: loadingContract,
    error: errorContract,
  } = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);

  const {
    data: inventory,
    isLoading: loadingNFT,
    error: errorNFT,
  } = useOwnedNFTs(contract, address);

  return (
    <div className="p-4 mx-auto my-8 rounded-lg bg-foreground w-fit fixed bottom-0 left-1/2 transform -translate-x-1/2">
      {inventory && inventory.length ? (
        <div className="text-lg flex justify-center space-x-4">
          {inventory.map((item: NFT) => {
            return <InventoryItem item={item} />;
          })}
        </div>
      ) : (
        <h3 className="text-lg text-white flex items-center justify-center text-center">
          {inventory && !inventory.length
            ? "Your inventory is empty."
            : errorContract || errorNFT
              ? "Could not load inventory"
              : "Loading Inventory..."}
        </h3>
      )}
    </div>
  );
}
