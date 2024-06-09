import { useState } from "react";
import MainSection from "./components/MainSection/MainSection";
import "./App.css";

function App() {
  const [siteStatus, setSiteStatus] = useState(1);

  const TopBar = () => {
    return (
      <section className="topBar">
        <h1
          onClick={() => {
            setSiteStatus(2);
          }}
        >
          about us
        </h1>
        <h1
          onClick={() => {
            setSiteStatus(3);
          }}
        >
          product
        </h1>
        <img
          src="logo.png"
          width="400px"
          onClick={() => {
            setSiteStatus(1);
          }}
        />
        <h1
          onClick={() => {
            setSiteStatus(4);
          }}
        >
          contact
        </h1>
        <h1
          onClick={() => {
            setSiteStatus(5);
          }}
        >
          media
        </h1>
      </section>
    );
  };

  return (
    <section className="element">
      <TopBar />
      <MainSection n={siteStatus} />
    </section>
  );
}

export default App;
