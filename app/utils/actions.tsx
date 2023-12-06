import { SmartContract } from "@thirdweb-dev/react";
import { BaseContract } from "ethers";

export async function takeItem(
  tokenId: string,
  quantity: number,
  contract: SmartContract<BaseContract> | undefined,
) {
  try {
    await contract?.erc1155.claim(tokenId, quantity);
  } catch (error) {
    console.error(error);
  }
}

export async function takeSword(
  contract: SmartContract<BaseContract> | undefined,
) {
  await takeItem("0", 1, contract);
}

export async function takeScroll(
  contract: SmartContract<BaseContract> | undefined,
) {
  await takeItem("1", 1, contract);
}

export async function processInput(
  input: string,
  options: string[],
  contract: SmartContract<BaseContract> | undefined,
): Promise<string> {
  let INPUT = input.toUpperCase();
  if (!options.includes(INPUT)) {
    return "That action isn't available";
  } else {
    switch (INPUT) {
      case "TAKE SCROLL":
        await takeScroll(contract);
        return "You pick up the scroll.";
      default:
        return "That action isn't available.";
    }
  }
}
