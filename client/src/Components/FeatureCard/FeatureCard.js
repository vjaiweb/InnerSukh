import React, { useState } from "react";
import "./FeatureCard.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

function FeatureCard() {
  return (
    <div className="featurecard">
      <Card
        className="card"
        sx={{
          background: "linear-gradient(to bottom, #ffffff, #f3f3f3)", // Add the gradient background
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.6)",
          borderRadius: "10px",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.4)", // Adjust the scaling factor as needed
          },
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title={<Typography variant="h6" fontWeight="bold">Meditation</Typography>}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Practice of mindfulness and inner reflection, fostering mental
            clarity and emotional balance.
          </Typography>
        </CardContent>
      </Card>
      <Card
        className="card"
        sx={{
          background: "linear-gradient(to bottom, #ffffff, #f3f3f3)", // Add the gradient background
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.6)",
          borderRadius: "10px",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.4)", // Adjust the scaling factor as needed
          },
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title={<Typography variant="h6" fontWeight="bold">Gratitude</Typography>}
          />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Practice of mindfulness and inner reflection, fostering mental
            clarity and emotional balance.
          </Typography>
        </CardContent>
      </Card>
      <Card
        className="card"
        sx={{
          background: "linear-gradient(to bottom, #ffffff, #f3f3f3)", // Add the gradient background
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.6)",
          borderRadius: "10px",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.4)", // Adjust the scaling factor as needed
          },
        }}
        >
        <CardHeader
          avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title={<Typography variant="h6" fontWeight="bold">Affirmation</Typography>}
          />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Practice of mindfulness and inner reflection, fostering mental
            clarity and emotional balance.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default FeatureCard;
