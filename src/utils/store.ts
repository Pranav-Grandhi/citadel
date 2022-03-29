import create from "zustand";
import { persist } from "zustand/middleware";
import { getRandomCity, computeGuess } from "./city";
import { NUMBER_OF_GUESSES } from "./constants";

export enum GuessState {
  Miss,
  Match,
}

interface GuessListItem {
  guess: string;
  result?: GuessState;
}

interface StoreState {
  answer: { name: String; context: String };
  guesses: GuessListItem[];
  gameState: "playing" | "won" | "lost";
  addGuess(guess: string): void;
}

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
