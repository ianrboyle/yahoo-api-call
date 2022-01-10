import React, { useState } from "react";
import axios from "axios";

function App() {
  const [companyInfo, setInfo] = useState([]);
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
        const address = response.data.quoteSummary.result[0].assetProfile;
        // const results = response.data.quoteSummary;
        console.log(response.data);
        setInfo(address);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <button onClick={callApi}>Get Joke</button>
      <p>{companyInfo.address1}</p>
    </div>
  );
}

export default App;
