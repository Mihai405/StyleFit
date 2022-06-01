import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import PartnerPageWallpaper from "./../../assets/PartnerPage/PartnerPageWallpaper.jpg";
import StarIcon from "@mui/icons-material/Star";
import SpaIcon from "@mui/icons-material/Spa";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const AppointmentCard = ({ client, partner, services, date, currentUser }) => {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const dateNewFormat = new Date(date).toLocaleDateString("en-US", options);

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
          {currentUser === "PARTNER" ? partner.name : client.name}
        </Typography>
        {currentUser === "PARTNER" && (
          <Typography variant="h6" component="div" textAlign="center" fontWeight={400}>
            {partner.job}
          </Typography>
        )}
        {currentUser === "PARTNER" && (
          <Box display="flex" justifyContent="center" alignItems="center" marginTop={1}>
            <StarIcon sx={{ fill: "#ffe234" }} />
            <Typography variant="body1" component="span" marginRight={1} fontWeight={450}>
              {partner.rating}
            </Typography>
            <Typography variant="body2" component="span">
              ({partner.reviews} reviews)
            </Typography>
          </Box>
        )}

        <Box display="flex" justifyContent="center" alignItems="center" marginTop={1}>
          <SpaIcon sx={{ fill: "#ffe234", marginRight: "6px" }} />
          <Typography variant="body1" component="span" marginRight={1} fontWeight={450}>
            {services.name}
          </Typography>
          <Typography variant="body2" component="span">
            ({services.price} RON)
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" marginTop={1}>
          <CalendarMonthIcon sx={{ fill: "#ffe234" }} />
          <Typography
            variant="body1"
            component="span"
            marginRight={1}
            fontWeight={450}
            textAlign="center"
          >
            {dateNewFormat}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;
