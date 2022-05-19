import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import HairStylistCard from "../../assets/MainPage/Cards/HairStylistCard.png";

const CategoryCard = ({ name }) => {
  return (
    <Card sx={{ maxWidth: 200, border: 1, padding: 2 }}>
      <CardMedia
        component="img"
        image={HairStylistCard}
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
        <Typography variant="h5" component="div" textAlign="center">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
