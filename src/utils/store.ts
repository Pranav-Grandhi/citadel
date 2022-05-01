import create from "zustand";
import { persist } from "zustand/middleware";
import { NUMBER_OF_GUESSES } from "./constants";
import { GuessState, StoreState } from "./types";
import { getCity, computeGuess } from "./city";
import haversine from "./haversine";

export const useStore = create<StoreState>(
  persist(
    (set, get) => {
      const addGuess = (guess: string) => {
        const result = computeGuess(guess, get().answer.name);
        const distance = haversine(
          getCity("specific", guess).coordinate.latitude,
          getCity("specific", guess).coordinate.longitude,
          get().answer.coordinate.latitude,
          get().answer.coordinate.longitude,
        );
        const guesses = get().guesses.concat({ guess, result, distance });
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
        answer: getCity("random"),
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
