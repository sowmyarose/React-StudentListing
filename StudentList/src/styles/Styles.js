import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "20px 20px",
    maxWidth: "95%",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  clickableIcon: {
    "&:hover": {
      color: "blue",
    },
  },
  boxRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "20px 20px",
  },
  formStyle: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  },
  summaryStyle: {
    textAlign: "left",
  },
}));
