export enum GuessState {
  Miss,
  Match,
}

export interface GuessesItem {
  guess: string;
  result?: GuessState;
  distance: number;
}

export interface StoreState {
  answer: City;
  guesses: GuessesItem[];
  gameState: "playing" | "won" | "lost";
  addGuess(guess: string): void;
}

export interface City {
  name: string;
  context: string;
  coordinate: { longitude: number; latitude: number };
}
