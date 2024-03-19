import { Stack, Typography } from "@mui/material";

interface SummaryCardsHeadingProps {
  title: string;
  subText: string;
}

function SummaryCardsHeading(props: SummaryCardsHeadingProps) {
  return (
    <Stack flexDirection="row" gap={2} alignItems="center" sx={{ mb: "1rem" }}>
      <Typography sx={{ fontWeight: "bold" }}>{props.title}</Typography>
      <Typography
        sx={{
          backgroundColor: "lightgrey",
          p: "0px 10px",
          borderRadius: "10px",
        }}>
        {props.subText}
      </Typography>
    </Stack>
  );
}

export default SummaryCardsHeading;
