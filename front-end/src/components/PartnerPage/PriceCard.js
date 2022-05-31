import { Box, Typography } from "@mui/material";

const PriceCard = ({ price, name }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box
        display="inline-flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          width: "50px",
          border: "1px solid black",
          borderRadius: "100%",
          padding: "5px",
          marginRight: "10px",
        }}
      >
        <Typography>{price}</Typography>
        <Typography>RON</Typography>
      </Box>
      <Typography component="span">{name}</Typography>
    </Box>
  );
};

export default PriceCard;
