import { AppBar, styled, useMediaQuery } from "@mui/material";
import BaseBottomNav from "../components/BaseBottomNav";
import BaseLeftDrawer from "../components/BaseLeftDrawer";

export default function BaseLayout({ children }) {
  const smDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  const Wapper = styled('div')(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100vw",


  }))

  return (

    <Wapper className="layout-wapper">
      <div
        style={{
          flexGrow: 1,
        }}
      >
        {smUp && <BaseLeftDrawer />}
      </div>

      {children}
      {smDown && <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <BaseBottomNav />
      </AppBar>}

    </Wapper>
    // <Wapper>
    //   <div
    //     style={{
    //       flexGrow: 1,
    //     }}
    //   >
    //     {smUp && <BaseLeftDrawer />}
    //   </div>
    //     {children}
    //   {smDown && <BaseBottomNav />}
    // </Wapper>

  );


}
