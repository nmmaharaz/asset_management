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
import { axiosSecure } from "../Hook/useAxiosSecure";
import Swal from "sweetalert2";
  const MyEmployeeTable = ({Employee, refetch, reset}) => {
  
    const handleRemove = async (email) => {
      const updateUser = {
        hr_email: "",
        role: "User",
      };
      Swal.fire({
        title: "Are you sure?",
        text: "You remove employee",
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
           await axiosSecure.patch(
            `/removeteam/${email}`,
            updateUser
          );
          reset();
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
                <TableRow className="">
                  <TableCell sx={{ width: "150px",paddingLeft: "50px"}} className="text-center">User Photo</TableCell>
                  <TableCell className="text-center">
                    Name
                  </TableCell>
                  <TableCell sx={{ width: "200px", paddingRight: "50px"}} className="text-center">
                  Member Type
                  </TableCell>
                  <TableCell sx={{ width: "100px", paddingRight: "50px"}} className="">
                    Remove Team
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Employee?.length > 0 ? (
                  (Employee || [])
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
                        <TableCell sx={{paddingLeft: "50px"}} className="text-center">
                          <img className="w-10 h-10 rounded-full" src={row?.user_photo} alt="" />
                        </TableCell>
                        <TableCell className="text-center">
                          {row.name}
                        </TableCell>
                        <TableCell className="text-center">
                          {row.role}
                        </TableCell>
                        <TableCell sx={{paddingRight: "50px"}} className="text-center">
                        <button onClick={()=>handleRemove(row?.email)}
                            className="px-3 disabled:bg-slate-500 hover:shadow-md hover:shadow-purple-300 py-1 font-semibold rounded-md bg-red-600 text-gray-50"
                          >
                            Remove
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
          {Employee?.length > 0 && (
            <TablePagination
              component="div"
              count={Employee.length}
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
  
  export default MyEmployeeTable;
  