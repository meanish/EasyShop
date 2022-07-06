import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Formik } from "formik";
import Snackbar from "./Snackbar";
import userLoginSchema from "./Yupverify";
import Register from "./Register";
import Signin from "./Signin";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "white",
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const FormModel = (props) => {
  console.log(props);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    handleClickOpen();
  }, []);

  const [showsnacks, setShowsnacks] = useState(false);

  return (
    <div>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth="md"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          className="text-center relative text-white border-b-0 bg-blues"
          onClose={handleClose}
        >
          <p className="font-Right text-3xl capitalize">{props.name} Now</p>
        </BootstrapDialogTitle>
        <DialogContent style={{ height: "500px", padding: "0" }}>
          <div className=" w-full h-full p-4 text-blues font-Right border-8 border-blues items-center grid bg-pinki">
            <Formik
              initialValues={{
                fname: "",
                lname: "",
                address: "",
                phoneno: "",
                gender: "",
                email: "",
                password: "",
              }}
              
              onSubmit={(data) => {
                console.log(data);
                handleClose();
                console.log("form submitted");
                setShowsnacks(true);
              }}
              validationSchema={userLoginSchema}
            >
              {(formik) => {
                return props.name === "register" ? (
                  <Register formik={formik} />
                ) : (
                  <Signin formik={formik} />
                );
              }}
            </Formik>
          </div>
        </DialogContent>
      </BootstrapDialog>
      {showsnacks ? <Snackbar msg={props.msg} /> : null}
    </div>
  );
};

export default FormModel;
