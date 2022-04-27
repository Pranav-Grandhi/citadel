import { useStore } from "../utils/store";
import { NUMBER_OF_GUESSES } from "../utils/constants";
import { isCityAvailable } from "../utils/city";
import toast, { Toast } from "react-hot-toast";

function Notification({ t, message }: { t: Toast; message: string }) {
  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } flex items-center p-4 rounded-lg border border-neutral-300 bg-white shadow`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3 h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
      {message}
    </div>
  );
}

function CreateToast({ message }: { message: string }) {
  return toast.custom((t) => <Notification t={t} message={message} />)
}

export default function GameForm() {
  const state = useStore();

  return (
    <>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          // do not reload webpage on form submit
          e.preventDefault();
          // get city value from form input
          const target = e.target as typeof e.target & {
            city: { value: string };
          };
          // variable to see if city is in city list
          const cityAvailable = isCityAvailable(target.city.value);

          // preconditions to be matched before guess is added
          if (
            // guesses is less than maximum guesses allowed
            state.guesses.length < NUMBER_OF_GUESSES &&
            // game cannot be won
            state.gameState !== "won" &&
            // input cannot be empty
            target.city.value !== "" &&
            // city must be in city list
            cityAvailable === true &&
            // city  cannot be previously used
            state.guesses.find((i) => i.guess == target.city.value) ===
              undefined
          ) {
            state.addGuess(target.city.value);
          }
          // show toasts based on errors
          if (!cityAvailable && target.city.value !== "") {
            CreateToast({ message: "Not in city list" });
          }
          if (target.city.value !== "") {
            CreateToast({ message: "Cannot provide empty input" })
          }
          if (
            state.guesses.find((i) => i.guess == target.city.value) ===
            undefined
          ) {
            CreateToast({ message: "Cannot use previously gussed city" });
          }
        }}
      >
        <input
          type="text"
          name="city"
          autoComplete="off"
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
