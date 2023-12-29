import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import navigation from "../data/navigation";
import { useLocation, useNavigate } from "react-router-dom";

export default function BaseLeftDrawer() {
  const open = true;
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const theme = useTheme();
  const location = useLocation();

  const navigate = useNavigate();

  return (
    <Drawer open={open} variant="persistent" anchor="left">
      <List>
        {navigation.map((item) => {
          return (
            <ListItem
              style={{
                color:
                  location.pathname === item.path
                    ? theme.palette.primary.main
                    : undefined,
              }}
              onClick={() => {
                navigate(item.path);
              }}
            >
              <ListItemIcon>
                {
                  <item.Icon
                    style={{
                      color:
                        location.pathname === item.path
                          ? theme.palette.primary.main
                          : undefined,
                    }}
                  />
                }
              </ListItemIcon>
              {mdUp && <ListItemText primary={item.name} />}
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}
