import { useState } from "react";
import {
  Grid,
  Container,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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

let dummy_data = [
  { id: 1, name: "Emma Irving", job: "HairStylist", rating: "4.7", reviews: "124" },
  { id: 2, name: "Emma Irving2", job: "Waxing", rating: "4.7", reviews: "124" },
  { id: 3, name: "Emma Irving3", job: "Nails", rating: "4.7", reviews: "124" },
  { id: 4, name: "Emma Irving4", job: "HairStylist", rating: "4.7", reviews: "124" },
  { id: 5, name: "Emma Irving5", job: "Spa", rating: "4.7", reviews: "124" },
  { id: 6, name: "Emma Irving6", job: "Massage", rating: "4.7", reviews: "124" },
  { id: 7, name: "Emma Irving7", job: "Nails", rating: "4.7", reviews: "124" },
];

const Partners = () => {
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
      <Grid container item xs={12} spacing={3} paddingY={3} justifyContent="center">
        {dummy_data
          .filter(
            (element) => (element.job === filter && filter !== "") || filter === "All"
          )
          .map((element, index) => (
            <Grid item key={index}>
              <Link to={`${element.id}`} style={{ textDecoration: "none" }}>
                <PartnerCard {...element} />
              </Link>
              <Routes>
                <Route
                  exact
                  path={`${element.id}`}
                  element={<PartnerPage {...element} />}
                ></Route>
              </Routes>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Partners;
