import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "transparent",
    color: theme.palette.secondary.light,
    fontSize: "12px",
    textAlign: "left",
    paddingTop: 0,
    paddingBottom: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderRadius: "10px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "white",
  marginTop: 2,
  borderRadius: "10px",
  overflow: "hidden",
}));

export default function CustomizedTables({ titles, rows }) {
  return (
    <TableContainer sx={{ width: "100%" }}>
      <Table sx={{ borderCollapse: "separate", borderSpacing: "0 10px" }}>
        <TableHead>
          <TableRow>
            {titles.map((item: string) => (
              <StyledTableCell>{item}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length ? (
            rows.map((row) => (
              <StyledTableRow key={row.name}>
                {row.map((item) => (
                  <StyledTableCell component="th" scope="row">
                    {item}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))
          ) : (
            <StyledTableRow>
              <StyledTableCell component="th" scope="row" colSpan={4} sx={{textAlign: 'center'}}>
                No Data
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
