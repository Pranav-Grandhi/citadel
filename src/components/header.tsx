import { useState } from "react";
import Modal from "./modal";
import { NUMBER_OF_GUESSES } from "../utils/constants";

export default function Header() {
  const [helpOverlay, setHelpOverlay] = useState(false);

  return (
    <>
      {helpOverlay ? (
        <Modal
          size="md"
          title={
            <div className="flex justify-between items-center mb-6 pb-6 border-b border-neutral-300">
              <div className="font-semibold">ℹ️ Help</div>
              <button onClick={() => setHelpOverlay(!helpOverlay)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          }
          body={
            <div>
              <p className="mb-4">
                The objective of <b>Citadel</b> is to guess a city in{" "}
                <b>{NUMBER_OF_GUESSES}</b> tries based on a random fact.
              </p>
              <p className="mb-4">
                Once you guess a city it will be added to the guesses table as
                long as it is not previously used, in our list of cities, not
                empty or your game is over.
              </p>
              <p>
                <b>NOTE:</b> Cities are currently U.S. only!
              </p>
            </div>
          }
        />
      ) : (
        <></>
      )}
      <header className="flex justify-between w-full p-6 border-b border-neutral-300">
        <div className="font-semibold">🏰 CITADEL</div>
        <button onClick={() => setHelpOverlay(!helpOverlay)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </header>
    </>
  );
}
