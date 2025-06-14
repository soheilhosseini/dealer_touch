import { createContext, type Dispatch, type SetStateAction } from "react";

type ContextType = [{}, Dispatch<SetStateAction<{}>>];

export const MainContext = createContext<ContextType>([
  {
    selectedItem: null,
  },
  () => {},
]);
