import type { ServerDataItem } from "../types/entities";
import type { DataType, StatisticsType } from "../types/types";

const startDate = Math.floor(new Date().getTime() / 1000);

export const handleAddTolist = (list: DataType, data: ServerDataItem) => {
  const { type, bot, server_name, minor } = data;
  const minimizedData = {
    type,
    // I have used my own timestamps because the server sends items with no order and I can get rid of the sorting data
    timestamp: Math.floor(new Date().getTime() / 1000),
    bot,
    minor,
  };
  if (list[server_name]) {
    list[server_name].unshift(minimizedData);
  } else {
    list[server_name] = [minimizedData];
  }
  list["All wikis"].unshift(minimizedData);
};

export const handleRateCalculator = (data: StatisticsType) => {
  const now = Math.floor(new Date().getTime() / 1000);
  const handleCounterInDuration = numberOfItemsPublishedInADuration(data)(now);
  const averageAccordingToSeconds = averageCalculator(data)(startDate)(now);

  const second = handleCounterInDuration(1);
  const minute = handleCounterInDuration(60);
  const hour = handleCounterInDuration(3600);
  const secondAvg = averageAccordingToSeconds(1);
  const minuteAvg = averageAccordingToSeconds(60);
  const hourAvg = averageAccordingToSeconds(3600);
  return { second, minute, hour, secondAvg, minuteAvg, hourAvg };
};

const averageCalculator =
  (data: StatisticsType) =>
  (startDate: number) =>
  (now: number) =>
  (duration: number) =>
    Math.floor((data.length / (now - startDate)) * duration);

const numberOfItemsPublishedInADuration =
  (data: StatisticsType) => (now: number) => (duration: number) => {
    let number = 0;
    for (let index = 0; index < data.length; index++) {
      if (now - data[index].timestamp! > duration) {
        break;
      }
      number = index + 1;
    }
    return number;
  };

export const addCommas = (number: number) => {
  return number.toLocaleString();
};
