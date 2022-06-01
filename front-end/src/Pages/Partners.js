import { useState, useCallback, useEffect } from "react";
import {
  Grid,
  Container,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  CircularProgress,
  Stack,
} from "@mui/material";

import PartnerCard from "../components/Partners/PartnerCard";
import { useNavigate, useParams } from "react-router";
import { Link, Routes, Route } from "react-router-dom";
import PartnerPage from "./PartnerPage";

const dummy_categories = [
  "All",
  "HairStylist",
  "Nails",
  "Spa",
  "Skin",
  "Waxing",
  "Massage",
];

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPartnersHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://127.0.0.1:4000/partners/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedPartners = [];

      for (const key in data) {
        loadedPartners.push({
          _id: data[key]._id,
          name: data[key].name,
          job: data[key].job,
          rating: 4.7,
          reviews: 124,
        });
      }

      setPartners(loadedPartners);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPartnersHandler();
  }, [fetchPartnersHandler]);

  let content = (
    <Typography
      sx={{ fontSize: 25, fontWeight: "bold" }}
      color="#b92a32"
      textAlign="center"
      gutterBottom
    >
      Found no partners.
    </Typography>
  );

  if (error) {
    content = (
      <Typography
        sx={{ fontSize: 25, fontWeight: "bold" }}
        color="#b92a32"
        textAlign="center"
        gutterBottom
      >
        {error}
      </Typography>
    );
  }

  if (isLoading) {
    content = (
      <Stack alignItems="center">
        <CircularProgress />
      </Stack>
    );
  }

  const navigate = useNavigate();
  const params = useParams();
  let initalFilter = "All";
  if (params.category !== undefined) {
    initalFilter = params.category;
  }
  const [filter, setFilter] = useState(initalFilter);

  const handleChange = (event) => {
    setFilter(event.target.value);
    navigate(`/partners/${event.target.value}`, { replace: true });
  };

  return (
    <Container>
      <Box sx={{ minWidth: 120 }} marginTop={4}>
        <FormControl fullWidth>
          <InputLabel id="filter-services-select-label" sx={{ color: "#b92a32" }}>
            Filter Services
          </InputLabel>
          <Select
            labelId="filter-services-select-label"
            id="filter-services-select"
            value={filter}
            label="Filter Services"
            inputProps={{
              sx: { color: "#b92a32", textAlign: "center" },
            }}
            onChange={handleChange}
          >
            {dummy_categories.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {partners.filter(
        (element) => (element.job === filter && filter !== "") || filter === "All"
      ).length > 0 && (
        <Grid container item xs={12} spacing={3} paddingY={3} justifyContent="center">
          {partners
            .filter(
              (element) => (element.job === filter && filter !== "") || filter === "All"
            )
            .map((element, index) => (
              <Grid item key={index}>
                <Link to={`${element._id}`} style={{ textDecoration: "none" }}>
                  <PartnerCard
                    {...element}
                    rating={element.rating}
                    reviews={element.reviews}
                  />
                </Link>
                <Routes>
                  <Route
                    exact
                    path={`${element._id}`}
                    element={<PartnerPage _id={element._id} />}
                  ></Route>
                </Routes>
              </Grid>
            ))}
        </Grid>
      )}
      {partners.filter(
        (element) => (element.job === filter && filter !== "") || filter === "All"
      ).length <= 0 && <div>{content} </div>}
    </Container>
  );
};

export default Partners;
