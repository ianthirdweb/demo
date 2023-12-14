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

export async function takeEnhancedSword(
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

export async function takeFrog(
  contract: SmartContract<BaseContract> | undefined,
) {
  await takeItem("4", 1, contract);
}

export async function takeKey(
  contract: SmartContract<BaseContract> | undefined,
) {
  await takeItem("5", 1, contract);
}

export async function takeSword(
  contract: SmartContract<BaseContract> | undefined,
) {
  await takeItem("6", 1, contract);
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
      return processScene1Actions(INPUT, scene, setScene, address, contract);
    case 2:
      return processScene2Actions(INPUT, scene, setScene);
    case 3:
      return processScene3Actions(INPUT, scene, setScene);
    case 4:
      return processScene4Actions(INPUT, scene, setScene);
    case 5:
      return processScene5Actions(INPUT, scene, setScene, address, contract);
    case 6:
      return processScene6Actions(INPUT, scene, setScene);
    case 7:
      return processScene7Actions(INPUT, scene, setScene, address, contract);
    case 8:
      return processScene8Actions(INPUT, scene, setScene);
    case 9:
      return processScene9Actions(INPUT, scene, setScene);
    case 10:
      return processScene10Actions(INPUT, scene, setScene);
    case 11:
      return processScene11Actions(INPUT, scene, setScene);
    case 12:
      return processScene12Actions(INPUT, scene, setScene);
    case 13:
      return processScene13Actions(INPUT, scene, setScene, address, contract);
    case 14:
      return processScene14Actions(INPUT, scene, setScene, address, contract);
    case 15:
      return processScene15Actions(INPUT, scene, setScene);
    case 16:
      return processScene16Actions(INPUT, scene, setScene);
    case 17:
      return processScene17Actions(INPUT, scene, setScene);
    case 18:
      return processScene18Actions(INPUT, scene, setScene);
    case 19:
      return processScene19Actions(INPUT, scene, setScene);
    case 20:
      return processScene20Actions(INPUT, scene, setScene);
    case 21:
      return processScene21Actions(INPUT, scene, setScene, address, contract);
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
  const torchBalance = await contract?.erc1155.balanceOf(address, 3);
  localStorage.setItem("game-start", "true");
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      case "TORCH":
      case "TAKE TORCH":
      case "PICK UP TORCH":
        if (torchBalance && Number(torchBalance._hex) >= 1) {
          return "You already took the torch.";
        } else {
          takeFrog(contract);
          return "You take the torch.";
        }
      default:
        return "That action isn't available";
    }
  }
}

export async function processScene1Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
  address: string,
  contract: SmartContract<BaseContract> | undefined,
): Promise<void | string> {
  const torchBalance = await contract?.erc1155.balanceOf(address, 3);
  if (scene.options?.includes(INPUT)) {
    if (INPUT == "SOUTH") {
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

export async function processScene5Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
  address: string,
  contract: SmartContract<BaseContract> | undefined,
): Promise<void | string> {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    const scrollBalance = await contract?.erc1155.balanceOf(address, 4);
    switch (INPUT) {
      case "SKELETON":
      case "SEARCH SKELETON":
        if (scrollBalance && Number(scrollBalance._hex) >= 1) {
          return "The skeleton is only bones. Stop touching it.";
        } else {
          takeScroll(contract);
          return "You find a tattered scroll. It has a powerful aura.";
        }
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

export async function processScene7Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
  address: string,
  contract: SmartContract<BaseContract> | undefined,
): Promise<string | void> {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    const frogBalance = await contract?.erc1155.balanceOf(address, 4);
    switch (INPUT) {
      case "PET FROG":
        if (frogBalance && Number(frogBalance._hex) >= 1) {
          return "You already picked up the frog.";
        } else {
          return "You pet the frog. He likes it!";
        }
      case "FROG":
      case "TAKE FROG":
      case "PICK UP FROG":
        if (frogBalance && Number(frogBalance._hex) >= 1) {
          return "You already picked up the frog.";
        } else {
          takeFrog(contract);
          return "You pick up the frog.";
        }
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

export function processScene10Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): string | void {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      case "DESCEND WELL":
      case "WELL":
      case "USE WELL":
        setScene(1);
        return "You enter a dark cave.";
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
      case "BOY":
      case "APPROACH CRYING BOY":
      case "APPROACH BOY":
      case "TALK TO BOY":
      case "TALK TO CRYING BOY":
      case "SPEAK TO BOY":
      case "SPEAK TO CRYING BOY":
      case "TALK":
      case "SPEAK":
        if (localStorage.getItem("boy-puzzle-solved") === "true") {
          setScene(20);
        } else {
          setScene(14);
        }
        return "You approach the boy.";
      case "TAVERN":
      case "ENTER TAVERN":
        setScene(12);
        return "You enter the tavern.";
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
      case "ADVENTURER":
      case "MAN":
      case "SPEAK TO ADVENTURER":
      case "SPEAK TO MAN":
      case "APPROACH ADVENTURER":
      case "APPROACH MAN":
        setScene(13);
        return "You approach the adventurer.";
      case "LEAVE":
        setScene(11);
        return "You head back out to the village square.";
      default:
        return "That action isn't available";
    }
  }
}

export async function processScene13Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
  address: string,
  contract: SmartContract<BaseContract> | undefined,
): Promise<void | string> {
  const swordBalance = await contract?.erc1155.balanceOf(address, 6);
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      case "INQUIRE":
      case "ASK":
      case "ASK ABOUT SWORD":
      case "ASK FOR SWORD":
        localStorage.setItem("adventurer-inquired", "true");
        return "You ask about the sword.";
      case "TELL YOUR STORY":
      case "TELL STORY":
      case "BOAST":
      case "REGALE HIM":
        if (localStorage.getItem("adventurer-inquired") === "true") {
          localStorage.setItem("persuaded-adventurer", "true");
          if (swordBalance && Number(swordBalance._hex) >= 1) {
            return "The adventurer has already heard this. You've bored him.";
          } else {
            takeSword(contract);
            return "The adventurer is impressed.";
          }
        } else {
          return "That action isn't available.";
        }
      case "TAKE SWORD":
        return "The adventurer gives you a menacing glance.";
      case "LEAVE":
        setScene(12);
        return "You leave the table.";
      default:
        return "That action isn't available";
    }
  }
}

