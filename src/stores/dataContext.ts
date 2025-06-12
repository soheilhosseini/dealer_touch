import { createContext, type Dispatch, type SetStateAction } from "react";

type ContextType = [{}, Dispatch<SetStateAction<{}>>];

export const DataContext = createContext<ContextType>([{}, () => {}]);
