import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { StyledButton, theme } from "../styles/Styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { WavyHeader } from "../components/LogIn/wavyStyles/WavyHeader";
import { WavyFooter } from "../components/LogIn/wavyStyles/WavyFooter";
import { useRef, useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../store/auth-context";

const CustomInputField = styled(TextField)({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "100px",
  "& input": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
});

export default function AddService() {
  const navigate = useNavigate();

  const serviceNameInputRef = useRef();
  const servicePriceInputRef = useRef();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredServiceName = serviceNameInputRef.current.value;
    const enteredServicePrice = servicePriceInputRef.current.value;

    fetch("http://127.0.0.1:4000/partners/services", {
      method: "POST",
      body: JSON.stringify({
        name: enteredServiceName,
        price: enteredServicePrice,
      }),

      headers: { Authorization: authCtx.token, "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then(() => {
            let errorMessage = "Adding a service failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then(() => {
        handleClose();
        navigate("/profile", { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <StyledButton variant="contained" onClick={handleClickOpen}>
        Add a service
      </StyledButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <WavyHeader />
          <form onSubmit={submitHandler}>
            <Grid container spacing={1} sx={{ mt: 15, mb: 12 }}>
              <Grid
                item
                xs={12}
                marginBottom={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Typography variant="h3" sx={{ color: theme.palette.primary.main }}>
                  Add a new Service
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
                <CustomInputField
                  sx={{ px: 2 }}
                  placeholder="Name of the service"
                  inputRef={serviceNameInputRef}
                ></CustomInputField>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
                <CustomInputField
                  sx={{ px: 2 }}
                  placeholder="Price"
                  inputRef={servicePriceInputRef}
                ></CustomInputField>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ borderRadius: "100px", px: 7, py: 2 }}
                  type="submit"
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </form>
          <WavyFooter />
        </DialogContent>
      </Dialog>
    </div>
  );
}