export async function processScene14Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
  address: string,
  contract: SmartContract<BaseContract> | undefined,
): Promise<void | string> {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      case "FROG":
      case "GIVE FROG":
        const frogBalance = await contract?.erc1155.balanceOf(address, 4);
        if (localStorage.getItem("boy-puzzle-solved") === "true") {
          return "The boy thanks you again for finding his frog.";
        } else {
          if (frogBalance && Number(frogBalance._hex) >= 1) {
            setScene(20);
            takeKey(contract);
            localStorage.setItem("boy-puzzle-solved", "true");
            return "You give the frog to the boy.";
          } else {
            return "The boy cries harder. Stop teasing him!";
          }
        }
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

export function processScene19Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): void | string {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      case "GOODBYE":
      case "SAY GOODBYE":
        setScene(11);
        return "You return to the village square.";
      default:
        return "That action isn't available";
    }
  }
}

export function processScene20Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
): void | string {
  if (scene.options?.includes(INPUT)) {
    navigateToScene(INPUT, scene, setScene);
  } else {
    switch (INPUT) {
      case "LEAVE":
      case "GOODBYE":
      case "SAY GOODBYE":
        setScene(11);
        return "You return to the village square.";
      default:
        return "That action isn't available";
    }
  }
}

export async function processScene21Actions(
  INPUT: string,
  scene: Scene,
  setScene: (scene: number) => void,
  address: string,
  contract: SmartContract<BaseContract> | undefined,
): Promise<void | string> {
  const keyBalance = await contract?.erc1155.balanceOf(address, 5);
  if (scene.options?.includes(INPUT)) {
    if (INPUT == "NORTH") {
      if (localStorage.getItem("monastery-unlocked") === "true") {
        setScene(scene.adjacentScenes[0]);
        return "You travel North.";
      } else {
        return "The door is locked.";
      }
    } else {
      navigateToScene(INPUT, scene, setScene);
    }
  } else {
    switch (INPUT) {
      case "WALK AROUND":
      case "GO AROUND":
        return "Around what? This place is enormous. It's best to turn back.";
      case "SCALE":
      case "SCALE BUILDING":
        return "The walls are slippery from a recent rain. Nice try.";
      case "KICK":
      case "KICK DOOR":
      case "KICK DOOR DOWN":
        return "The door is way too heavy. You should stop doing that.";
      case "KEY":
      case "USE KEY":
      case "UNLOCK DOOR":
        if (localStorage.getItem("monastery-unlocked") === "true") {
          return "The door is already unlocked.";
        } else {
          if (keyBalance && Number(keyBalance._hex) >= 1) {
            setScene(5);
            localStorage.setItem("monastery-unlocked", "true");
            return "You unlock the door.";
          } else {
            return "You don't have a key to unlock this door.";
          }
        }
      default:
        return "That action isn't available";
    }
  }
}
