import { useRef, useEffect } from "react";
import Confetti from "react-confetti";
import { useStore } from "./utils/store";
import { NUMBER_OF_GUESSES } from "./utils/constants";
import useWindowDimensions from "./utils/useWindowSize";
import createGlobe from "./utils/globe";

const App = () => {
  const state = useStore();
  const { width, height } = useWindowDimensions();
  let guesses = [...state.guesses];
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width!,
      height: width!,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
      ],
      onRender: (state) => {},
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <>
      {state.gameState === "won" ? (
        <Confetti width={width} height={height} />
      ) : (
        <></>
      )}
      <main className="grid grid-cols-2 min-h-screen divide-x divide-neutral-300">
        <div className="flex flex-col justify-center items-center h-full">\
          <div className="w-1/2">
            <h1 className="mb-6 font-serif font-bold text-2xl italic">
              &quot;{state.answer.context}&quot;
            </h1>
            <div>
              <form
                onSubmit={(e: React.SyntheticEvent) => {
                  e.preventDefault();
                  const target = e.target as typeof e.target & {
                    city: { value: string };
                  };

                  if (
                    state.guesses.length < NUMBER_OF_GUESSES &&
                    state.gameState !== "won"
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
              <div className="mt-6 border border-neutral-300 shadow-md rounded-xl">
                <table className="min-w-full table-fixed">
                  <thead>
                    <tr>
                      <th>City</th>
                      <th>Distance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.guesses.map((guess) => (
                      <tr>
                        <td>{guess.guess}</td>
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          <canvas
            ref={canvasRef}
            style={{ width: width! / 2, height: width! / 2 }}
          />
        </div>
      </main>
    </>
  );
};

export default App;
