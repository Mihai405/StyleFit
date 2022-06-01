import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Container,
  Stack,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import PriceCard from "../components/PartnerPage/PriceCard";
import Appointment from "../components/PartnerPage/Appointment";
import { useParams } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { CircularProgress } from "@mui/material";

const PartnerPage = () => {
  const params = useParams();

  const [partner, setPartner] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchPartnerHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:4000/partners/${params.id}`);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedPartner = {
        _id: data.partner._id,
        name: data.partner.name,
        job: data.partner.job,
        rating: 4.7,
        reviews: 124,
        services: data.services,
      };

      setPartner(loadedPartner);
    } catch (error) {
      throw new Error(error.message);
    }
    setIsLoading(false);
  }, [params.id]);

  useEffect(() => {
    fetchPartnerHandler();
  }, [fetchPartnerHandler]);

  if (isLoading) {
    return (
      <Stack alignItems="center">
        <CircularProgress />
      </Stack>
    );
  }

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
              image={`http://127.0.0.1:4000/partners/${params.id}/image`}
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
                {partner.name}
              </Typography>
              <Typography
                variant="h6"
                component="div"
                textAlign="center"
                fontWeight={400}
              >
                {partner.job}
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
                  {partner.rating}
                </Typography>
                <Typography variant="body2" component="span">
                  ({partner.reviews} reviews)
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid container item md={8} spacing={3}>
          {partner.services?.map((element, index) => (
            <Grid item md={4} key={index} sx={{ margin: "auto" }}>
              <PriceCard {...element} />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Appointment name={partner.name} prices={partner.services} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PartnerPage;
