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
import useAuth from "../Hook/useAtuh";
import { axiosSecure } from "../Hook/useAxiosSecure";
import Swal from "sweetalert2";
  const AddEmployeeTable = ({AddEmployee, reset, refetch}) => {
    const {user} = useAuth()
    const handleAddTeam = async(email)=>{
      const updateUser = {
        hr_email: user?.email,
        role: "Employee"
      }
      const {data} = await axiosSecure.patch(`/user/${email}`,updateUser)
      Swal.fire({
        title: "Drag me!",
        icon: "success",
        draggable: true
      });
      refetch()
      reset()
    }  
    
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
                  <TableCell sx={{ width: "50px",paddingLeft: "50px"}} className="text-center"></TableCell>
                  <TableCell sx={{ width: "100px", paddingLeft: "20px"}} className="text-center">
                    Photo
                  </TableCell>
                  <TableCell sx={{paddingLeft: "50px"}} className="">
                    Name
                  </TableCell>
                  <TableCell sx={{ width: "200px", paddingRight: "10px"}} className="text-right">
                    Add
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {AddEmployee?.length > 0 ? (
                  (AddEmployee || [])
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
                        <input type="checkbox" className="mr-4 checkbox w-4 h-4  rounded-sm checkbox-primary" />
                        </TableCell>
                        <TableCell sx={{paddingLeft: "20px"}} className="text-center">
                          <img className="w-10 h-10 rounded-full" src={row?.user_photo} alt="" />
                        </TableCell>
                        <TableCell sx={{paddingLeft: "50px"}} className="text-center">
                          {row.name}
                        </TableCell>
                        <TableCell sx={{paddingRight: "50px"}} className="text-center">
                        <button onClick={()=>handleAddTeam(row?.email)}
                            className="px-3 disabled:bg-slate-500 hover:shadow-md hover:shadow-purple-300 py-1 font-semibold rounded-md bg-violet-600 text-gray-50"
                          >
                            Add Employee
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
          {AddEmployee?.length > 0 && (
            <TablePagination
              component="div"
              count={AddEmployee.length}
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
  
  export default AddEmployeeTable;
  