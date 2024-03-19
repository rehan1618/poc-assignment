import { Box, Icon, Stack, Typography } from "@mui/material";
import AnchorIcon from "@mui/icons-material/Anchor";
import PushPinIcon from "@mui/icons-material/PushPin";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import OrderItems from "./OrderItems";
import { serviceAndDateText } from "@/utils/colorConstants";

// 4907-00019
// HOTEL/TECH WORK SQUAD GFR
// "Service"
// "12 Jul 2019"

const data = [
  {
    id: 1,
    orderNumber: "4907-00019",
    orderText: "HOTEL/TECH WORK SQUAD GFR",
    service: "Service",
    date: "12 Jul 2019",
    avatarText: "RT",
    avatarBgcolor: "green",
    icons: ["AnchorIcon"],
  },
  {
    id: 2,
    orderNumber: "4907-00019",
    orderText: "HOTEL/TECH WORK SQUAD GFR",
    service: "Service",
    date: "12 Jul 2019",
    avatarText: "QT",
    avatarBgcolor: "red",
    icons: [],
  },
  {
    id: 3,
    orderNumber: "4907-00019",
    orderText: "HOTEL/TECH WORK SQUAD GFR",
    service: "Service",
    date: "12 Jul 2019",
    avatarText: "EO",
    avatarBgcolor: "orange",
    icons: ["PushPinIcon"],
  },
  {
    id: 4,
    orderNumber: "4907-00019",
    orderText: "HOTEL/TECH WORK SQUAD GFR",
    service: "Service",
    date: "12 Jul 2019",
    avatarText: "RT",
    avatarBgcolor: "green",
    icons: ["AnchorIcon", "PushPinIcon"],
  },
  {
    id: 5,
    orderNumber: "4907-00019",
    orderText: "HOTEL/TECH WORK SQUAD GFR",
    service: "Service",
    date: "12 Jul 2019",
    avatarText: "RT",
    avatarBgcolor: "green",
    icons: ["InfoOutlinedIcon"],
  },
  {
    id: 6,
    orderNumber: "4907-00019",
    orderText: "HOTEL/TECH WORK SQUAD GFR",
    service: "Service",
    date: "12 Jul 2019",
    avatarText: "RT",
    avatarBgcolor: "green",
    icons: [],
  },
];

export default function Orders() {
  return (
    <Stack>
      <Box>
        <Typography component="span">Orders</Typography>
        <Typography component="span">8</Typography>
      </Box>
      <Box
        sx={{
          overflowY: "scroll",
          height: "80vh",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}>
        {data.map((item) => (
          <OrderItems
            key={item.id}
            id={item.id}
            orderNumber={item.orderNumber}
            orderText={item.orderText}
            service={item.service}
            date={item.date}
            avatarBgcolor={item.avatarBgcolor}
            avatarText={item.avatarText}>
            {item.icons.map((Item2, indx) => (
              <Icon key={indx}>
                {Item2 === "AnchorIcon" ? (
                  <AnchorIcon
                    sx={{ width: 25, height: 25, color: serviceAndDateText }}
                  />
                ) : Item2 === "PushPinIcon" ? (
                  <PushPinIcon
                    sx={{ width: 25, height: 25, color: serviceAndDateText }}
                  />
                ) : Item2 === "InfoOutlinedIcon" ? (
                  <InfoOutlinedIcon
                    sx={{ width: 25, height: 25, color: serviceAndDateText }}
                  />
                ) : null}
              </Icon>
            ))}
          </OrderItems>
        ))}
      </Box>
    </Stack>
  );
}
