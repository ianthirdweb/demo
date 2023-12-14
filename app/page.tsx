"use client";

import { useEffect, useState } from "react";
import { Game } from "./components/game";
import { Header } from "./components/header";

export default function Home() {
  const { playing, toggle } = useAudio(
    "https://web-of-truth-music.s3.amazonaws.com/web-of-truth.wav",
  );

  return (
    <main className="flex-col h-screen items-center justify-center">
      <Header playing={playing} toggle={toggle} />
      <Game />
    </main>
  );
}

function useAudio(url: string) {
  const [audio] = useState(
    typeof window !== "undefined" ? new Audio(url) : null,
  );
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio?.play() : audio?.pause();
  }, [playing]);

  useEffect(() => {
    audio?.addEventListener("ended", () => audio?.play());
    return () => {
      audio?.removeEventListener("ended", () => audio?.play());
    };
  }, []);

  return { playing, toggle };
}
