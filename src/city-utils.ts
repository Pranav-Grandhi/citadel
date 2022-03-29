import citiesList from "./cities.json";
import { GuessState } from "./store";

export function getRandomCity() {
  return citiesList.cities[Math.floor(Math.random() * citiesList.cities.length)]
    .name;
}

export function computeGuess(guess: String, answerString: String): GuessState {
  let result: GuessState;
  if ((guess = answerString)) {
    result = GuessState.Match;
    return result;
  }
  result = GuessState.Miss;
  return result;
}
