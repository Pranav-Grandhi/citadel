export enum GuessState {
  Miss,
  Match,
}

export interface GuessesItem {
  guess: string;
  result?: GuessState;
}

export interface StoreState {
  answer: { name: String; context: String };
  guesses: GuessesItem[];
  gameState: "playing" | "won" | "lost";
  addGuess(guess: string): void;
}
