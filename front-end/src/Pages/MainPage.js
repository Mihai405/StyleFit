import { Grid, Box, Typography, Container } from "@mui/material";

import HairStylistWallpaper from "../assets/MainPage/HairStylist.png";
import MakeupWallpaper from "../assets/MainPage/Makeup.png";

const MainPage = () => {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item md={4}>
          <Box
            sx={{
              backgroundImage: `url(${HairStylistWallpaper})`,
              backgroundSize: "cover",
              height: "100vh",
              maxHeight: "600px",
              backgroundPosition: "bottom right",
              position: "relative",
            }}
          ></Box>
        </Grid>
        <Grid item md={4}>
          <Typography
            color="primary"
            sx={{
              paddingTop: { md: 10 },
              typography: { xs: "h4", md: "h2" },
              fontWeight: { xs: 400, md: 700 },
              textAlign: "center",
              letterSpacing: ".2rem",
            }}
          >
            Don’t Miss Our Exclusive Special Offer
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            textAlign="center"
            sx={{
              fontWeight: 450,
              letterSpacing: ".2rem",
            }}
            marginBottom={7}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Box
            sx={{
              backgroundImage: `url(${MakeupWallpaper})`,
              backgroundSize: "cover",
              height: "100vh",
              maxHeight: "600px",
              backgroundPosition: "bottom right",
              position: "relative",
            }}
          ></Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainPage;
