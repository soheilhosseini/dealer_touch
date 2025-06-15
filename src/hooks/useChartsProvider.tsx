import { useContext, useEffect, useMemo } from "react";
import { DataContext } from "../stores/dataContext";
import { MainContext } from "../stores/mainContext";
import { MAX_STATISTIC_CARDS_NUMBER } from "../constants";
import useEditsChartProvider from "./useEditsChartProvider";
import useTypesChartProvider from "./useTypesChartProvider";
// I've used mutate to preserve refrence of the array in order to prevent moving bars position cuses by change refrence of the obj

const EDITS_CHART_TIME_LENGTH = 10;

const useChartsProvider = () => {
  const [data] = useContext(DataContext);
  const [mainState] = useContext(MainContext);
  const { selectedItem } = mainState;
  const dataLength = data[selectedItem]?.length;

  const editsTimeArray = useEditsChartProvider();
  const typesArray = useTypesChartProvider();

  let botsArray = useMemo(
    () => [
      { name: "Not a bot", value: 0 },
      { name: "bot", value: 0 },
    ],
    [selectedItem]
  );

  let majorMinorArray = useMemo(
    () => [
      { name: "Major", value: 0 },
      { name: "Minor", value: 0 },
    ],
    [selectedItem]
  );

  useEffect(() => {
    mutateBotsArray();
    mutateMajorMinorArray();
  }, [dataLength]);

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

  return { typesArray, botsArray, majorMinorArray, editsTimeArray };
};

export default useChartsProvider;
