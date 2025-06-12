import type { ServerDataItem, ServerDataItemType } from "./entities";

export interface RowItem {
  title: string;
  value: string | number;
}

export interface CardInterface {
  list: RowItem[];
  title: string;
}

export type DataType = Record<ServerDataItem["server_name"], Partial<ServerDataItem>[]>;

export type URLType = {
  bot: number;
  notABot: number;
  minor: number;
  major: number;
  type: Partial<Record<ServerDataItemType, number>>;
  total: number;
  second: number;
  minute: number;
  hour: number;
};

export type StatisticsType = Record<string, URLType>;

export interface TitleInterface {
  title: string;
  description: string;
  isMainTitle?: boolean;
  titleExtraComponent?: React.ReactNode;
}

export interface ListItemInterface {
  title: TitleInterface;
  children: React.ReactNode;
}
