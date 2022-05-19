import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { StyledButton, theme } from "../styles/Styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Link from "@mui/material/Link";
import { Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

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

export default function LogIn() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <StyledButton onClick={handleClickOpen}>Log In</StyledButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Grid container sx={{ mt: 15, mb: 12 }}>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography
                variant="h3"
                sx={{ color: theme.palette.primary.main }}
              >
                Welcome Back
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center", m: 1 }}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: theme.palette.primary.main }}
              >
                Log in to your account
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center", m: 1 }}
            >
              <CustomInputField sx={{ px: 2 }}></CustomInputField>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center", m: 1 }}
            >
              <CustomInputField sx={{ px: 2 }}></CustomInputField>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Link
                xs={6}
                underline="hover"
                component="button"
                variant="subtitle2"
              >
                Forgot Password
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{ borderRadius: "100px", px: 7, py: 2 }}
              >
                Sign In
              </Button>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 5,
                mb: 2,
                alignItems: "center",
              }}
            >
              <Grid item xs={3}>
                <Divider
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    display: "flex",
                    justifyContent: "flex-end",
                    mr: 2,
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: theme.palette.primary.main,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Or sign in with
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Divider
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    display: "flex",
                    justifyContent: "flex-end",
                    ml: 2,
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button color="primary">
                  <GoogleIcon fontSize="large" />
                </Button>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button color="facebook">
                  <FacebookIcon fontSize="large" />
                </Button>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Button color="secondary">
                  <AppleIcon fontSize="large" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
