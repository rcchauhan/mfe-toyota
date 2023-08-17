import * as React from "react";
import { Badge, Box, Popper, Fade, Paper, Typography } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import palette from "../../../shared/theme/palette";

export default function Notifications() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  return (
    <Box sx={{ flexGrow: 0, mt: 0, mr: 2 }}>
      <Popper
        sx={{ width: 300 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              sx={{
                background: "#FFFFFF 0% 0% no-repeat padding-box;",
                boxShadow: "3px 3px 6px #0000001F",
                borderRadius: "10px",
                p: 2.4,
                mt: 3,
              }}
            >
              <Typography sx={{ p: 1 }}>
                Today is last day to confirm Rundown
              </Typography>
              <Typography sx={{ p: 1 }}>
                Today is last day to confirm Color Order
              </Typography>
              <Typography sx={{ p: 1 }}>Four A-cards to follow up</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>

      <Badge badgeContent={3} color="error" onClick={handleClick("bottom")}>
        <NotificationsNoneIcon sx={{ color: palette.primary.contrastText }} />
      </Badge>
    </Box>
  );
}
