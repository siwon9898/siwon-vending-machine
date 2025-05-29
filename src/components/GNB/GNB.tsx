import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  styled,
  Theme,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const GNB = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const navigateTo = (path: string) => {
    if (!path) return;
    navigate(path);
  };
  return (
    <GNBAppbar>
      <Box>
        <MenuButton onClick={() => navigateTo("/")}>Vending Machine</MenuButton>
        <MenuButton onClick={() => navigateTo("/diagram")}>Diagram</MenuButton>
      </Box>
    </GNBAppbar>
  );
};

const GNBAppbar = styled(AppBar)({
  width: "100%",
  position: "fixed",
  justifyContent: "center",
  top: 0,
  left: 0,
  background: "transparent",
  height: "40px",
  padding: "0 30px",
  "& > div": {
    display: "flex",
    alignItems: "center",
    gap: "40px",
  },
});

const MenuButton = styled(ButtonBase)((props: { theme: Theme }) => {
  return {
    color: props.theme.palette.primary,
  };
});
export default GNB;
