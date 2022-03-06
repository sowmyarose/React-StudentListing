import React, { useContext, useReducer, useState } from "react";
import Button from "@material-ui/core/Button";
import { DetailContext } from ".";
import { useStyles } from "../../styles/Styles";
import { TextField } from "@material-ui/core";

const StudentEdit = ({ buttonHandler }) => {
  const studentDetail = useContext(DetailContext);
  const initialState = studentDetail;
  const detailEditReducer = (state, action) => {
    switch (action.type) {
      case "handleInput":
        return { ...state, [action.field]: action.inputValue };
      default:
        return state;
    }
  };
  const classes = useStyles();
  const [state, dispatch] = useReducer(detailEditReducer, initialState);

  const handleInputChange = (e) => {
    dispatch({
      type: "handleInput",
      field: e.target.name,
      inputValue: e.target.value,
    });
  };
  return (
    <form className={classes.formStyle}>
      <TextField
        label="RollNumber"
        variant="outlined"
        size="small"
        type="text"
        name="RollNumber"
        value={state.RollNumber}
        disabled
      />
      <TextField
        label="Name"
        variant="outlined"
        size="small"
        type="text"
        name="Name"
        value={state.Name}
        onChange={(e) => handleInputChange(e)}
      />
      <TextField
        label="Class"
        variant="outlined"
        size="small"
        type="text"
        name="Class"
        value={state.Class}
        onChange={(e) => handleInputChange(e)}
      />
      <TextField
        label="Age"
        variant="outlined"
        size="small"
        type="text"
        name="Age"
        value={state.Age}
        onChange={(e) => handleInputChange(e)}
      />
      <TextField
        label="Address"
        variant="outlined"
        size="small"
        type="text"
        name="Address"
        value={state.Address}
        onChange={(e) => handleInputChange(e)}
      />
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => buttonHandler("Save", state)}
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default StudentEdit;
