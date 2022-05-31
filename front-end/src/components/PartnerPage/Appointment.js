import { useState } from "react";
import * as React from "react";
import isWeekend from "date-fns/isWeekend";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const minDate = new Date("2022-01-01T00:00:00.000");

const maxDate = new Date("2024-01-01T00:00:00.000");

const Appointment = ({ name, prices }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const [dateValue, setDateValue] = useState(new Date());

  const [appointmentType, setAppointmentType] = useState("");

  const handleChange = (event) => {
    setAppointmentType(event.target.value);
  };

  const hours = [
    { name: "09:00 AM", value: 9 },
    { name: "10:00 AM", value: 10 },
    { name: "11:00 AM", value: 11 },
    { name: "12:00 AM", value: 12 },
    { name: "13:00 AM", value: 13 },
    { name: "14:00 AM", value: 14 },
    { name: "15:00 AM", value: 15 },
  ];

  const [appointmentSlots, setAppointmentSlots] = useState([]);
  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setAppointmentSlots(value);
    dateValue.setHours(value[0], 0);
    setDateValue(dateValue);
  };

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
              value={dateValue}
              shouldDisableDate={isWeekend}
              onChange={(newValue) => {
                setDateValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
      </Grid>
      <Grid item md={4}>
        <Box
          border={1}
          borderRadius={5}
          padding={1}
          width="320px"
          height="482px"
          display="flex"
          flexDirection="column"
          // justifyContent="center"
          alignContent="space-around"
        >
          <FormControl fullWidth>
            <InputLabel
              id="appointment-type-label"
              sx={{ color: "#b92a32", fontWeight: "500" }}
            >
              Appointment Type
            </InputLabel>
            <Select
              labelId="appointment-type-select-label"
              id="appointment-type-select"
              value={appointmentType}
              label="Appointment Type"
              inputProps={{ sx: { color: "#b92a32", fontWeight: "500" } }}
              onChange={handleChange}
            >
              {prices.map((price, index) => (
                <MenuItem value={price.name} key={index}>
                  {`${price.name} (${price.price} RON) `}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, textAlignLast: "center" }}>
            <InputLabel shrink htmlFor="select-appointment-slots">
              Appointment Slots
            </InputLabel>
            <Select
              multiple
              native
              value={appointmentSlots}
              onChange={handleChangeMultiple}
              label="Appointment Slots"
              inputProps={{
                id: "select-appointment-slots",
                sx: { height: "400px" },
              }}
            >
              {hours.map((hour, index) => (
                <option key={index} value={hour.value}>
                  {hour.name}
                </option>
              ))}
            </Select>
          </FormControl>
        </Box>
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
                {dateValue.toLocaleDateString("en-US", options)}
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
