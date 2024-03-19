import { Avatar, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import LoremIpsumBadge from "./LoremIpsumBadge";
import Subheading from "./Subheading";
import SearchCardButton from "./SearchCardButton";
import { summaryHeaderBgColor } from "@/utils/colorConstants";

const data = [
  { title: "Date Requested", value: "10 Jul 2019" },
  { title: "Type", value: "Services" },
  { title: "Account Code", value: "583004 - HM PAX ACCOMMODATION (LABOR)" },
];

function ShippingDetailsHeader() {
  return (
    <Paper
      sx={{
        bgcolor: summaryHeaderBgColor,
        padding: "1rem",
        borderRadius: "15px 15px 0 0",
      }}>
      <Stack flexDirection="row" justifyContent="space-between">
        <Stack flexDirection="row" gap={1}>
          <Avatar
            sx={{
              bgcolor: "green",
              color: "white",
              width: 30,
              height: 30,
              fontSize: ".8rem",
            }}>
            RT
          </Avatar>
          <Typography sx={{ fontWeight: "700" }}>4907-00019</Typography>
          <Typography sx={{ fontWeight: "700" }}>
            HOTEL/TECH WORK SQUAD GFR
          </Typography>
        </Stack>
        <LoremIpsumBadge />
      </Stack>
      <Stack
        sx={{ mt: ".5rem" }}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end">
        {data.map((item) => (
          <Subheading key={item.value} title={item.title} value={item.value} />
        ))}
        <Stack flexDirection="row" gap={2}>
          <SearchCardButton title="Order Summary" color="green" />
          <SearchCardButton title="Order Progress" color="green" />
        </Stack>
      </Stack>
    </Paper>
  );
}

export default ShippingDetailsHeader;
