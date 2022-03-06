import React, { useContext, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { DataContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../../styles/Styles";

const ListingPage = () => {
  const studentData = useContext(DataContext);
  const classes = useStyles();
  const navigate = useNavigate();

  const handleRowClick = (rowData) => {
    navigate("studentDetails", { state: rowData });
  };
  return (
    <div>
      <h1>Student List</h1>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>
                RollNumber
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>Name</TableCell>
              <TableCell className={classes.tableHeaderCell}>Class</TableCell>
              <TableCell className={classes.tableHeaderCell}>Age</TableCell>
              <TableCell className={classes.tableHeaderCell}>Address</TableCell>
              <TableCell className={classes.tableHeaderCell}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentData &&
              studentData.map((student) => (
                <TableRow key={student.RollNumber}>
                  <TableCell>{student.RollNumber}</TableCell>
                  <TableCell>{student.Name}</TableCell>
                  <TableCell>{student.Class}</TableCell>
                  <TableCell>{student.Age}</TableCell>
                  <TableCell>{student.Address}</TableCell>
                  <TableCell>
                    <ArrowForwardIosIcon
                      onClick={() => handleRowClick(student)}
                      className={classes.clickableIcon}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListingPage;
