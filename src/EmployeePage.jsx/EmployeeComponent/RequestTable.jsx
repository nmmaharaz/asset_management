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
import Swal from "sweetalert2";
import { axiosSecure } from "../../Hook/useAxiosSecure";
import { toast } from "react-toastify";

const RequestTable = ({ requestData, refetch }) => {
  const handleReturn = async (_id, asset_id) => {
    const updateData = {
      asset_id,
      request_status: "Returned",
    };
    try {
      const { data } = await axiosSecure.patch(`/request/${_id}`, updateData);
      console.log(data, "o data");
      toast.success("Employee account signup successfully");
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You cencel this asset",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Successfully!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        await axiosSecure.delete(`/request/${_id}`);
        refetch();
      }
    });
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
              <TableRow>
                <TableCell>Asset Name</TableCell>
                <TableCell className="text-center lg:w-64">
                  Asset Type
                </TableCell>
                <TableCell className="lg:w-40 text-center">
                  Request Date
                </TableCell>
                <TableCell className="lg:w-32 text-right">
                  Approval Date
                </TableCell>
                <TableCell className="lg:w-32 text-right">
                  Request Status
                </TableCell>
                <TableCell className="lg:w-32 text-right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {requestData?.length > 0 ? (
                (requestData || [])
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
                        {row?.product_name}
                      </TableCell>
                      <TableCell className="text-center">
                        {row?.product_type}
                      </TableCell>
                      <TableCell className="text-center">
                        {row?.request_date}
                      </TableCell>
                      <TableCell className="text-center">
                        {row?.approval_date}
                      </TableCell>
                      <TableCell
                        className={`text-center ${
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
                        }`}
                      >
                        {row?.request_status}
                      </TableCell>
                      <TableCell className="text-center">
                        {row?.request_status == "Pending" ? (
                          <button
                            onClick={() => handleDelete(row?._id)}
                            className="px-3 disabled:bg-slate-500 hover:shadow-md hover:shadow-purple-300 py-1 font-semibold rounded-md bg-red-400 text-gray-50"
                          >
                            Cencel
                          </button>
                        ) : (
                          <button className="px-3 disabled:bg-slate-500 hover:shadow-md hover:shadow-purple-300 py-1 font-semibold rounded-md bg-violet-600 text-gray-50">
                            Print
                          </button>
                        )}
                        {(row?.request_status == "Approved" ||
                          row?.request_status == "Returned") &
                        (row?.product_type == "Returnable") ? (
                          <button
                            onClick={() =>
                              handleReturn(row?._id, row?.asset_id)
                            }
                            disabled={row?.request_status == "Returned"}
                            className="px-3 disabled:bg-slate-500 hover:shadow-md hover:shadow-purple-300 py-1 font-semibold rounded-md bg-red-300 text-gray-50"
                          >
                            Return
                          </button>
                        ) : (
                          ""
                        )}
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
        {requestData?.length > 0 && (
          <TablePagination
            component="div"
            count={requestData.length}
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

export default RequestTable;
