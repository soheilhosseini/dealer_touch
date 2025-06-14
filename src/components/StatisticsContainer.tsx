import { Grid } from "@mui/material";
import StatisticCard from "./common/card/statisticCard";
import { useContext, useState } from "react";
import { DataContext } from "../stores/dataContext";
import { MAX_STATISTIC_CARDS_NUMBER } from "../constants";
import type { ServerDataItem } from "../types/entities";
import { MainContext } from "../stores/mainContext";

const CardsContainer = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [data] = useContext(DataContext);
  const [mainState, setMainState] = useContext(MainContext);
  const handleCheckIfItemIsSelected = (index: number) => selectedItem === index;

  const slicedDataList = Object.entries(data)
    // @ts-ignore
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, MAX_STATISTIC_CARDS_NUMBER) as [
    string,
    Partial<ServerDataItem>[]
  ][];

  const handleSelectItem = (
    index: number,
    key: ServerDataItem["server_name"]
  ) => {
    setSelectedItem(index + 1);
    setMainState({ ...mainState, selectedItem: key });
  };

  return (
    <Grid container justifyContent={"space-between"} spacing={6}>
      {slicedDataList.map(
        ([key, value]: [string, Partial<ServerDataItem>[]], index: number) => (
          <StatisticCard
            isSelected={handleCheckIfItemIsSelected(index + 1)}
            data={value}
            title={key}
            onClick={() => handleSelectItem(index, key)}
            key={key}
          />
        )
      )}
    </Grid>
  );
};

export default CardsContainer;
