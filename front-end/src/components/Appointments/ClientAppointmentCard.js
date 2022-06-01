import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import PartnerPageWallpaper from "./../../assets/PartnerPage/PartnerPageWallpaper.jpg";
import StarIcon from "@mui/icons-material/Star";

const ClientAppointmentCard = ({ name, job, rating, reviews }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 200,
        padding: 2,
        margin: "auto",
        boxShadow: "0",
        border: "2px solid rgba(185, 42, 50,1.0);",
      }}
    >
      <CardMedia
        component="img"
        image={PartnerPageWallpaper}
        alt="green iguana"
        sx={{
          // border: "1px solid black",
          border: "1px solid rgba(185, 42, 50,1.0);",
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

export default ClientAppointmentCard;
