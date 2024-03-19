import { orderCardBg } from "@/utils/colorConstants";
import { Avatar, Box, Icon, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import LoremIpsumBadge from "./LoremIpsumBadge";
import ServiceAndDate from "./ServiceAndDate";

interface OrderItemsProps {
  id: number;
  orderNumber: string;
  orderText: string;
  children: React.ReactNode;
  avatarText: string;
  avatarBgcolor: string;
  service: string;
  date: string;
}

function OrderItems(props: OrderItemsProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        padding: ".5rem 1rem",
        backgroundColor: orderCardBg,
        border: props.id === 1 ? "1px solid grey" : null,
        my: ".5rem",
      }}>
      <Stack flexDirection="row" justifyContent="space-between">
        <Box>
          <Typography>{props.orderNumber}</Typography>
          <Typography>{props.orderText}</Typography>
        </Box>
        <Stack flexDirection="row" alignItems="center" gap={2}>
          {props.children}

          <Avatar
            sx={{
              bgcolor: props.avatarBgcolor,
              color: "white",
              width: 30,
              height: 30,
              fontSize: ".8rem",
            }}>
            {props.avatarText}
          </Avatar>
        </Stack>
      </Stack>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <LoremIpsumBadge />
        <ServiceAndDate service={props.service} date={props.date} />
      </Stack>
    </Paper>
  );
}

export default OrderItems;
