import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  CardHeader,
  Box,
} from "@material-ui/core";
import { useStyles } from "../../styles/Styles";
import StudentEdit from "./StudentEdit";
import StudentSummary from "./StudentSummary";
import { DataContext } from "../../App";

export const DetailContext = React.createContext();

const StudentDetails = () => {
  const [showSummary, setShowSummary] = useState(true);
  const studentData = useContext(DataContext);
  const location = useLocation();
  const [summaryValue, setSummaryValue] = useState(location.state);
  const navigate = useNavigate();
  const classes = useStyles();
  const toggle = (buttonType, editedValue) => {
    setShowSummary(!showSummary);
    console.log(buttonType);
    if (buttonType == "Save") {
      editedValue &&
        studentData.map((student) =>
          student.RollNumber === editedValue.RollNumber
            ? Object.assign(student, editedValue)
            : student
        );
      setSummaryValue(editedValue);
    }
  };

  return (
    <Box className={classes.boxRoot}>
      <Card variant="outlined">
        <CardHeader title="Student Detail" />
        <DetailContext.Provider value={summaryValue}>
          <CardContent>
            {showSummary && <StudentSummary buttonHandler={toggle} />}
            {!showSummary && <StudentEdit buttonHandler={toggle} />}
          </CardContent>
        </DetailContext.Provider>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/")}
          >
            Back
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default StudentDetails;
