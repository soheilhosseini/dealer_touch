import { Stack } from "@mui/material";
import BarChartCard from "./common/card/barChartCard";
import { useContext } from "react";
import { DataContext } from "../stores/dataContext";
import { MainContext } from "../stores/mainContext";
import LineChartCard from "./common/card/lineChartCard";
import useChartsProvider from "../hooks/useChartsProvider";

// const data = [
//   {
//     name: "Page A",

//     value: 2400,
//   },
//   {
//     name: "Page B",

//     value: 1398,
//   },
//   {
//     name: "Page C",
//     value: 1398,
//   },
//   {
//     name: "Page D",
//     value: 1398,
//   },
// ];
// const data2 = [
//   {
//     name: "Page A",

//     value: 2400,
//   },
//   {
//     name: "Page B",

//     value: 1398,
//   },
// ];
// const data3 = [
//   {
//     name: "Page A",

//     value: 2400,
//   },
//   {
//     name: "Page B",

//     value: 1398,
//   },
// ];

const ChartsContainer = () => {
  const { TypesArray, botsArray, majorMinorArray, editsTimeArray } =
    useChartsProvider();
  const [mainState] = useContext(MainContext);
  const { selectedItem } = mainState;

  return (
    <Stack direction={"column"} spacing={6}>
      <Stack
        direction={"row"}
        sx={{ justifyContent: "space-between" }}
        spacing={6}
      >
        <BarChartCard data={TypesArray} title="Type of Event" />
        <BarChartCard data={botsArray} title="Posted by bot?" />
        <BarChartCard data={majorMinorArray} title="Major or Minor edit?" />
      </Stack>

      <LineChartCard data={[...editsTimeArray]} title="Edits Overtime" />
    </Stack>
  );
};
export default ChartsContainer;
