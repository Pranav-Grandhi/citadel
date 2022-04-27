import citiesList from "../cities.json";
import { City, GuessState } from "./types";

// Get city from city list based on name
export function getSpecificCity(name: string): City {
  const citylist =  citiesList.cities.filter(city => city.name.toLowerCase() === name.toLowerCase())
  return citylist[0]
}

// Get a random city from json list
export function getRandomCity(): City {
  return citiesList.cities[
    Math.floor(Math.random() * citiesList.cities.length)
  ];
}

// Check if a guess is correct or not
export function computeGuess(guess: String, answerString: String): GuessState {
  let result: GuessState;
  if (guess.toLowerCase() === answerString.toLowerCase()) {
    result = GuessState.Match;
    return result;
  }
  result = GuessState.Miss;
  return result;
}

// Check if a city exists in the list of cities
export function isCityAvailable(guess: string): Boolean {
  return citiesList.cities.some(
    (city) => city.name.toLowerCase() === guess.toLowerCase()
  );
}
