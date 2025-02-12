import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

function CardComponent({ props }) {
  if (!props) {
    return null; // or a fallback UI
  }
  const imgUrl =
    "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200";

  return (
    <Card
      sx={{
        maxWidth: 320,
        maxHeight: 370,
        marginBottom: 5,
        borderRadius: 3,
        boxShadow: 6,
        transition: "transform 0.3s",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardActionArea href={`/posts/${props.id}`}>
        <CardMedia
          component="img"
          height="200"
          image={props.thumbnail}
          alt="bird"
          sx={{ borderRadius: "8px 8px 0 0" }}
        />
        <CardContent
          sx={{
            backgroundColor: "#f5f5f5",
            display: "flex",
            flexDirection: "column",
            alignItems: "space-between",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", color: "#333" }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "#555", marginBottom: "2vh", height: "5vh" }}
          >
            {props.abstract}
          </Typography>
          {/* <div className={utilStyles.lightText}>
            <Date dateString={props.date} />
          </div> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardComponent;
