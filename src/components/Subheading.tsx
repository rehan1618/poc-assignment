import { summaryHeaderTextColor } from "@/utils/colorConstants";
import { Stack, Typography } from "@mui/material";

interface SubheadingProps {
  title: string;
  value: string;
}

function Subheading(props: SubheadingProps) {
  return (
    <Stack justifyContent="flex-start">
      <Typography sx={{ color: summaryHeaderTextColor }}>
        {props.title}
      </Typography>
      <Typography sx={{ fontSize: ".8rem" }}>{props.value}</Typography>
    </Stack>
  );
}

export default Subheading;
