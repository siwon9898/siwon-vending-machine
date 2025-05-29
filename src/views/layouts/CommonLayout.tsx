import { Box, styled } from "@mui/material";
import GNB from "../../components/GNB/GNB";
import { Outlet } from "react-router-dom";

const CommonLayout = () => {
  return (
    <Container>
      <GNB />
      <Box>
        <Outlet />
      </Box>
    </Container>
  );
};

const Container = styled(Box)({
  width: "100vw",
  minHeight: "100vh",
  "& > .MuiBox-root": {
    minHeight: "calc(100% - 40px)",
    top: "40px",
    padding: "30px",
  },
});

export default CommonLayout;
