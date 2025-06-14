import { Box, Grid, TableContainer } from "@mui/material";
import { useState } from "react";
import StatisticsContainer from "../components/StatisticsContainer";
import ChartsContainer from "../components/chartsContainer";
import PageSection from "../components/sections/pageSection";
import { texts } from "../constants";
import useDataProvider from "../hooks/useDataProvider";
import type { ListItemInterface } from "../types/types";

const list: ListItemInterface[] = [
  {
    title: {
      title: texts.RECENT_CHANGE_STATES_TITLE,
      description: texts.RECENT_CHANGE_STATES_DESCRIPTION,
      isMainTitle: true,
      titleExtraComponent: 1,
    },
    children: <StatisticsContainer />,
  },
  {
    title: {
      title: "All wikis Event Stream Demo",
      description: "Recent Change States",
    },
    children: <ChartsContainer />,
  },
  {
    title: {
      title: "Recent Events",
      description: "Title",
    },
    children: <TableContainer />,
  },
];

const RecentChangeStates = () => {
  useDataProvider();

  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = () => {};

  return (
    <Grid
      container
      alignItems={"flex-start"}
      direction={"column"}
      spacing={6}
      sx={{ pb: 18 }}
    >
      {list.map((item, index) => (
        <Box key={item.title.title + index} sx={{ mt: 18 }}>
          <PageSection titleData={item.title}>{item.children}</PageSection>
        </Box>
      ))}
    </Grid>
  );
};

export default RecentChangeStates;
