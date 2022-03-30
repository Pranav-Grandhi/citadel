import citiesList from "../cities.json";
import { GuessState } from "./types";

export function getRandomCity(): { name: string; context: string } {
  return citiesList.cities[
    Math.floor(Math.random() * citiesList.cities.length)
  ];
}

export function computeGuess(guess: String, answerString: String): GuessState {
  let result: GuessState;
  if (guess.toLowerCase() === answerString.toLowerCase()) {
    result = GuessState.Match;
    return result;
  }
  result = GuessState.Miss;
  return result;
}
