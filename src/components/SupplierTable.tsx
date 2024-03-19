import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";

function createData(
  name: string,
  goods: string,
  freight: string,
  total: string,
  cur: string,
  base: string
) {
  return { name, goods, freight, total, cur, base };
}

const rows = [
  createData(
    "Engineering Co. Ltd",
    "3,459.70",
    "0.0",
    "3,459.70",
    "EUR",
    "3,811.92"
  ),
  createData(
    "Fintec Co. Ltd - SPARES",
    "4,370.60",
    "0.0",
    "4,370.60",
    "USD",
    "4,370.60"
  ),
];

export default function SupplierTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell align="left">Supplier Name</TableCell>
            <TableCell align="left">Goods</TableCell>
            <TableCell align="left">Freight</TableCell>
            <TableCell align="left">Total</TableCell>
            <TableCell align="left">Cur</TableCell>
            <TableCell align="left">Base (USD)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Avatar
                  sx={{
                    bgcolor: "green",
                    color: "white",
                    width: 30,
                    height: 30,
                    fontSize: ".8rem",
                  }}>
                  TQ
                </Avatar>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.goods}</TableCell>
              <TableCell align="center">{row.freight}</TableCell>
              <TableCell align="center">{row.total}</TableCell>
              <TableCell align="center">{row.cur}</TableCell>
              <TableCell align="center">{row.base}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
