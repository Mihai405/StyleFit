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
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
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
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
        </FormControl>
      </Box>
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
