export type ServerDataItemType = "categorize" | "edit" | "log" | "new";

export type ServerDataItem = {
  bot: boolean;
  type: ServerDataItemType;
  minor?: boolean;
  timestamp: number;
  server_name: string;
  user: string;
  title: string;
};
