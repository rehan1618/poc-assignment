import { Avatar, Button, Icon, Paper, Stack, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Header() {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: "100%" }}>
      <Typography variant="h6" component="h3">
        Procurement
      </Typography>
      <Stack flexDirection="row" gap={3} alignItems="center">
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
        <Icon>
          <NotificationsNoneOutlinedIcon />
        </Icon>
        <Icon>
          <AppsIcon />
        </Icon>
        <Paper elevation={3} sx={{ padding: "5px", borderRadius: "20px" }}>
          <Stack flexDirection="row" gap="10px">
            <Avatar
              alt="Remy Sharp"
              src="/1.jpg"
              sx={{ width: 24, height: 24 }}
            />
            <Typography component="p">Daniel Rogers</Typography>
            <Icon>
              <ArrowDropDownIcon sx={{ verticalAlign: "super" }} />
            </Icon>
          </Stack>
        </Paper>
      </Stack>
    </Stack>
  );
}
