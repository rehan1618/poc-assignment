import { Icon, Stack, Typography } from "@mui/material";

interface AddressLinesProps {
  children: React.ReactNode;
  text: string;
}

function AddressLines(props: AddressLinesProps) {
  return (
    <Stack flexDirection="row" gap={1} alignItems="center">
      <Icon>{props.children}</Icon>
      <Typography sx={{ color: "green" }}>{props.text}</Typography>
    </Stack>
  );
}

export default AddressLines;
