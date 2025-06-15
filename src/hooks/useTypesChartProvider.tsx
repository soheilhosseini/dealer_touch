import { useContext, useEffect, useMemo } from "react";
import { DataContext } from "../stores/dataContext";
import { MainContext } from "../stores/mainContext";
// I've used mutate to preserve refrence of the array in order to prevent moving bars position cuses by change refrence of the obj

const useTypesChartProvider = () => {
  const [data] = useContext(DataContext);
  const [mainState] = useContext(MainContext);
  const { selectedItem } = mainState;
  const dataLength = data[selectedItem]?.length;

  let typesArray = useMemo(
    () => [
      { name: "categorize", value: 0 },
      { name: "log", value: 0 },
      { name: "edit", value: 0 },
      { name: "new", value: 0 },
    ],
    [selectedItem]
  );

  useEffect(() => {
    mutateTypesArray();
  }, [dataLength]);

  const mutateTypesArray = () => {
    data[selectedItem]?.forEach((element) => {
      const index = typesArray.findIndex((item) => item.name === element.type);
      ++typesArray[index].value;
    });
  };

  return typesArray;
};

export default useTypesChartProvider;
