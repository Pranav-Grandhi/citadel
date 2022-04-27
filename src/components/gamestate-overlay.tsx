import Modal from "./modal";
import { useStore } from "../utils/store";
import Confetti from "react-confetti";
import useWindowDimensions from "../utils/useWindowSize";

function Overlay({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className="z-10 absolute flex justify-center items-center w-full h-full bg-black bg-opacity-75">
      <div className="z-20 absolute max-w-sm w-full px-8 py-6 rounded-3xl bg-white">
        <div>{children}</div>
      </div>
    </div>
  );
}

export default function GameStateOverlay() {
  const state = useStore();
  const { width, height } = useWindowDimensions();

  return (
    <>
      {state.gameState !== "playing" ? (
        <>
          {state.gameState === "won" ? (
            <>
              <Confetti width={width} height={height} />
              <Modal
                size="sm"
                title={
                  <div className="mb-6 pb-6 font-semibold border-b border-neutral-300 text-center">
                    😀 You Won
                  </div>
                }
                body={
                  <>
                    The city is:{" "}
                    <span className="font-semibold">{state.answer.name}</span>
                  </>
                }
              ></Modal>
            </>
          ) : state.gameState === "lost" ? (
            <Modal
              size="sm"
              title={
                <div className="mb-6 pb-6 font-semibold border-b border-neutral-300 text-center">
                  😢 You Lost
                </div>
              }
              body={
                <>
                  The city is:{" "}
                  <span className="font-semibold">{state.answer.name}</span>
                </>
              }
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
