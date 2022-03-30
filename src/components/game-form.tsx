import { useStore } from "../utils/store";
import { NUMBER_OF_GUESSES } from "../utils/constants";

export default function GameForm() {
  const state = useStore();

  return (
    <>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          const target = e.target as typeof e.target & {
            city: { value: string };
          };

          if (
            state.guesses.length < NUMBER_OF_GUESSES &&
            state.gameState !== "won" &&
            target.city.value !== ""
          )
            state.addGuess(target.city.value);
        }}
      >
        <input
          type="text"
          name="city"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 "
        />
        <button
          type="submit"
          className="mt-3 px-3 py-2 w-full text-white font-medium rounded-md bg-neutral-700"
        >
          Submit
        </button>
      </form>
    </>
  );
}
