"use client";

import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import AddIcon from "@mui/icons-material/Add";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import {
  SideDrawerAddIconsBg,
  SideDrawerBackground,
  SideDrawerContainerIconsBg,
  SideDrawerIcons,
} from "@/utils/colorConstants";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={false}
        PaperProps={{ sx: { backgroundColor: SideDrawerBackground } }}>
        <List>
          {[
            { name: "Menu", icon: MenuIcon },
            { name: "Add", icon: AddIcon },
          ].map((item) => (
            <ListItem key={item.name} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  backgroundColor:
                    item.name !== "Menu" ? SideDrawerAddIconsBg : "inherit",
                  marginInline: "7px",
                  borderRadius: "10px",
                  px: 2.5,
                  "&:hover": {
                    backgroundColor:
                      item.name !== "Menu" ? SideDrawerAddIconsBg : "inherit",
                  },
                }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: "auto",
                    justifyContent: "center",
                  }}>
                  <item.icon
                    sx={{
                      color: item.name === "Menu" ? "white" : SideDrawerIcons,
                      fontSize: "1.8rem",
                    }}
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <br />
        <List>
          {[
            { name: "Shipment", icon: Inventory2Icon },
            { name: "Alert", icon: ReportProblemOutlinedIcon },
            { name: "User", icon: Person4OutlinedIcon },
            { name: "Drop", icon: WaterDropOutlinedIcon },
            { name: "Setting", icon: NewReleasesOutlinedIcon },
            { name: "Preferences", icon: HandymanOutlinedIcon },
          ].map((item) => (
            <ListItem key={item.name} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 40,
                  mt: "1rem",
                  justifyContent: "center",
                  backgroundColor:
                    item.name === "Shipment"
                      ? SideDrawerContainerIconsBg
                      : "inherit",
                  marginInline: "7px",
                  borderRadius: "13px",
                  px: 2.5,
                  "&:hover": {
                    backgroundColor:
                      item.name === "Shipment"
                        ? SideDrawerContainerIconsBg
                        : "inherit",
                  },
                }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: "auto",
                    justifyContent: "center",
                  }}>
                  <item.icon sx={{ color: SideDrawerIcons }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
