import React, { useContext } from "react";
import { DetailContext } from ".";
import Button from '@material-ui/core/Button'
import { useStyles } from "../../styles/Styles";

const StudentSummary = ({ buttonHandler }) => {
  const studentDetail = useContext(DetailContext);
  const classes = useStyles();
  return (
    <div>
      {studentDetail &&
        Object.keys(studentDetail).map((key) => (
          <h5 className={classes.summaryStyle}>
            {key} - {studentDetail[key]}
          </h5>
        ))}
      <Button variant="contained" color="primary" onClick={()=>buttonHandler("Edit")}>
        Edit
      </Button>
    </div>
  );
};

export default StudentSummary;
