import { useStore } from "../utils/store";

export default function GuessesTable() {
  const state = useStore();

  return (
    <>
      <div className="mt-6 border border-neutral-300 shadow-md rounded-xl">
        <table className="min-w-full table-fixed">
          <thead>
            <tr>
              <th>City</th>
              <th>Distance</th>
            </tr>
          </thead>
          <tbody>
            {state.guesses.map((guess, key) => (
              <tr key={key}>
                <td>{guess.guess}</td>
                <td>{Math.round(guess.distance)}km</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
