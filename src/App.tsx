import { useStore } from "./utils/store";
import { Toaster } from "react-hot-toast";
import GameStateOverlay from "./components/gamestate-overlay";
import Header from "./components/header";
import GameForm from "./components/game-form";
import GuessesTable from "./components/guesses-table";
import GlobeExplorer from "./components/globe-explorer";

const App = () => {
  const state = useStore();
  let guesses = [...state.guesses];

  return (
    <>
      <Toaster />
      <GameStateOverlay />
      <Header />
      <main className="grid grid-cols-2 min-h-screen divide-x divide-neutral-300">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="w-1/2">
            <h1 className="mb-6 font-serif font-bold text-2xl italic">
              &quot;{state.answer.context}&quot;
            </h1>
            <GameForm />
            <GuessesTable />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          <GlobeExplorer />
        </div>
      </main>
    </>
  );
};

export default App;
