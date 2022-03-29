import { useState, useEffect } from "react";
import { getCityInfo } from "./city-utils";

const App = () => {
  const [cityOTD, setCityOTD] = useState({ names: [], context: "" })
  const [guess, setGuess] = useState("");
  
  // TODO: On page reload city changes needs to be fixed.
  useEffect(() => {
    setCityOTD(getCityInfo());
  }, [])

  function handleSubmit() {
    // TODO: validate guess
    alert(guess)
  }

  return (
    <>
      <main>
        <h1>"{cityOTD.context}"</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="city" value={guess} onChange={(e) => setGuess(e.target.value)}  />
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
};

export default App;
