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
import { useState } from "react";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#525252",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Register() {
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
          <Grid container spacing={1} justifyContent="center" sx={{ mt: 8, mb: 12 }}>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h3" sx={{ color: theme.palette.primary.main }}>
                Welcome
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
              <Typography variant="subtitle1" sx={{ color: theme.palette.primary.main }}>
                Create an account
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
              <CustomInputField sx={{ px: 2 }} placeholder="Name"></CustomInputField>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
              <CustomInputField
                sx={{ px: 2 }}
                placeholder="Email Address"
              ></CustomInputField>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
              <CustomInputField sx={{ px: 2 }} placeholder="Password"></CustomInputField>
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
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", m: 1 }}>
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
                    <input type="file" hidden />
                  </Button>
                </Item>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                size="large"
                sx={{ borderRadius: "100px", px: 7, py: 2 }}
              >
                Register
              </Button>
            </Grid>
          </Grid>
          <WavyFooter />
        </DialogContent>
      </Dialog>
    </div>
  );
}
