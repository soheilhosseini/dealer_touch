import { useContext, useEffect, useMemo } from "react";
import { DataContext } from "../stores/dataContext";
import { MainContext } from "../stores/mainContext";

const EDITS_CHART_TIME_LENGTH = 10;

const useEditsChartProvider = () => {
  const [data] = useContext(DataContext);
  const [mainState] = useContext(MainContext);
  const { selectedItem } = mainState;

  let editsTimeArray: { value: number; name: number | string }[] = useMemo(
    () => [],
    [selectedItem]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      mutateEditsArray();
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedItem]);


  let counter = useMemo(() => 0, [selectedItem]);
  const mutateEditsArray = () => {
    if (selectedItem) {
      const now = new Date().getTime() / 1000;
      const index = counter
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
      ++counter
    }
  };

  return editsTimeArray;
};

export default useEditsChartProvider;
