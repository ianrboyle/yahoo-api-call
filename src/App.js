import React from "react";
import axios from "axios";

function App() {
  const callApi = () => {
    // var axios = require("axios").default;
    var options = {
      method: "GET",
      url: "https://yfapi.net/v11/finance/quoteSummary/AAPL",
      params: { modules: "defaultKeyStatistics,assetProfile" },
      headers: {
        "x-api-key": "",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div className="App">
      <button onClick={callApi}>Get Joke</button>
    </div>
  );
}

export default App;
