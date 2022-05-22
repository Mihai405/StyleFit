import { Box, Typography } from "@mui/material";

const PriceCard = () => {
  return (
    <Box display="flex" alignItems="center">
      <Box
        display="inline-flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          border: "1px solid black",
          borderRadius: "50%",
          padding: "10px",
          marginRight: "10px",
        }}
      >
        <Typography>100</Typography>
        <Typography>RON</Typography>
      </Box>
      <Typography component="span">Therapeutic Massage</Typography>
    </Box>
  );
};

export default PriceCard;
