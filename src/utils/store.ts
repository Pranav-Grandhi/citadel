import create from "zustand";
import { persist } from "zustand/middleware";
import { NUMBER_OF_GUESSES } from "./constants";
import { GuessState, StoreState } from "./types";
import { getRandomCity, computeGuess } from "./city";

export const useStore = create<StoreState>(
  persist(
    (set, get) => {
      const addGuess = (guess: string) => {
        const result = computeGuess(guess, get().answer.name);
        const guesses = get().guesses.concat({ guess, result });
        const didWin = result === GuessState.Match ? true : false;

        set({
          guesses,
          gameState: didWin
            ? "won"
            : guesses.length === NUMBER_OF_GUESSES
            ? "lost"
            : "playing",
        });
      };

      return {
        answer: getRandomCity(),
        guesses: [],
        gameState: "playing",
        addGuess,
      };
    },
    {
      name: "citadel",
      getStorage: () => localStorage,
    }
  )
);
