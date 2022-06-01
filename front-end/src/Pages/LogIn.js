import * as React from "react";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { StyledButton, theme } from "../styles/Styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Link from "@mui/material/Link";
import { Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { WavyHeader } from "../components/LogIn/wavyStyles/WavyHeader";
import { WavyFooter } from "../components/LogIn/wavyStyles/WavyFooter";
import { useState, useRef, useContext } from "react";
import AuthContext from "./../store/auth-context";

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
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [role, setRole] = useState("CLIENT");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;
    if (role === "CLIENT") {
      url = "http://127.0.0.1:4000/clients/login";
    } else {
      url = "http://127.0.0.1:4000/partners/login";
    }

    fetch(url, {
      method: "PATCH",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Login failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        if (role === "CLIENT") {
          authCtx.login(data.token, role, data.client.name);
        } else {
          authCtx.login(data.token, role, data.partner.name);
        }
        handleClose();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <StyledButton onClick={handleClickOpen}>Log In</StyledButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <WavyHeader />
          <form onSubmit={submitHandler}>
            <Grid container sx={{ mt: 15, mb: 12 }}>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h3" sx={{ color: theme.palette.primary.main }}>
                  Welcome Back
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ color: theme.palette.primary.main }}
                >
                  Log in to your account
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
                <CustomInputField
                  sx={{ px: 2 }}
                  placeholder="Email Address"
                  inputRef={emailInputRef}
                ></CustomInputField>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
                <CustomInputField
                  sx={{ px: 2 }}
                  placeholder="Password"
                  inputRef={passwordInputRef}
                ></CustomInputField>
              </Grid>
              <Grid container item spacing={2} marginTop={1} justifyContent="center">
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={role}
                  onChange={handleRoleChange}
                >
                  <FormControlLabel
                    value="CLIENT"
                    control={<Radio sx={{ color: "#b92a32" }} />}
                    label="Client"
                    sx={{
                      color: "#b92a32",
                      mx: 4,
                    }}
                  />
                  <FormControlLabel
                    value="PARTNER"
                    control={<Radio sx={{ color: "#b92a32" }} />}
                    label="Partner"
                    sx={{
                      color: "#b92a32",
                      mx: 4,
                    }}
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                <Link xs={6} underline="hover" component="button" variant="subtitle2">
                  Forgot Password
                </Link>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ borderRadius: "100px", px: 7, py: 2 }}
                  type="submit"
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
              <Grid
                container
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Typography
                  variant="body2"
                  xs={6}
                  sx={{
                    color: theme.palette.primary.main,
                    display: "flex",
                    justifyContent: "center",
                    mr: 1,
                  }}
                >
                  Don't have an account?
                </Typography>
                <Link xs={6} underline="hover" component="button" variant="subtitle2">
                  Sign up here
                </Link>
              </Grid>
            </Grid>
          </form>
          <WavyFooter />
        </DialogContent>
      </Dialog>
    </div>
  );
}
