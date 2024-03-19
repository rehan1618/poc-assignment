import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import styles from "./page.module.css";
import Header from "@/components/Header";
import SearchCard from "@/components/SearchCard";
import { Box, Grid } from "@mui/material";
import Orders from "@/components/Orders";
import ShippingDetails from "@/components/ShippingDetails";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ height: "100%", mt: "1rem" }}>
        <Grid container xs={4}>
          <Grid item xs={12}>
            <SearchCard />
          </Grid>
          <Grid item xs={12}>
            <Orders />
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <ShippingDetails />
        </Grid>
      </Grid>
    </main>
  );
}
