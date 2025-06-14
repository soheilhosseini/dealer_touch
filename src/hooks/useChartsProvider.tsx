import { useContext, useEffect } from "react";
import { DataContext } from "../stores/dataContext";
import { MainContext } from "../stores/mainContext";
import { MAX_STATISTIC_CARDS_NUMBER } from "../constants";
// I've used mutate to preserve refrence of the array in order to prevent moving bars position cuses by change refrence of the obj

const EDITS_CHART_TIME_LENGTH = 10;
const startTime = new Date().getTime();

const TypesArray = [
  { name: "categorize", value: 0 },
  { name: "log", value: 0 },
  { name: "edit", value: 0 },
  { name: "new", value: 0 },
];

const botsArray = [
  { name: "Not a bot", value: 0 },
  { name: "bot", value: 0 },
];

const majorMinorArray = [
  { name: "Major", value: 0 },
  { name: "Minor", value: 0 },
];

let editsTimeArray: { value: number; name: number | string }[] = [];

const useChartsProvider = () => {
  const [data] = useContext(DataContext);
  const [mainState] = useContext(MainContext);
  const { selectedItem } = mainState;
  const dataLength = data[selectedItem]?.length;

  useEffect(() => {
    const interval = setInterval(() => {
      mutateEditsArray();
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedItem]);

  useEffect(() => {
    mutateBotsArray();
    mutateMajorMinorArray();
    mutateTypesArray();
  }, [dataLength]);

  const mutateTypesArray = () => {
    data[selectedItem]?.forEach((element) => {
      const index = TypesArray.findIndex((item) => item.name === element.type);
      ++TypesArray[index].value;
    });
  };

  const mutateBotsArray = () => {
    data[selectedItem]?.forEach((element) => {
      if (element.bot) {
        ++botsArray[1].value;
      } else {
        ++botsArray[0].value;
      }
    });
  };

  const mutateMajorMinorArray = () => {
    data[selectedItem]?.forEach((element) => {
      if (element.minor) {
        ++majorMinorArray[1].value;
      } else if (element.minor === false) {
        ++majorMinorArray[0].value;
      }
    });
  };

  const mutateEditsArray = () => {
    if (selectedItem) {
      const now = new Date().getTime() / 1000;
      const index = new Date().getSeconds();
      const numbers =
        data[selectedItem]?.filter((item) => now - item.timestamp <= 1)
          .length || 0;
      editsTimeArray.push({
        name: index.toString(),
        value: numbers,
      });
      while (editsTimeArray.length > EDITS_CHART_TIME_LENGTH) {
        editsTimeArray.shift();
      }
    }
  };

  return { TypesArray, botsArray, majorMinorArray, editsTimeArray };
};

export default useChartsProvider;
