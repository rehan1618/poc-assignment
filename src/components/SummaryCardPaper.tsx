import { paperBgColor } from "@/utils/colorConstants";
import { Paper } from "@mui/material";

interface SummaryCardPaperProps {
  children: React.ReactNode;
}

function SummaryCardPaper(props: SummaryCardPaperProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: paperBgColor,
        p: "1rem",
        borderRadius: "15px",
        my: ".5rem",
      }}>
      {props.children}
    </Paper>
  );
}

export default SummaryCardPaper;
