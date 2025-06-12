import { Grid } from "@mui/material";
import StatisticCard from "./common/card/statisticCard";
import { useContext, useState } from "react";
import {DataContext} from "../stores/dataContext";
import { MAX_STATISTIC_CARDS_NUMBER } from "../constants";
import type { DataType } from "../types/types";
import type { ServerDataItem } from "../types/entities";

const CardsContainer = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [state] = useContext(DataContext);
  const handleCheckIfItemIsSelected = (index: number) => selectedItem === index;

  const slicedDataList = Object.entries(state).slice(
    0,
    MAX_STATISTIC_CARDS_NUMBER
  );

  // const allData = Object.values(state as Record<string, ServerDataItem[]>)
  //   .reduce(
  //     (previousValue: ServerDataItem[], items: ServerDataItem[]) => [
  //       ...previousValue,
  //       ...items,
  //     ],
  //     [] as ServerDataItem[]
  //   )
  //   .sort((a, b) => b.timestamp - a.timestamp);

  return (
    <Grid container justifyContent={"space-between"} spacing={6}>
      {/* <StatisticCard
        isSelected={handleCheckIfItemIsSelected(0)}
        data={allData}
        title={"All wikis"}
        onClick={() => setSelectedItem(0)}
      /> */}
      {slicedDataList.map(([key, value]: [string, DataType], index: number) => (
        <StatisticCard
          isSelected={handleCheckIfItemIsSelected(index + 1)}
          data={value}
          title={key}
          onClick={() => setSelectedItem(index + 1)}
          key={key}
        />
      ))}
    </Grid>
  );
};

export default CardsContainer;
