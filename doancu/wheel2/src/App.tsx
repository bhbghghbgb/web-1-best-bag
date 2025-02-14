import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import tsLogo from "/typescript.svg";
import "./App.css";
import { Container } from "@mui/material";
import MyApp from "./MyApp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <MyApp></MyApp>
        <>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank">
              <img src={tsLogo} className="logo typescript" alt="Typescript logo" />
            </a>
          </div>
          <h1>Vite + React + Typescript</h1>
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
        </>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
