"use client";

import { useState } from "react";
import Inventory from "./inventory";
import { useAddress } from "@thirdweb-dev/react";
import { StartScreen } from "./start-screen";
import { Adventure } from "./adventure";

export function Game() {
  const address = useAddress();
  const startingScene =
    typeof window !== "undefined"
      ? localStorage.getItem("current-scene")
      : null;
  const [scene, setScene] = useState(
    startingScene ? parseInt(startingScene) : 0,
  );

  function changeScene(scene: number) {
    setScene(scene);

    typeof window !== "undefined" &&
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
