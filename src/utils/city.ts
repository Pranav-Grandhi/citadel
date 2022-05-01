import citiesList from "../cities.json";
import { City, GuessState } from "./types";

type Specifcity = "random" | "specific";

// Get either random or specific city based on specificity enum
export function getCity(specificity: Specifcity, name?: string): City {
  if (specificity === "random") {
    return citiesList.cities[
      Math.floor(Math.random() * citiesList.cities.length)
    ];
  } else {
    const citylist =  citiesList.cities.filter(city => city.name.toLowerCase() === name?.toLowerCase())
    return citylist[0]
  }
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
