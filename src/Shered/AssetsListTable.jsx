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
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { axiosSecure } from "../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import AssetEdit from "./AssetEdit";
const AssetsListTable = ({ allAssets, reload }) => {
  const [openModal, setOpenModal] = useState(false);
  const [asset, setAsset] = useState("");
  // console.log(asset, "assets");

  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You remove this asset",
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
        await axiosSecure.delete(`/allassets/${_id}`);
        reload();
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
            <AssetEdit
              reload={reload}
              asset={asset}
              setOpenModal={setOpenModal}
              openModal={openModal}
            ></AssetEdit>
            <TableHead>
              <TableRow className="">
                <TableCell
                  sx={{ width: "150px", paddingLeft: "50px" }}
                  className="text-center"
                >
                  Product Name
                </TableCell>
                <TableCell className="text-center">Product Type</TableCell>
                <TableCell className="text-center">Product Quantity</TableCell>
                <TableCell className="text-center">Date Added</TableCell>
                <TableCell
                  sx={{ width: "100px", paddingRight: "50px" }}
                  className=""
                >
                  Update
                </TableCell>
                <TableCell
                  sx={{ width: "100px", paddingRight: "50px" }}
                  className=""
                >
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allAssets?.length > 0 ? (
                (allAssets || [])
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
                        {row?.product_quantity}
                      </TableCell>
                      <TableCell className="text-center">
                        {row?.added_date}
                      </TableCell>
                      <TableCell className="text-center">
                        <div>
                          {" "}
                          <FiEdit
                            onClick={() => {
                              setOpenModal(true);
                              setAsset(row);
                            }}
                            className="text-blue-400 cursor-pointer text-xl "
                          />
                        </div>
                      </TableCell>
                      <TableCell
                        sx={{ paddingRight: "50px" }}
                        className="text-center"
                      >
                        <RiDeleteBin6Line
                          onClick={() => handleDelete(row?._id)}
                          className="cursor-pointer text-red-400 text-xl "
                        />
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
        {allAssets?.length > 0 && (
          <TablePagination
            component="div"
            count={allAssets.length}
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

export default AssetsListTable;
