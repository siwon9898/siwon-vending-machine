import { AppBar, Box, ButtonBase, styled, useTheme } from "@mui/material";
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

const MenuButton = styled(ButtonBase)(({ theme }) => ({
  color: theme.palette.primary.main,
  "&:focus": {
    outline: "none",
    fontWeight: 600,
  },
}));

export default GNB;
