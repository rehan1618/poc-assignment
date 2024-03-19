import { serviceAndDateText } from "@/utils/colorConstants";
import { Stack, Typography } from "@mui/material";

interface ServiceAndDateProps {
  service: string;
  date: string;
}

function ServiceAndDate(props: ServiceAndDateProps) {
  return (
    <Stack alignItems="flex-end">
      <Typography component="p" sx={{ color: serviceAndDateText }}>
        {props.service}
      </Typography>
      <Typography component="p" sx={{ color: serviceAndDateText }}>
        {props.date}
      </Typography>
    </Stack>
  );
}

export default ServiceAndDate;
