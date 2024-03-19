"use client";
import { Icon, Stack, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { useState } from "react";
import { searchCardIconsTextBg } from "@/utils/colorConstants";

interface SearchCardButtonWithHoverProps {
  title: string;
}

export default function SearchCardButtonWithHover(
  props: SearchCardButtonWithHoverProps
) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Stack
      flexDirection="row"
      gap="3px"
      sx={{ cursor: "pointer" }}
      alignItems="center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Typography
        sx={{
          fontWeight: "bold",
          textDecoration: "underline",
          color: isHovered ? searchCardIconsTextBg : "black",
          fontSize: ".9rem",
        }}>
        {props.title}
      </Typography>
      {!isHovered ? (
        <Icon>
          <ArrowDropDownOutlinedIcon sx={{ verticalAlign: "super" }} />
        </Icon>
      ) : (
        <Icon>
          <SearchOutlinedIcon
            sx={{ verticalAlign: "super", color: searchCardIconsTextBg }}
          />
        </Icon>
      )}
    </Stack>
  );
}
