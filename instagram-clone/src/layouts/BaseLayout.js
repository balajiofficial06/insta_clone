import { useMediaQuery } from "@mui/material";
import BaseBottomNav from "../components/BaseBottomNav";
import BaseLeftDrawer from "../components/BaseLeftDrawer";

export default function BaseLayout({ children }) {
  const smDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div
        style={{
          flexGrow: 1,
        }}
      >
        {smUp && <BaseLeftDrawer />}
        {children}
      </div>

      {smDown && <BaseBottomNav />}
    </div>
  );
}
