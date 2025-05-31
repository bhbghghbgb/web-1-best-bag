import { Container } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import "./App.scss";
import oiiaiM from "./assets/oiiai.webm";
import oiiaiP from "./assets/oiiai.webp";
import reactLogo from "./assets/react.svg";
import tsLogo from "./assets/ts.svg";
import MyApp from "./MyApp";
import viteLogo from "/vite.svg";
import StatsLinks from "./StatsLinks";

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <MyApp></MyApp>
        <div className="welcome">
          <div className="flex justify-center">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank">
              <img src={tsLogo} className="logo ts" alt="Typescript logo" />
            </a>
            <Oiiai />
          </div>
          <h1>Vite + React + TS + Oiiai</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React and Typescript logos to learn more
          </p>
        </div>
        <StatsLinks />
      </Container>
    </QueryClientProvider>
  );
}

function Oiiai() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <a
      style={{ cursor: "pointer" }}
      onClick={(e) => {
        e.preventDefault();
        setShowVideo((prev) => !prev);
      }}
    >
      <video
        src={oiiaiM}
        hidden={!showVideo}
        autoPlay
        loop
        muted
        controls={false}
        className="logo oiiai"
      />
      <img
        src={oiiaiP}
        hidden={showVideo}
        alt="oiiai cat"
        className="logo oiiai"
      />
    </a>
  );
}

export default App;
