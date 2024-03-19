import { Icon, Stack, Typography } from "@mui/material";

interface ShippingDetailsOptionsProps {
  text: string;
  children: React.ReactNode;
}

function ShippingDetailsOptions(props: ShippingDetailsOptionsProps) {
  return (
    <Stack flexDirection="row" alignItems="center">
      <Icon>{props.children}</Icon>
      <Typography sx={{ color: "green" }}>{props.text}</Typography>
    </Stack>
  );
}

export default ShippingDetailsOptions;
