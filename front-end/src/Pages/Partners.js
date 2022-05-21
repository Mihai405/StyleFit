import { Grid, Container } from "@mui/material";

import PartnerCard from "../components/Partners/PartnerCard";

let dummy_data = [
  { id: 1, name: "Emma Irving", job: "HairStylist", rating: "4.7", reviews: "124" },
  { id: 2, name: "Emma Irving2", job: "HairStylist", rating: "4.7", reviews: "124" },
  { id: 3, name: "Emma Irving3", job: "HairStylist", rating: "4.7", reviews: "124" },
  { id: 4, name: "Emma Irving4", job: "HairStylist", rating: "4.7", reviews: "124" },
  { id: 5, name: "Emma Irving5", job: "HairStylist", rating: "4.7", reviews: "124" },
  { id: 6, name: "Emma Irving6", job: "HairStylist", rating: "4.7", reviews: "124" },
  { id: 7, name: "Emma Irving7", job: "HairStylist", rating: "4.7", reviews: "124" },
];

const Partners = () => {
  return (
    <Container>
      <Grid container item xs={12} spacing={3} paddingY={3} justifyContent="center">
        {dummy_data.map((element, index) => (
          <Grid item key={index}>
            <PartnerCard {...element} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Partners;
