import {
  Box,
  Divider,
  Icon,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ShippingDetailsHeader from "./ShippingDetailsHeader";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ShippingDetailsOptions from "./ShippingDetailsOptions";
import ShippingDetailsTabs from "./ShippingDetailsTabs";
import Subheading from "./Subheading";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AddressLines from "./AddressLines";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SupplierTable from "./SupplierTable";
import SummaryCardsHeading from "./SummaryCardsHeading";
import { paperBgColor } from "@/utils/colorConstants";
import SummaryCardPaper from "./SummaryCardPaper";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import SummarizeIcon from "@mui/icons-material/Summarize";
import TouchAppIcon from "@mui/icons-material/TouchApp";

// 1st Floor, Skypark, 8 Elliot Place, G3 8EP, GBR

const data = [
  { title: "Date Authorized", value: "12 Jul 2019" },
  { title: "Authorized By", value: "Jim Darren" },
  { title: "Invoice Chased Date", value: "-" },
  { title: "PO Confirmed Date", value: "-" },
  { title: "PO Ref No.", value: "-" },
];

function ShippingDetails() {
  return (
    <Paper sx={{ height: "100%" }}>
      <ShippingDetailsHeader />
      <Stack flexDirection="row" gap={2} sx={{ m: "1rem" }}>
        <ShippingDetailsOptions text="Edit Order Details">
          <InsertDriveFileOutlinedIcon sx={{ color: "green" }} />
        </ShippingDetailsOptions>
        <ShippingDetailsOptions text="Print Order Details">
          <LocalPrintshopIcon sx={{ color: "green" }} />
        </ShippingDetailsOptions>
        <ShippingDetailsOptions text="Change Dilivery Status">
          <FileOpenIcon sx={{ color: "green" }} />
        </ShippingDetailsOptions>
        <ShippingDetailsOptions text="Reports">
          <SummarizeIcon sx={{ color: "green" }} />
        </ShippingDetailsOptions>
        <ShippingDetailsOptions text="Actions">
          <TouchAppIcon sx={{ color: "green" }} />
        </ShippingDetailsOptions>
      </Stack>
      <Divider />
      <ShippingDetailsTabs />
      <Box
        sx={{
          overflowY: "scroll",
          padding: "1rem",
          height: "80vh",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}>
        <SummaryCardPaper>
          <SummaryCardsHeading title="COMPONENTS" subText="0" />
          <Typography
            variant="body1"
            sx={{ color: "grey", fontStyle: "italic" }}>
            No items found
          </Typography>
        </SummaryCardPaper>
        <SummaryCardPaper>
          <SummaryCardsHeading
            title="AUTHORIZED SUPPLIER"
            subText="Ref: PRJ001963SRIN"
          />
          <Stack flexDirection="row" gap={3} sx={{ my: "1rem" }}>
            {data.map((item) => (
              <Subheading
                key={item.value}
                title={item.title}
                value={item.value}
              />
            ))}
          </Stack>
          <Stack>
            <Typography>Repairs (Riding Squads / Manpower)</Typography>
            <Rating name="read-only" value={4} readOnly />
          </Stack>
          <Stack sx={{ my: "1rem" }}>
            <AddressLines text="1st Floor, Skypark, 8 Elliot Place, G3 8EP, GBR">
              <LocationOnOutlinedIcon sx={{ color: "green" }} />
            </AddressLines>
            <AddressLines text="+44 (0) 141 305 1300">
              <LocalPhoneOutlinedIcon sx={{ color: "green" }} />
            </AddressLines>
            <AddressLines text="+44 (0) 141 305 1300">
              <LocalPhoneOutlinedIcon sx={{ color: "green" }} />
            </AddressLines>
            <AddressLines text="repairs@service.com">
              <EmailOutlinedIcon sx={{ color: "green" }} />
            </AddressLines>
          </Stack>
        </SummaryCardPaper>
        <SummaryCardPaper>
          <SummaryCardsHeading title="SUPPLIERS" subText="2" />
          <SupplierTable />
        </SummaryCardPaper>
        <SummaryCardPaper>
          <Stack flexDirection="row">
            <Typography>COST</Typography>
            <Typography>USD</Typography>
          </Stack>
        </SummaryCardPaper>
      </Box>
    </Paper>
  );
}

export default ShippingDetails;
