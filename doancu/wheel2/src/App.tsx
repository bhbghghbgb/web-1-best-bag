import { Container } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.scss";
import MyApp from "./MyApp";
import StatsLinks from "./StatsLinks";
import { HelloWorld } from "./HelloWorld";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <MyApp></MyApp>
        <HelloWorld />
        <StatsLinks />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
