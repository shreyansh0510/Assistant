import "./App.css";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
import FlagIcon from "@mui/icons-material/Flag";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import CircleIcon from "@mui/icons-material/Circle";

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleLow = () => {
    document.getElementById("flagicon").style.color = "gray";
    document.getElementById("msg").innerHTML = "Low";
    document.getElementById("msg").style.display = "block";
  };

  const handleMedium = () => {
    document.getElementById("flagicon").style.color = "blue";
    document.getElementById("msg").innerHTML = "Medium";
    document.getElementById("msg").style.display = "block";
  };

  const handleHigh = () => {
    document.getElementById("flagicon").style.color = "purple";
    document.getElementById("msg").innerHTML = "High";
    document.getElementById("msg").style.display = "block";
  };

  const handleCritical = () => {
    document.getElementById("flagicon").style.color = "red";
    document.getElementById("msg").innerHTML = "Critical";
    document.getElementById("msg").style.display = "block";
  };

  const handleClear = () => {
    console.log("inside handleClear");
    document.getElementById("flagicon").style.color = "lightgray";
    document.getElementById("msg").innerHTML = "none";
    document.getElementById("msg").style.display = "none";
  };

  return (
    <div className="App">
      <div className="popper">
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <Typography sx={{ p: 1 }}>
                  <div className="low" onClick={handleLow}>
                    <div className="gray">
                      <CircleIcon />
                    </div>
                    Low
                  </div>
                </Typography>

                <Typography sx={{ p: 1 }}>
                  <div className="medium" onClick={handleMedium}>
                    <div className="blue">
                      <CircleIcon />
                    </div>
                    Medium
                  </div>
                </Typography>
                <Typography sx={{ p: 1 }}>
                  <div className="high" onClick={handleHigh}>
                    <div className="purple">
                      <CircleIcon />
                    </div>
                    High
                  </div>
                </Typography>

                <Typography sx={{ p: 1 }}>
                  <div className="critical" onClick={handleCritical}>
                    <div className="red">
                      <CircleIcon />
                    </div>
                    Critical
                  </div>
                </Typography>

                <Typography sx={{ p: 1 }}>
                  <div className="clear" onClick={handleClear}>
                    <div className="close">
                      <CloseIcon />
                    </div>
                    Clear
                  </div>
                </Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>

      <Card sx={{ maxWidth: 645, height: 500 }}>
        <CardContent>
          <div className="likelihood">Likelihood</div>
          <Button onClick={handleClick("bottom-start")}>
            <div className="flagMsg">
              <div className="flag">
                <div className="fi" id="flagicon">
                  <FlagIcon />
                </div>
              </div>
              <div id="msg"></div>
            </div>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
