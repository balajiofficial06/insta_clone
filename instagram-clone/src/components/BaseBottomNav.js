import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import navigation from "../data/navigation";

export default function BaseBottomNav() {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  const navigate = useNavigate();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        navigate(newValue);
      }}
    >
      {navigation.map((item) => {
        return (
          <BottomNavigationAction
            value={item.path}
            label={item.name}
            icon={<item.Icon />}
          />
        );
      })}
    </BottomNavigation>
  );
}
