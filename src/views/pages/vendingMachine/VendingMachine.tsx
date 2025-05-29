import { Box, styled, useTheme } from "@mui/material";
import React from "react";

const VendingMachine = () => {
  const theme = useTheme();

  return (
    <Container>
      <MachineBody></MachineBody>
    </Container>
  );
};

const Container = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
});

const MachineBody = styled(Box)(({ theme }) => ({
  minWidth: "900px",
  height: "calc(100% - 100px)",
  background: theme.palette.grey[300],
  alignSelf: "end",
  borderRadius: "20px 20px 0 0",
}));

export default VendingMachine;
