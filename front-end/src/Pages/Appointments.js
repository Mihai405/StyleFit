import { Grid, Container } from "@mui/material";
import AppointmentCard from "../components/Appointments/AppointmentCard";

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
  {
    id: 1,
    name: "Emma Watson",
    job: "HairStylist",
    rating: 5.0,
    reviews: 1200,
    service: {
      name: "Haircut",
      price: 100,
    },
    date: new Date(),
  },
  {
    id: 1,
    name: "Emma Stone",
    job: "HairStylist",
    rating: 4.9,
    reviews: 500,
    service: {
      name: "Haircut",
      price: 100,
    },
    date: new Date(),
  },
  {
    id: 1,
    name: "Robbie Margot",
    job: "HairStylist",
    rating: 5.0,
    reviews: 900,
    service: {
      name: "Haircut",
      price: 100,
    },
    date: new Date(),
  },
];

const Appointments = () => {
  const role = "CLIENT";

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
          {dummy_data_partner.map((appointment, index) => (
            <Grid item key={index} md={4}>
              <AppointmentCard {...appointment} currentUser={role} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Appointments;
