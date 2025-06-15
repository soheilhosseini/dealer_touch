import type { ServerDataItem } from "./entities";

export interface RowItem {
  title: string;
  value: string | number;
}

export interface CardInterface {
  list: RowItem[];
  title: string;
}

export type DataType = Record<
  ServerDataItem["server_name"],
  Partial<ServerDataItem>[]
>;

export type StatisticsType = Partial<ServerDataItem>[];

export interface TitleInterface {
  title: string;
  description?: string;
  isMainTitle?: boolean;
  titleExtraComponent?: React.ReactNode;
}

export interface ListItemInterface {
  title: TitleInterface;
  children: React.ReactNode;
}

export interface MainContext {
  selectedItem: ServerDataItem["server_name"];
}
