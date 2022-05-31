import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Container,
} from "@mui/material";
import PartnerPageWallpaper from "./../assets/PartnerPage/PartnerPageWallpaper.jpg";
import StarIcon from "@mui/icons-material/Star";

import PriceCard from "../components/PartnerPage/PriceCard";
import Appointment from "../components/PartnerPage/Appointment";

const dummy_data = {
  id: 1,
  name: "Emma Irving",
  job: "HairStylist",
  rating: "4.7",
  reviews: "124",
  prices: [
    { id: 1, price: 100, name: "Therapeutic Massage" },
    { id: 2, price: 100, name: "Therapeutic Massage1" },
    { id: 3, price: 100, name: "Therapeutic Massage2" },
    { id: 4, price: 100, name: "Therapeutic Massage3" },
    { id: 5, price: 100, name: "Therapeutic Massage4" },
    { id: 6, price: 100, name: "Therapeutic Massage5" },
  ],
};

const PartnerPage = () => {
  return (
    <Container>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        rowSpacing={5}
      >
        <Grid item md={4}>
          <Card sx={{ maxWidth: 200, padding: 2, margin: "auto", boxShadow: "0" }}>
            <CardMedia
              component="img"
              image={PartnerPageWallpaper}
              alt="green iguana"
              sx={{
                border: "1px solid black",
                borderRadius: "100px",
                backgroundSize: "cover",
              }}
            />
            <CardContent
              sx={{
                padding: "10px",
                "&:last-child": {
                  padding: "10px",
                },
              }}
            >
              <Typography
                variant="h5"
                component="div"
                textAlign="center"
                fontWeight={500}
              >
                {dummy_data.name}
              </Typography>
              <Typography
                variant="h6"
                component="div"
                textAlign="center"
                fontWeight={400}
              >
                {dummy_data.job}
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginTop={1}
              >
                <StarIcon sx={{ fill: "#ffe234" }} />
                <Typography
                  variant="body1"
                  component="span"
                  marginRight={1}
                  fontWeight={450}
                >
                  {dummy_data.rating}
                </Typography>
                <Typography variant="body2" component="span">
                  ({dummy_data.reviews} reviews)
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid container item md={8} spacing={3}>
          {dummy_data.prices.map((element, index) => (
            <Grid item md={4} key={index} sx={{ margin: "auto" }}>
              <PriceCard {...element} />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Appointment name={dummy_data.name} prices={dummy_data.prices} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PartnerPage;
