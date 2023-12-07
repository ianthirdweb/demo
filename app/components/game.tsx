"use client";

import { useState } from "react";
import Inventory from "./inventory";
import { useAddress } from "@thirdweb-dev/react";
import { StartScreen } from "./start-screen";
import { Adventure } from "./adventure";

export function Game() {
  const address = useAddress();
  // const localStorageScene = localStorage.getItem("current-scene")
  //   ? parseInt(localStorage.getItem("current-scene")!!)
  //   : 0;
  const [scene, setScene] = useState(0);

  function changeScene(scene: number) {
    setScene(scene);
    localStorage.setItem("current-scene", `${scene}`);
  }

  return (
    <div className="w-full">
      {address ? (
        <Adventure address={address} scene={scene} setScene={changeScene} />
      ) : (
        <StartScreen address={address} />
      )}
      {address ? <Inventory address={address} /> : null}
    </div>
  );
}
