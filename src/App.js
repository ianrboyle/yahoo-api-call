import React, { useState } from "react";
import axios from "axios";

function App() {
  const [companyInfo, setInfo] = useState("");
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
        let address = response.data.quoteSummary.result[0].assetProfile.address1;
        console.log(response.data.quoteSummary.result[0].assetProfile.address1);
        setInfo(address);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <button onClick={callApi}>Get Joke</button>
      <p>{companyInfo}</p>
    </div>
  );
}

export default App;
