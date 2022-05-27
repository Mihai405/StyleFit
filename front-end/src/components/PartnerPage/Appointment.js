import { useState } from "react";
import * as React from "react";
import isWeekend from "date-fns/isWeekend";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Grid, Box, Typography, Button } from "@mui/material";

const minDate = new Date("2022-01-01T00:00:00.000");

const maxDate = new Date("2024-01-01T00:00:00.000");

const Appointment = ({ name }) => {
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

  const [value, setValue] = useState(new Date());

  return (
    <Grid container item justifyContent="space-between">
      <Grid item md={4}>
        <Box border={1} borderRadius={5} padding={1} width="320px" height="482px">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              orientation="portrait"
              minDate={minDate}
              maxDate={maxDate}
              openTo="day"
              value={value}
              shouldDisableDate={isWeekend}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
      </Grid>
      <Grid item md={4}>
        <Box border={1} borderRadius={5} padding={1} width="320px" height="482px"></Box>
      </Grid>
      <Grid item md={4}>
        <Box
          width="320px"
          height="482px"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignContent="center"
        >
          <Grid container item justifyContent="center" spacing={1}>
            <Grid item>
              <Typography variant="h5" fontWeight={350}>
                You have an appointment with
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" fontWeight={700}>
                {name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" fontWeight={400}>
                {value.toLocaleDateString("en-US", options)}
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" size="large" sx={{ borderRadius: "0px" }}>
                CONFIRM
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Appointment;
