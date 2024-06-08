import { useState } from "react";
import "./App.css";

function App() {
  const [siteStatus, setSiteStatus] = useState(1);

  const TopBar = () => {
    return (
      <>
        <img
          src="logo.png"
          width="400px"
          onClick={() => {
            setSiteStatus(1);
          }}
        />
        <h1
          onClick={() => {
            setSiteStatus(2);
          }}
        >
          info
        </h1>
        <h1
          onClick={() => {
            setSiteStatus(3);
          }}
        >
          product
        </h1>
      </>
    );
  };

  const MainSecton = () => {
    if (siteStatus === 1) {
      return <h2>test1</h2>;
    }
    if (siteStatus === 2) {
      return <h2>test2</h2>;
    }
    if (siteStatus === 3) {
      return <h2>test3</h2>;
    }
  };
  return (
    <>
      <TopBar />
      <MainSecton />
    </>
  );
}

export default App;
