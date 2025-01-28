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
import { format } from "date-fns";
import { useState } from "react";
import { axiosSecure } from "../Hook/useAxiosSecure";
const AllRequestTable = ({ allRequest, reset }) => {

    const handleApprove = async (_id) => {
        const date = new Date();
        const approval_date = format(date, "dd/MM/yyyy");
        const updateData = {
          approval_date,
          request_status: "Approved",
        };
        const { data } = await axiosSecure.patch(
          `${import.meta.env.VITE_API_URL}/requestInfo/${_id}`,
          updateData
        );
        reset();
      };
      const handleReject = async (id) => {
        const updateData = {
          request_status: "Rejected",
        };
        const { data } = await axiosSecure.patch(
          `${import.meta.env.VITE_API_URL}/requestRejectInfo/${id}`,
          updateData
        );
        reset();
      };


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
                <TableCell
                  sx={{ width: "150px", paddingLeft: "50px" }}
                  className="text-center"
                >
                  Asset Name
                </TableCell>
                <TableCell className="text-center">Asset Type</TableCell>
                <TableCell
                  sx={{ width: "100px", paddingRight: "50px" }}
                  className=""
                >
                  Email of requester
                </TableCell>
                <TableCell
                  sx={{ width: "100px", paddingRight: "50px" }}
                  className=""
                >
                  Name of Requester
                </TableCell>
                <TableCell
                  sx={{ width: "100px", paddingRight: "50px" }}
                  className=""
                >
                  Request Date
                </TableCell>
                <TableCell
                  sx={{ width: "100px", paddingRight: "50px" }}
                  className=""
                >
                  Additional Note
                </TableCell>
                <TableCell
                  sx={{ width: "100px", paddingRight: "50px" }}
                  className=""
                >
                  Status
                </TableCell>
                <TableCell
                  sx={{ width: "100px", paddingRight: "50px" }}
                  className=""
                >
                  Approve
                </TableCell>
                <TableCell
                  sx={{ width: "100px", paddingRight: "50px" }}
                  className=""
                >
                  Reject
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allRequest?.length > 0 ? (
                (allRequest || [])
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
                      <TableCell
                        sx={{ paddingLeft: "50px" }}
                        className="text-center"
                      >
                        {row?.product_name}
                      </TableCell>
                      <TableCell className="text-center">
                        {row?.product_type}
                      </TableCell>
                      <TableCell className="text-center">
                        {row?.email}
                      </TableCell>
                      <TableCell className="text-center">{row?.name}</TableCell>
                      <TableCell className="text-center">
                        {row?.request_date}
                      </TableCell>
                      <TableCell className="text-center">
                        {row?.additional_rule}
                      </TableCell>
                      <TableCell className="text-center">
                        <p className={`text-center ${
                          row.request_status == "Approved" &&
                          "text-green-500 font-semibold"
                        } ${
                          row.request_status == "Rejected" &&
                          "text-red-400 font-semibold"
                        } ${
                          row.request_status == "Pending" &&
                          "text-blue-600 font-semibold"
                        } ${
                          row.request_status == "Returned" &&
                          "text-orange-400 font-semibold"
                        }`}>{row?.request_status}</p>
                      </TableCell>
                      <TableCell
                        sx={{ paddingRight: "20px" }}
                        className="text-center"
                      >
                        <button
                          disabled={row?.request_status !== "Pending"}
                          onClick={()=>handleApprove(row?._id)}
                          className="px-3 disabled:bg-slate-500 hover:shadow-md hover:shadow-purple-300 py-1 font-semibold rounded-md bg-green-600 text-gray-50"
                        >
                          Approve
                        </button>
                      </TableCell>
                      <TableCell
                        sx={{ paddingRight: "50px" }}
                        className="text-center"
                      >
                        <button disabled={row?.request_status !=="Pending"} onClick={()=>handleReject(row?._id)} className="px-3 disabled:bg-slate-500 hover:shadow-md hover:shadow-purple-300 py-1 font-semibold rounded-md bg-red-600 text-gray-50">
                          Reject
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
        {allRequest?.length > 0 && (
          <TablePagination
            component="div"
            count={allRequest.length}
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

export default AllRequestTable;
