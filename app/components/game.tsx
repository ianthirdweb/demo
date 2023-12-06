"use client";

import { useState } from "react";
import Inventory from "./inventory";
import { useAddress } from "@thirdweb-dev/react";
import { StartScreen } from "./start-screen";
import { Adventure } from "./adventure";

export function Game() {
  const address = useAddress();
  const [screen, setScreen] = useState(1);

  return (
    <div className="w-full">
      {address ? (
        <Adventure address={address} screen={screen} setScreen={setScreen} />
      ) : (
        <StartScreen address={address} />
      )}
      {address ? <Inventory address={address} /> : null}
    </div>
  );
}
