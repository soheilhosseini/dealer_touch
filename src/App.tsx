import "./App.css";
import RecentChangeStates from "./pages/recentChangeStates";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import { Grid, CssBaseline } from "@mui/material";
import { DataContext } from "./stores/dataContext";
import { useState } from "react";
import ErrorBoundary from "./components/errorBoundry";
import { StatisticsContext } from "./stores/statisticsContext";

const dataDefaultContextValue = {};
const StatisticDefaultContextValue = {};

function App() {
  const data = useState(dataDefaultContextValue);
  const statistics = useState(StatisticDefaultContextValue);
  return (
    <ErrorBoundary fallback={<>Error</>}>
      <ThemeProvider theme={theme}>
        <DataContext.Provider value={data}>
          <StatisticsContext.Provider value={statistics}>
            <CssBaseline />
            <Grid sx={{ maxWidth: "1240px" }}>
              <RecentChangeStates />
            </Grid>
          </StatisticsContext.Provider>
        </DataContext.Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
