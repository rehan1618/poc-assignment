import { searchCardIconsTextBg } from "@/utils/colorConstants";
import { Stack, Typography } from "@mui/material";

interface SearchCardButtonProps {
  title: string;
  color: string;
}

function SearchCardButton(props: SearchCardButtonProps) {
  return (
    <Stack
      flexDirection="row"
      gap="3px"
      sx={{ cursor: "pointer" }}
      alignItems="center">
      <Typography
        sx={{
          fontWeight: "bold",
          textDecoration: "underline",
          color: props.color,
          fontSize: ".9rem",
        }}>
        {props.title}
      </Typography>
    </Stack>
  );
}

export default SearchCardButton;
