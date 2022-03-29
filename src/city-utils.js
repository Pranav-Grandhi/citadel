import citiesList from "./cities.json";

export function getRandomCity() {
    return Math.floor(Math.random() * citiesList.cities.length)
}

export function getCityInfo() {
    const cityIndex = getRandomCity();
    return {
        names: citiesList.cities[cityIndex].names,
        context: citiesList.cities[cityIndex].context
    }
}