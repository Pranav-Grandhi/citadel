import citiesList from "../cities.json";
import { City, GuessState } from "./types";

export function getSpecificCity(name: string): City {
  const citylist =  citiesList.cities.filter(city => city.name.toLowerCase() === name.toLowerCase())
  return citylist[0]
}

export function getRandomCity(): City {
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

export function isCityAvailable(guess: string): Boolean {
  return citiesList.cities.some(
    (city) => city.name.toLowerCase() === guess.toLowerCase()
  );
}
