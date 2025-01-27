import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
const TeamTable = ({myAssistData}) => {
  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow className="">
                <TableCell sx={{ width: "150px",paddingLeft: "50px"}} className="text-center">Photo</TableCell>
                <TableCell className="text-center">
                  Name
                </TableCell>
                <TableCell sx={{ width: "100px", paddingRight: "50px"}} className="">
                  Type
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myAssistData?.length > 0 ? (
                (myAssistData || [])
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow
                      className={`${
                        index % 2 === 0
                          ? "bg-[#f1f5f9] hover:bg-pink-50"
                          : "bg-[#FEF3EE] hover:bg-purple-100"
                      }`}
                      key={row?._id}
                    >
                      <TableCell sx={{paddingLeft: "50px"}} className="text-center">
                        <img className="w-10 h-10 rounded-full" src={row?.user_photo} alt="" />
                      </TableCell>
                      <TableCell className="text-center">
                        {row?.name}
                      </TableCell>
                      <TableCell sx={{paddingRight: "50px"}} className="text-center">
                      <button
                          className="px-3 disabled:bg-slate-500 hover:shadow-md hover:shadow-purple-300 py-1 font-semibold rounded-md bg-violet-600 text-gray-50"
                        >
                          {row?.role}
                        </button>
                      </TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    <Typography variant="body1">No data available</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {myAssistData?.length > 0 && (
          <TablePagination
            component="div"
            count={myAssistData.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 20]}
            labelRowsPerPage="Rows per page"
            labelDisplayedRows={({ from, to, count }) =>
              `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`
            }
          />
        )}
      </Paper>
    </div>
  );
};

export default TeamTable;
