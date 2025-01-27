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
import EmployeeRequest from "../../HomeComponent/EmployeeRequest";

const MyAssetsTable = ({ myAssistData, reset }) => {
  const [openModal, setOpenModal] = useState(false);
  const [asset, setAsset] = useState("");
  console.log(asset, "all assets")
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
            <EmployeeRequest
              reset={reset}
              asset={asset}
              setOpenModal={setOpenModal}
              openModal={openModal}
            ></EmployeeRequest>
            <TableHead>
              <TableRow>
                <TableCell>Asset Name</TableCell>
                <TableCell className="text-center lg:w-64">
                  Asset Type
                </TableCell>
                <TableCell className="lg:w-40 text-center">
                  Availability
                </TableCell>
                <TableCell className="lg:w-32 text-right">Request</TableCell>
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
                      key={row._id}
                    >
                      <TableCell className="text-center">
                        {row.product_name}
                      </TableCell>
                      <TableCell className="text-center">
                        {row.product_type}
                      </TableCell>
                      <TableCell className="text-center">
                        {" "}
                        {row?.product_quantity == 0 ? (
                          <button className="text-center">Out of Stock</button>
                        ) : (
                          <button>Available</button>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        <button
                          onClick={() => {
                            setOpenModal(true);
                            setAsset(row);
                          }}
                          disabled={row?.product_quantity == 0}
                          className="px-3 disabled:bg-slate-500 hover:shadow-md hover:shadow-purple-300 py-1 font-semibold rounded-md bg-violet-600 text-gray-50"
                        >
                          Request
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

export default MyAssetsTable;
