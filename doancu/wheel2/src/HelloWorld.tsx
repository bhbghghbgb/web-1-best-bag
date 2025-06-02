import { useState } from "react";
import "./App.scss";
import oiiaiM from "./assets/oiiai.webm";
import oiiaiP from "./assets/oiiai.webp";
import reactLogo from "./assets/react.svg";
import tsLogo from "./assets/ts.svg";
import viteLogo from "/vite.svg";

export function HelloWorld() {
  return (
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
        <HelloWorldCounter />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React and Typescript logos to learn more
      </p>
    </div>
  );
}

export function HelloWorldCounter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
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
