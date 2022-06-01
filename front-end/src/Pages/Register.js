import * as React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { StyledButton, theme } from "../styles/Styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useState, useRef, useContext } from "react";
import { WavyHeader } from "../components/LogIn/wavyStyles/WavyHeader";
import { WavyFooter } from "../components/LogIn/wavyStyles/WavyFooter";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#525252",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Register() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const imageInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const jobTypes = ["HairStyling", "Massage Therapist"];

  const [open, setOpen] = useState(false);

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

  const [jobType, setJobType] = useState("");

  const handleChange = (event) => {
    setJobType(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const payload_data = {
      name: nameInputRef.current["value"],
      email: emailInputRef.current["value"],
      password: passwordInputRef.current["value"],
      role: role,
      job: jobType,
      image: imageInputRef.current.files[0],
    };

    let formData = new FormData();
    for (let key in payload_data) {
      if (payload_data[key]) {
        formData.append(key, payload_data[key]);
      }
    }

    let url;
    if (role === "CLIENT") {
      url = "http://127.0.0.1:4000/clients";
    } else {
      url = "http://127.0.0.1:4000/partners";
    }

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Register failed!";
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
      <StyledButton
        variant="contained"
        sx={{
          boxShadow: "25",
        }}
        onClick={handleClickOpen}
      >
        Register
      </StyledButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <WavyHeader />
          <form onSubmit={submitHandler}>
            <Grid container spacing={1} justifyContent="center" sx={{ mt: 8, mb: 12 }}>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h3" sx={{ color: theme.palette.primary.main }}>
                  Welcome
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ color: theme.palette.primary.main }}
                >
                  Create an account
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
                <CustomInputField
                  sx={{ px: 2 }}
                  placeholder="Name"
                  inputRef={nameInputRef}
                ></CustomInputField>
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
              {role === "PARTNER" && (
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center", m: 1 }}
                >
                  <FormControl sx={{ width: "270px" }}>
                    <InputLabel
                      id="job-type-label"
                      sx={{ color: "#b92a32", fontWeight: "500" }}
                    >
                      Job Type
                    </InputLabel>
                    <Select
                      labelId="job-type-select-label"
                      id="job-type-select"
                      value={jobType}
                      label="Job Type"
                      inputProps={{
                        sx: { color: "#b92a32", fontWeight: "500", textAlign: "center" },
                      }}
                      onChange={handleChange}
                    >
                      {jobTypes.map((job, index) => (
                        <MenuItem value={job} key={index}>
                          {job}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              )}
              <Grid container item spacing={2} marginBottom={1} justifyContent="center">
                <Grid item xs={3.5} height={1} minWidth={300} justifyContent="center">
                  <Item sx={{ backgroundColor: "#0000", boxShadow: "none" }}>
                    <Button variant="contained" component="label">
                      Upload Picture
                      <input type="file" hidden ref={imageInputRef} />
                    </Button>
                  </Item>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ borderRadius: "100px", px: 7, py: 2 }}
                  type="submit"
                >
                  Register
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
