"use client";

import Image from "next/image";
import { NFT, useContract } from "@thirdweb-dev/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function InventoryItem({ item }: { item: NFT }) {
  const { contract } = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);

  return (
    <Popover>
      <PopoverTrigger>
        <Image
          className="border border-white rounded-lg hover:animate-pulse cursor-pointer"
          src={item.metadata.image as string | StaticImport}
          alt={`${item.metadata.name}`}
          width={50}
          height={50}
          priority
        />
      </PopoverTrigger>
      <PopoverContent
        side={"top"}
        sideOffset={12}
        style={{ width: "fit-content" }}
      >
        <div className="flex space-x-4 justify-center items-center">
          <Dialog>
            <DialogTrigger>
              <button className="text-white text-sm hover:opacity-80">
                Inspect
              </button>
            </DialogTrigger>
            <DialogContent className="p-12">
              <DialogHeader className="flex-column space-y-4">
                <DialogTitle className="text-white">
                  <div className="xs:flex-col space-y-4 sm:flex sm:space-x-4 sm:space-y-0 justify-center items-center lg:justify-start">
                    <Image
                      className="border border-white rounded-lg xs:mx-auto lg:mx-0"
                      src={item.metadata.image as string | StaticImport}
                      alt={`${item.metadata.name}`}
                      width={50}
                      height={50}
                      priority
                    />
                    <p>{`${item.metadata.name}`}</p>
                  </div>
                </DialogTitle>
                <DialogDescription>
                  {item.metadata.description}
                </DialogDescription>
              </DialogHeader>
              <DialogClose asChild>
                <p className="flex text-white text-sm hover:opacity-80 mx-auto lg:mx-0">
                  Close
                </p>
              </DialogClose>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <button className="text-red-600 text-sm hover:opacity-80">
                Toss
              </button>
            </DialogTrigger>
            <DialogContent className="p-12">
              <DialogHeader className="flex-column space-y-4">
                <DialogTitle className="text-white">{`Toss ${item.metadata.name}?`}</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your item and it will not be able to be recovered.
                </DialogDescription>
                <div className="flex space-x-4 justify-between items-center">
                  <button
                    onClick={async () =>
                      await contract?.erc1155.burn(item.metadata.id, 1)
                    }
                    className="text-red-600 text-sm hover:opacity-80"
                  >
                    Toss
                  </button>
                  <DialogClose asChild>
                    <button
                      onClick={async () =>
                        await contract?.erc1155.burn(item.metadata.id, 1)
                      }
                      className="text-white text-sm hover:opacity-80"
                    >
                      Cancel
                    </button>
                  </DialogClose>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </PopoverContent>
    </Popover>
  );
}
