import { Tab, Tabs } from "@mui/material";

const data = [
  "Summary",
  "Order Lines",
  "Supplier",
  "Analysis",
  "Freight Details",
  "Delivery",
  "Invoice",
  "Memos",
  "Note & Attachments",
  "Budget",
];

function ShippingDetailsTabs() {
  return (
    <Tabs
      value="Summary"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example">
      {data.map((item, indx) =>
        item === "Summary" ? (
          <Tab key={indx} label={item} value={item} />
        ) : (
          <Tab key={indx} label={item} />
        )
      )}
    </Tabs>
  );
}

export default ShippingDetailsTabs;
