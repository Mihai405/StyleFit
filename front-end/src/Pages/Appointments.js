import { Grid, Container } from "@mui/material";
import ClientAppointmentCard from "../components/Appointments/ClientAppointmentCard";

const dummy_data = [
  {
    id: 1,
    name: "Emma Irving",
    job: "HairStylist",
    rating: "4.7",
    reviews: "124",
  },
  {
    id: 1,
    name: "Emma Watson",
    job: "HairStylist",
    rating: "5.0",
    reviews: "1200",
  },
  {
    id: 1,
    name: "Emma Stone",
    job: "HairStylist",
    rating: "4.9",
    reviews: "500",
  },
  {
    id: 1,
    name: "Robbie Margot",
    job: "HairStylist",
    rating: "5.0",
    reviews: "900",
  },
];

const Appointments = () => {
  return (
    <Container>
      {dummy_data.length > 0 && (
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
          rowSpacing={5}
        >
          {dummy_data.map((appointment, index) => (
            <Grid item key={index} md={4}>
              <ClientAppointmentCard {...appointment} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Appointments;
