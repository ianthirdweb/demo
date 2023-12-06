import { Game } from "./components/game";
import { Header } from "./components/header";

export default function Home() {
  return (
    <main className="flex-col h-screen items-center justify-center">
      <Header />
      <Game />
    </main>
  );
}
