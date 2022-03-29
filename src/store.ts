import create from "zustand";
import { persist } from "zustand/middleware";
import { getRandomCity, computeGuess } from "./city-utils";

export const NUMBER_OF_GUESSES = 6;

export enum GuessState {
  Miss,
  Match,
}

interface GuessListItem {
  guess: string;
  result?: GuessState;
}

interface StoreState {
  answer: String;
  guesses: GuessListItem[];
  gameState: "playing" | "won" | "lost";
  addGuess(guess: string): void;
}

export const useStore = create<StoreState>(
  persist(
    (set, get) => {
      const addGuess = (guess: string) => {
        const result = computeGuess(guess, get().answer);

        const guesses = get().guesses.concat({ guess, result })

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
        keyboardLetterState: {},
        addGuess,
      };
    },
    {
      name: "citadel",
      getStorage: () => localStorage,
    }
  )
);
