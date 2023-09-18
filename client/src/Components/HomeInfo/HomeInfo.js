import React from "react";
import "./HomeInfo.css";
import homebg from "../../Assets/Images/homeBg.png";
import tagline from "../../Assets/Images/tagline.png"; // Import the additional image
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function HomeInfo() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  function handleClickQuiz(option) {
    navigate(`/quiz/${option}`, { state: { option } });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={open ? "home blurred-background" : "home"}>
      <img src={homebg} className="homeimg" alt="Home Background" />
      <img src={tagline} className="overlay-img" alt="Overlay Image" />
      <button className="quiz-button" onClick={handleClickOpen}>
        Take a Quiz
      </button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="dialog">
          <div className="title">
            <DialogTitle style={{ fontWeight: 'bold' }}>{"Take a Quiz"}</DialogTitle>
          </div>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <div className="dialogbuttons">
                <Button
                  className="btn v1"
                  onClick={() => handleClickQuiz("depression")}
                >
                  Depression
                </Button>
                <Button
                  className="btn v1"
                  onClick={() => handleClickQuiz("anxiety")}
                >
                  Anxiety
                </Button>
                <Button
                  className="btn v1"
                  onClick={() => handleClickQuiz("addiction")}
                >
                  Addiction
                </Button>
                <Button
                  className="btn v1"
                  onClick={() => handleClickQuiz("youth")}
                >
                  Youth Mental Health
                </Button>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className="close" style={{ color: 'black' }}>Close</Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}

export default HomeInfo;
