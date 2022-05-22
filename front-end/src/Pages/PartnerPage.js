import { Grid } from "@mui/material";

import PriceCard from "../components/PartnerPage/PriceCard";

const dummy_data = [
  { id: 1, price: 100, name: "Therapeutic Massage" },
  { id: 2, price: 100, name: "Therapeutic Massage1" },
  { id: 3, price: 100, name: "Therapeutic Massage2" },
  { id: 4, price: 100, name: "Therapeutic Massage3" },
  { id: 5, price: 100, name: "Therapeutic Massage4" },
  { id: 6, price: 100, name: "Therapeutic Massage5" },
];

const PartnerPage = () => {
  return (
    <Grid container>
      <Grid item md={4}></Grid>
      <Grid container item md={8} spacing={3}>
        {dummy_data.map((element, index) => (
          <Grid item md={4} key={index}>
            <PriceCard {...element} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default PartnerPage;
