import { loremIpsumBadgeBg, loremIpsumIcon } from "@/utils/colorConstants";
import { Icon, Stack, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

function LoremIpsumBadge() {
  return (
    <Stack
      flexDirection="row"
      gap={1}
      sx={{
        p: ".3rem .8rem",
        backgroundColor: loremIpsumBadgeBg,
        borderRadius: "12px",
        height: "2.2rem",
      }}>
      <Icon>
        <LocalShippingOutlinedIcon
          sx={{ width: 25, height: 25, color: loremIpsumIcon }}
        />
      </Icon>
      <Typography sx={{ color: loremIpsumIcon }}>Lorem Ipsum</Typography>
    </Stack>
  );
}

export default LoremIpsumBadge;
