import create from "zustand";
import { persist } from "zustand/middleware";
import { NUMBER_OF_GUESSES } from "./constants";
import { GuessState, StoreState } from "./types";
import { getRandomCity, computeGuess, getSpecificCity } from "./city";
import haversine from "./haversine";

export const useStore = create<StoreState>(
  persist(
    (set, get) => {
      const addGuess = (guess: string) => {
        const result = computeGuess(guess, get().answer.name);
        const distance = haversine(
          getSpecificCity(guess).coordinate.latitude,
          getSpecificCity(guess).coordinate.longitude,
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
