import { useContext } from "react";
import CustomTable from "../components/common/table/customTable";
import { DataContext } from "../stores/dataContext";
import { MainContext } from "../stores/mainContext";
import { Box } from "@mui/material";

const titles = ["Title", "User", "Timestamp", "Actions"];

const TableContainer = () => {
  const [data] = useContext(DataContext);
  const [mainState] = useContext(MainContext);

  const { selectedItem } = mainState;

  const rowsObj = data[selectedItem]?.slice(0, 8) || [];
  const rows = rowsObj.map((row) => [
    row.title,
    row.user,
    row.timestamp,
    <Box sx={{ display: "flex", justifyContent: "center", p: 0 }}>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.background.default,
          display: "inline",
          p: 1
        })}
      >
        {row.type}
      </Box>
    </Box>,
  ]);

  return <CustomTable titles={titles} rows={rows} />;
};
export default TableContainer;
