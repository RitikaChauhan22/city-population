import "./Home.css";

//import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
//import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useContext } from "react";
import axios from "axios";
//import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { PageContext } from "../contextApi/PageContext";
import { useDispatch, useSelector } from "react-redux";
import { deleteCity, modalData, sortCity } from "../Redux/action";

//import { BsFillHandIndexFill } from "react-icons/bs";

export const Home = () => 
{
  const dispatch = new useDispatch();
  const { setShowModal } = useContext(PageContext);
  const city = useSelector((store) => store.filteredCity);
  // console.log(city, "city");

  const sortHandler = (val) =>
  {
    dispatch(sortCity(val));
  };

  const EditHanndler = (val) => 
  {
    dispatch(modalData(val));
    setShowModal(true);
  };

  const deleteHandle = (id) => {
    axios
      .delete(`http://localhost:3001/city-list/${id}`)
      .then(alert("Data will be removed from the database."));

    dispatch(deleteCity(id));
  };

  return (
    <div>
      <Table aria-label="simple table" className="table">
        <TableHead>
          <TableRow>
            <TableCell className="flex">City name</TableCell>
            <TableCell align="right">Country Name</TableCell>
            <TableCell align="right">Population</TableCell>
            <TableCell align="center">Edit||Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {city.map((a) => (
            <TableRow key={a.id}>
              <TableCell component="th" scope="row">
                {a.name}
              </TableCell>
              <TableCell align="right">
                {a.country}
              </TableCell>
              <TableCell align="right">
                {a.population}
              </TableCell>

              <TableCell align="right">
                <EditIcon
                  color="primary"
                  className="icons"
                  onClick={() => {
                    EditHanndler(a);
                  }}
                />

                <DeleteIcon
                  className="icons"
                  color="secondary"
                  onClick={() => {
                    deleteHandle(a.id);
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
