import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const PartnerCard = ({ name, job, rating, reviews, _id }) => {
  return (
    <Card sx={{ maxWidth: 200, border: 1, padding: 2 }}>
      <CardMedia
        component="img"
        image={`http://127.0.0.1:4000/partners/${_id}/image`}
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
        <Typography variant="h5" component="div" textAlign="center" fontWeight={500}>
          {name}
        </Typography>
        <Typography variant="h6" component="div" textAlign="center" fontWeight={400}>
          {job}
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" marginTop={1}>
          <StarIcon sx={{ fill: "#ffe234" }} />
          <Typography variant="body1" component="span" marginRight={1} fontWeight={450}>
            {rating}
          </Typography>
          <Typography variant="body2" component="span">
            ({reviews} reviews)
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PartnerCard;
