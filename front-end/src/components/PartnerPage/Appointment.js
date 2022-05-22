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
          <Typography variant="h5" fontWeight={350}>
            You have an appointment with
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            {name}
          </Typography>
          <Typography variant="h6" fontWeight={400}>
            Friday 27 November at 10:15
          </Typography>
          <Button variant="contained" size="large" sx={{ borderRadius: "0px" }}>
            CONFIRM
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Appointment;
