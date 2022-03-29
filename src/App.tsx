import Confetti from "react-confetti";
import { useStore } from "./utils/store";
import { NUMBER_OF_GUESSES } from "./utils/constants";
import useWindowDimensions from "./utils/useWindowSize";

const App = () => {
  const state = useStore();
  const { width, height } = useWindowDimensions();
  let guesses = [...state.guesses];

  return (
    <>
      {state.gameState === "won" ? (
        <Confetti width={width} height={height} />
      ) : (
        <></>
      )}
      <main>
        <h1>"{state.answer.context}"</h1>
        <form
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
              city: { value: string };
            };
            if (state.guesses.length < NUMBER_OF_GUESSES)
              state.addGuess(target.city.value);
          }}
        >
          <input type="text" name="city" />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {guesses.map((guess) => (
            <li>
              {guess.guess} - {guess.result === 0 ? "Wrong" : "Right"}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default App;
