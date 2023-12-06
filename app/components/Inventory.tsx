"use client";
import { useEffect, useState } from "react";
import {
  NFT,
  useAddress,
  useContract,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Inventory() {
  const [message, setMessage] = useState<string>("Loading...");
  const address = useAddress();
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

  // CONTRACT DEBUG
  useEffect(() => {
    if (contract) {
      console.log(contract);
    }

    if (errorContract) {
      setMessage("Could not load inventory.");
    }
  }, [contract, loadingContract, errorContract]);

  // NFT DEBUG
  useEffect(() => {
    if (inventory) {
      if (!inventory.length) {
        setMessage("Empty.");
      }
    }

    if (errorNFT) {
      alert("error");
      setMessage("Could not load inventory.");
    }
  }, [inventory, loadingNFT, errorNFT]);

  return (
    <div className="p-4 m-4 rounded-lg border border-white">
      {inventory ? (
        <div className=" text-lg flex justify-start space-x-4">
          {inventory.map((item: NFT) => {
            return (
              <Image
                className="border border-white rounded-lg hover:border-2 cursor-pointer"
                src={item.metadata.image as string | StaticImport}
                alt="Vercel Logo"
                width={50}
                height={50}
                priority
              />
            );
          })}
        </div>
      ) : (
        <h3 className="text-lg flex items-center justify-center text-center">
          {message}
        </h3>
      )}
    </div>
  );
}
