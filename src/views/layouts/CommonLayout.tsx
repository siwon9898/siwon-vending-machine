import GNB from "@/components/GNB/GNB";
import { Box, styled } from "@mui/material";
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
  height: "100vh",
  "& > .MuiBox-root": {
    width: "100%",
    height: "calc(100% - 40px)",
    top: "40px",
    padding: "30px 30px 0 30px",
  },
});

export default CommonLayout;
