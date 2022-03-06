import React, { useEffect, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//Components
import StudentDetails from "./components/StudentDetails";
import StudentEdit from "./components/StudentDetails/StudentEdit";
import StudentSummary from "./components/StudentDetails/StudentSummary";
import ListingPage from "./components/StudentListing/ListingPage";

//Students Data
import StudentsData from "./JSON/StudentsData.json";

//Context
export const DataContext = React.createContext();

const initialState = {
  data: [],
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "DataAvailable":
      return {
        data: action.payload,
        error: "",
      };
    case "DataNull":
      return {
        data: [],
        error: "Student data not available",
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    StudentsData
      ? dispatch({ type: "DataAvailable", payload: StudentsData })
      : dispatch({ type: "DataNull" });
  }, []);

  return (
    <div className="App">
      {state.data ? (
        <DataContext.Provider value={state.data}>
          <Routes>
            <Route path="/" element={<ListingPage />} />
            <Route path="studentDetails" element={<StudentDetails />}>
              <Route path="studentSummary" element={<StudentSummary />} />
              <Route path="studentEdit" element={<StudentEdit />} />
            </Route>
          </Routes>
        </DataContext.Provider>
      ) : (
        state.error
      )}
    </div>
  );
}

export default App;
