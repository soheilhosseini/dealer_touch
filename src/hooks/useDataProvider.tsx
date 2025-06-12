import { useContext, useEffect, useRef } from "react";
import { DATA_URL, UPDATE_DELAY_MILISECOND } from "../constants";
import { DataContext } from "../stores/dataContext";
import type { DataType } from "../types/types";
import { handleAddTolist } from "../utils/general";
import { StatisticsContext } from "../stores/statisticsContext";

const useDataProvider = () => {
  const [data, setData] = useContext(DataContext);

  const dataRef = useRef<DataType>({ "All wikis": [] });

  useEffect(() => {
    const eventSource = new EventSource(DATA_URL);
    eventSource.addEventListener("message", handleUpdateData);
    return () => {
      eventSource.removeEventListener("message", handleUpdateData);
      eventSource.close();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setData({ ...dataRef.current });
    }, UPDATE_DELAY_MILISECOND);
    return () => clearInterval(interval);
  }, []);

  const handleUpdateData = (event: MessageEvent) => {
    if (event?.data) {
      const data = JSON.parse(event.data);
      handleAddTolist(dataRef.current, data);
    } else {
      console.log("No Data");
    }
  };
};

export default useDataProvider;
