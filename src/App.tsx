import { useStore } from "./utils/store";
import { Toaster } from "react-hot-toast";
import GameStateOverlay from "./components/gamestate-overlay";
import Header from "./components/header";
import GameForm from "./components/game-form";
import GuessesTable from "./components/guesses-table";

const App = () => {
  const state = useStore();
  let guesses = [...state.guesses];

  return (
    <>
      <Toaster />
      <GameStateOverlay />
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex flex-col px-5 w-full h-full">
          <div className="m-auto w-full max-w-sm">
            <h1 className="mb-6 font-serif font-bold text-2xl italic">
              &quot;{state.answer.context}&quot;
            </h1>
            <GameForm />
            <GuessesTable />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
