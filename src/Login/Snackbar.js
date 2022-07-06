import React from "react";
import Snackbar from "@mui/material/Snackbar";

const PositionedSnackbar = ({ msg }) => {
  const [state, setState] = React.useState({
    open: true,
    vertical: "top",
    horizontal: "right",
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={<span className="text-red">{msg}</span>}
        key={vertical + horizontal}
      />
    </>
  );
};

export default PositionedSnackbar;
