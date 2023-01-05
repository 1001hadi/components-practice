import React from "react";
import {
  GoBell,
  GoCloudDownload,
  GoDatabase,
  GoBeaker,
  GoZap,
} from "react-icons/go";
import Button from "./components/Button";

function App() {
  const handleClick = () => {
    console.log("Clicked!");
  };
  return (
    <div className="App">
      <div>
        <Button success rounded outline className="mb-5" onClick={handleClick}>
          <GoBell />
          Click Here!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoBeaker />
          Click There!
        </Button>
      </div>
      <div>
        <Button primary>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button outline rounded warning>
          <GoDatabase />
          GO to Home
        </Button>
      </div>
      <div>
        <Button danger>
          <GoZap />
          Last Deal!
        </Button>
      </div>
    </div>
  );
}

export default App;
