import { Grid, Box, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

import HairStylistWallpaper from "../assets/MainPage/HairStylist.png";
import MakeupWallpaper from "../assets/MainPage/Makeup.png";
import CategoryCard from "../components/MainPage/CategoryCard";

let dummy_data = [
  { id: 1, name: "HairStylist" },
  { id: 2, name: "Nails" },
  { id: 3, name: "Spa" },
  { id: 4, name: "Skin" },
  { id: 5, name: "Waxing" },
  { id: 6, name: "Massage" },
];

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
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's
          </Typography>
          <Grid container item spacing={3} paddingTop={3} textAlign="center">
            <Grid item md={4}>
              <Typography
                sx={{
                  typography: { xs: "h4", md: "h3" },
                  fontWeight: { xs: 400, md: 700 },
                  letterSpacing: ".2rem",
                  textAlign: "center",
                }}
              >
                240
              </Typography>
              <Typography
                variant="h7"
                sx={{
                  fontWeight: 450,
                  paddingTop: 1,
                }}
              >
                Lorem Ipsum is simply dummy text of the p
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Typography
                color="primary"
                sx={{
                  typography: { xs: "h4", md: "h3" },
                  fontWeight: { xs: 400, md: 700 },
                  letterSpacing: ".2rem",
                  textAlign: "center",
                }}
              >
                1456
              </Typography>
              <Typography
                variant="h7"
                sx={{
                  fontWeight: 450,
                  paddingTop: 1,
                }}
              >
                Lorem Ipsum is simply dummy text of the p
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Typography
                sx={{
                  typography: { xs: "h4", md: "h3" },
                  fontWeight: { xs: 400, md: 700 },
                  textAlign: "center",
                  letterSpacing: ".2rem",
                }}
              >
                1M+
              </Typography>
              <Typography
                variant="h7"
                sx={{
                  fontWeight: 450,
                  paddingTop: 1,
                }}
              >
                Lorem Ipsum is simply dummy text of the p
              </Typography>
            </Grid>
          </Grid>
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
        <Grid container item xs={12} spacing={3} paddingY={3} justifyContent="center">
          {dummy_data.map((element, index) => (
            <Grid item key={index}>
              <Link to={`partners/${element.name}`} style={{ textDecoration: "none" }}>
                <CategoryCard {...element} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainPage;
