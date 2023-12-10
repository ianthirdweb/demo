"use client";

import { useState } from "react";
import Inventory from "./inventory";
import { useAddress } from "@thirdweb-dev/react";
import { StartScreen } from "./start-screen";
import { Adventure } from "./adventure";

export function Game() {
  let startAudio = new Audio("/start.wav");
  const address = useAddress();
  const [scene, setScene] = useState(0);

  function changeScene(scene: number) {
    setScene(scene);
    localStorage.setItem("current-scene", `${scene}`);
  }

  if (address && !(localStorage.getItem("logged-in") === "true")) {
    localStorage.setItem("logged-in", "true");
    startAudio.play();
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
