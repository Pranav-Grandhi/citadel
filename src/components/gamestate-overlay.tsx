import { useStore } from "../utils/store";

export default function GameStateOverlay() {
  const state = useStore();

  return (
    <>
      {state.gameState !== "playing" ? (
        <>
          <div className="absolute flex justify-center items-center w-full h-full bg-black bg-opacity-75">
            <div className="z-10 absolute max-w-sm w-full px-8 py-6 rounded-3xl bg-white">
              <div className="mb-6 pb-6 font-semibold border-b border-neutral-300 text-center">
                {state.gameState === "won" ? (
                  <>😀 You Won!</>
                ) : state.gameState === "lost" ? (
                  <>😢 You Lost.</>
                ) : (
                  <></>
                )}
              </div>
              <div>
                The city is:{" "}
                <span className="font-semibold">{state.answer.name}</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
