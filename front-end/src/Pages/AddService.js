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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <StyledButton variant="contained" onClick={handleClickOpen}>
        Add a service
      </StyledButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <WavyHeader />
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
              ></CustomInputField>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
              <CustomInputField sx={{ px: 2 }} placeholder="Price"></CustomInputField>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                size="large"
                sx={{ borderRadius: "100px", px: 7, py: 2 }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
          <WavyFooter />
        </DialogContent>
      </Dialog>
    </div>
  );
}
