import {
  Box,
  Icon,
  IconButton,
  InputBase,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import TuneIcon from "@mui/icons-material/Tune";
import {
  SideDrawerIcons,
  searchCardBg,
  searchCardIconsTextBg,
  searchCardTextFieldBg,
} from "@/utils/colorConstants";
import SearchCardButtonWithHover from "./SearchCardButtonWithHover";
import SearchCardButton from "./SearchCardButton";

function SearchCard() {
  return (
    <Paper
      sx={{
        padding: "1rem",
        backgroundColor: searchCardBg,
        borderRadius: "15px",
      }}
      elevation={0}>
      <Stack flexDirection="row" gap={2} sx={{ m: "0 .5rem" }}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            borderRadius: "20px",
            backgroundColor: searchCardTextFieldBg,
          }}>
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <LocalShippingOutlinedIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="My Responsibilities"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchOutlinedIcon />
          </IconButton>
        </Paper>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 200,
            borderRadius: "20px",
            backgroundColor: searchCardTextFieldBg,
          }}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="PO"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <ArrowDropDownOutlinedIcon />
          </IconButton>
        </Paper>
        <IconButton
          sx={{
            position: "relative",
            backgroundColor: "black",
            "&:hover": { backgroundColor: "black" },
          }}>
          <Typography
            component="span"
            sx={{
              position: "absolute",
              bottom: "35px",
              left: "28px",
              fontSize: ".7rem",
              backgroundColor: searchCardIconsTextBg,
              p: "0px 7px",
              borderRadius: "10px",
              color: "black",
            }}>
            10
          </Typography>
          <TuneIcon
            sx={{
              color: SideDrawerIcons,
            }}
          />
        </IconButton>
      </Stack>
      <Stack flexDirection="row" gap={2} sx={{ m: "1rem .5rem" }}>
        <TextField
          id="standard-basic"
          label="coy id"
          variant="standard"
          placeholder="Enter coy id"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="standard-basic"
          label="order no"
          variant="standard"
          placeholder="Enter order no"
          InputLabelProps={{ shrink: true }}
        />
      </Stack>
      <Stack
        flexDirection="row"
        gap={2}
        sx={{ m: "0 .5rem" }}
        justifyContent="space-between">
        <Stack flexDirection="row" gap={1}>
          <SearchCardButtonWithHover title="Sort" />
          <SearchCardButtonWithHover title="Group By" />
        </Stack>
        <Stack flexDirection="row" gap={1}>
          <SearchCardButton title="Clear" color="black" />
          <SearchCardButton title="Search" color="black" />
        </Stack>
      </Stack>
    </Paper>
  );
}

export default SearchCard;
