import React, { useState } from "react";
import "./FeatureCard.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import meditation from "../../Assets/Images/Meditation.png";
import gratitude from "../../Assets/Images/Gratitude.png";
import affirmation from "../../Assets/Images/Affirmation.png";

function FeatureCard() {
 
  return (
    <div className="featurecard">
      {/* <div className="blur" style={{ left: "7%" }}></div> */}
      <Card
        className="home_card"
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
          avatar={<img src={meditation} className="avatar" />}
          title={
            <Typography variant="h6" fontWeight="bold" >
              Meditation
            </Typography>
          }
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Meditation is a practice in which an individual uses a technique –
            such as mindfulness, or focusing the mind on a particular object,
            thought, or activity – to train attention and awareness, and achieve
            a mentally clear and emotionally calm and stable state.
          </Typography>
        </CardContent>
      </Card>
      {/* <div className="blur" style={{ left: "38%" }}></div> */}
      <Card
        className="home_card"
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
          avatar={<img src={gratitude} className="avatar" />}
          title={
            <Typography variant="h6" fontWeight="bold">
              Gratitude
            </Typography>
          }
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Gratitude, thankfulness, or gratefulness is a feeling of
            appreciation (or similar positive response) by a recipient of
            another's kindness. This kindness can be gifts, help, favors, or
            another form of generosity to another person.
          </Typography>
        </CardContent>
      </Card>
      {/* <div className="blur" style={{ right: "7%" }}></div> */}
      <Card
        className="home_card"
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
          avatar={<img src={affirmation} className="avatar" />}
          title={
            <Typography variant="h6" fontWeight="bold" fontSize={"20px"}>
              Affirmation
            </Typography>
          }
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Positive affirmations are short statements that can help brighten
            your outlook on the world when you say them to yourself
            regularly—like every morning when you first wake up—or write them
            down in a journal before you go to sleep each night.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default FeatureCard;
