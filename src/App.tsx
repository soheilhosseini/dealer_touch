import "./App.css";
import RecentChangeStates from "./pages/recentChangeStates";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import { Grid, CssBaseline } from "@mui/material";
import { DataContext } from "./stores/dataContext";
import { useState } from "react";
import ErrorBoundary from "./components/errorBoundry";
import { MainContext } from "./stores/mainContext";

const dataDefaultContextValue = {};
const StatisticDefaultContextValue = {};

function App() {
  const data = useState(dataDefaultContextValue);
  const mainState = useState(StatisticDefaultContextValue);
  return (
    <ErrorBoundary fallback={<>Error</>}>
      <ThemeProvider theme={theme}>
        <MainContext.Provider value={mainState}>
          <DataContext.Provider value={data}>
            <CssBaseline />
            <Grid sx={{ maxWidth: "1240px" }}>
              <RecentChangeStates />
            </Grid>
          </DataContext.Provider>
        </MainContext.Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
