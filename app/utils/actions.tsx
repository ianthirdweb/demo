import { SmartContract } from "@thirdweb-dev/react";
import { BaseContract } from "ethers";
import scenes from "./scenes";

interface Scene {
  id: number;
  image: string;
  description: string;
  options?: string[];
  interactions: string[];
  adjacentScenes: number[];
}

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

export async function takeDragonScale(
  contract: SmartContract<BaseContract> | undefined,
) {
  await takeItem("2", 1, contract);
}

export async function takeTorch(
  contract: SmartContract<BaseContract> | undefined,
) {
  await takeItem("3", 1, contract);
}

export async function processInput(
  input: string,
  scene: Scene,
  setScene: (scene: number) => void,
  address: string,
  contract: SmartContract<BaseContract> | undefined,
): Promise<string | void> {
  let INPUT = input.toUpperCase();
  return processSceneAction(INPUT, scene, setScene, address, contract);
}

export function getScene(scene: number): Scene {
  return scenes[scene];
}

export async function processSceneAction(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
  address: string,
  contract: SmartContract<BaseContract> | undefined,
): Promise<string | void> {
  switch (scene.id) {
    case 0:
      return await processScene0Actions(
        INPUT,
        scene,
        setScene,
        address,
        contract,
      );
    case 1:
      return processScene1Actions(INPUT, scene, setScene);
    case 2:
      return processScene2Actions(INPUT, scene, setScene);
    case 3:
      return processScene3Actions(INPUT, scene, setScene);
    case 4:
      return processScene4Actions(INPUT, scene, setScene);
    case 5:
      return processScene5Actions(INPUT, scene, setScene);
    case 6:
      return processScene6Actions(INPUT, scene, setScene);
    case 7:
      return processScene7Actions(INPUT, scene, setScene);
    case 8:
      return processScene8Actions(INPUT, scene, setScene);
    case 9:
      return processScene9Actions(INPUT, scene, setScene);
    case 10:
      return processScene10Actions(INPUT, scene, setScene, address, contract);
    case 11:
      return processScene11Actions(INPUT, scene, setScene);
    case 12:
      return processScene12Actions(INPUT, scene, setScene);
    case 13:
      return processScene13Actions(INPUT, scene, setScene);
    case 14:
      return processScene14Actions(INPUT, scene, setScene);
    case 15:
      return processScene15Actions(INPUT, scene, setScene);
    case 16:
      return processScene16Actions(INPUT, scene, setScene);
    case 17:
      return processScene17Actions(INPUT, scene, setScene);
    case 18:
      return processScene18Actions(INPUT, scene, setScene);
    default:
      return "That action isn't available";
  }
}

export function navigateToScene(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): string {
  switch (INPUT) {
    case "NORTH":
      setScene(scene.adjacentScenes[0]);
      return "You travel North.";
    case "SOUTH":
      setScene(scene.adjacentScenes[1]);
      return "You travel South.";
    case "EAST":
      setScene(scene.adjacentScenes[2]);
      return "You travel East.";
    case "WEST":
      setScene(scene.adjacentScenes[3]);
      return "You travel West.";
    default:
      return "That action isn't available";
  }
}

export async function processScene0Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
  address: string,
  contract: SmartContract<BaseContract> | undefined,
): Promise<void | string> {
  if (scene.options?.includes(INPUT)) {
    if (INPUT == "SOUTH") {
      const torchBalance = await contract?.erc1155.balanceOf(address, 3);
      if (torchBalance && Number(torchBalance._hex) >= 1) {
        setScene(scene.adjacentScenes[1]);
        return "You travel South.";
      } else {
        return "It is too dark to travel further into the cave.";
      }
    } else {
      navigateToScene(INPUT, scene, setScene);
    }
  } else {
    switch (INPUT) {
      case "TORCH":
      case "TAKE TORCH":
      case "PICK UP TORCH":
        takeTorch(contract);
        return "You took the torch.";
      default:
        return "That action isn't available";
    }
  }
}

export function processScene1Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): void | string {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      case "USE LADDER":
      case "LADDER":
      case "CLIMB LADDER":
        setScene(10);
        return "You climbed the ladder.";
      default:
        return "That action isn't available";
    }
  }
}

export function processScene2Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): void | string {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      default:
        return "That action isn't available";
    }
  }
}

export function processScene3Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): void | string {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      default:
        return "That action isn't available";
    }
  }
}

export function processScene4Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): void | string {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      default:
        return "That action isn't available";
    }
  }
}

export function processScene5Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): void | string {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      default:
        return "That action isn't available";
    }
  }
}

export function processScene6Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): void | string {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      default:
        return "That action isn't available";
    }
  }
}

export function processScene7Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): void | string {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      default:
        return "That action isn't available";
    }
  }
}

export function processScene8Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): void | string {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      default:
        return "That action isn't available";
    }
  }
}

export function processScene9Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): void | string {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      default:
        return "That action isn't available";
    }
  }
}

export async function processScene10Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
  address: string,
  contract: SmartContract<BaseContract> | undefined,
): Promise<string | void> {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      case "DESCEND WELL":
      case "WELL":
      case "USE WELL":
        const torchBalance = await contract?.erc1155.balanceOf(address, 3);
        if (torchBalance && Number(torchBalance._hex) >= 1) {
          setScene(1);
          return "You enter a dark cave.";
        } else {
          return "You'll need a torch to make you way down the well.";
        }

      default:
        return "That action isn't available";
    }
  }
}

export function processScene11Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): void | string {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      case "APPROACH CRYING BOY":
      case "APPROACH BOY":
      case "TALK TO BOY":
      case "TALK TO CRYING BOY":
      case "SPEAK TO BOY":
      case "SPEAK TO CRYING BOY":
      case "TALK":
      case "SPEAK":
        setScene(14);
        return "You approach the boy.";
      default:
        return "That action isn't available";
    }
  }
}

export function processScene12Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): void | string {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      default:
        return "That action isn't available";
    }
  }
}

export function processScene13Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): void | string {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      default:
        return "That action isn't available";
    }
  }
}

export function processScene14Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): void | string {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      case "LEAVE":
        setScene(11);
        return "You return to the village square.";
      default:
        return "That action isn't available";
    }
  }
}

export function processScene15Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): void | string {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      default:
        return "That action isn't available";
    }
  }
}

export function processScene16Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): void | string {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      default:
        return "That action isn't available";
    }
  }
}

export function processScene17Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): void | string {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      default:
        return "That action isn't available";
    }
  }
}

export function processScene18Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): void | string {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      default:
        return "That action isn't available";
    }
  }
}
