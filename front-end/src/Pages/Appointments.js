import { Grid, Container, Stack, CircularProgress } from "@mui/material";
import AppointmentCard from "../components/Appointments/AppointmentCard";
import { useState, useCallback, useEffect, useContext } from "react";
import AuthContext from "../store/auth-context";

const dummy_data_partner = [
  {
    id: 1,
    name: "Emma Irving",
    job: "HairStylist",
    rating: 4.7,
    reviews: 124,
    service: {
      name: "Haircut",
      price: 100,
    },
    date: new Date(),
  },
];

const Appointments = () => {
  const authCtx = useContext(AuthContext);

  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAppointmentsHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      let url;
      if (authCtx.role === "PARTNER") {
        url = "http://127.0.0.1:4000/partners/appointments";
      } else {
        url = "http://127.0.0.1:4000/clients/appointments";
      }
      const response = await fetch(url, {
        headers: {
          Authorization: authCtx.token,
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedAppointments = [];

      for (const key in data) {
        loadedAppointments.push({
          _id: data[key]._id,
          client: data[key].client,
          partner: data[key].partner,
          services: data[key].service,
          date: data[key].date,
        });
      }

      setAppointments(loadedAppointments);
    } catch (error) {
      throw new Error(error.message);
    }
    setIsLoading(false);
  }, [authCtx.role, authCtx.token]);

  useEffect(() => {
    fetchAppointmentsHandler();
  }, [fetchAppointmentsHandler]);

  console.log(appointments);

  if (isLoading) {
    return (
      <Stack alignItems="center">
        <CircularProgress />
      </Stack>
    );
  }

  return (
    <Container>
      {dummy_data_partner.length > 0 && (
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
          rowSpacing={5}
        >
          {appointments.map((appointment, index) => (
            <Grid item key={index} md={4}>
              <AppointmentCard {...appointment} currentUser={authCtx.role} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Appointments;
