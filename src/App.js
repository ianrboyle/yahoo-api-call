import React from "react";
import axios, { Axios } from "axios";
function App() {
  const callApi = () => {
    axios.get("https://v2.jokeapi.dev/joke/Any").then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="App">
      <button onClick={callApi}>Get Joke</button>
    </div>
  );
}

export default App;
