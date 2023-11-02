import React from "react";
import Typography from "@mui/material/Typography";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

function NavBar() {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ color: "gray", display: "flex", gap: "1.3rem", marginLeft: "" }}
    >
      <PersonOutlineOutlinedIcon />
      <SettingsOutlinedIcon />
      <NotificationsNoneOutlinedIcon />
      <ChevronLeftOutlinedIcon />
      <KeyboardArrowRightOutlinedIcon />
    </Typography>
  );
}

export default NavBar;
