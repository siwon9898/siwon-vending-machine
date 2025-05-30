import { Box, styled, useTheme } from "@mui/material";
import React from "react";
import DrinkSection from "./components/DrinkSection";
import PaySection from "./components/PaySection";
import ChangesSection from "./components/ChangesSection";
import OutletSection from "./components/OutletSection";

const VendingMachine = () => {
  const theme = useTheme();

  return (
    <Container>
      <MachineBody>
        <FlexBox>
          <DrinkSection />
          <Box>
            <FlexBox>
              <PaySection />
              <ChangesSection />
            </FlexBox>
            <OutletSection />
          </Box>
        </FlexBox>
      </MachineBody>
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
  minWidth: "1000px",
  width: "80vw",
  background: theme.palette.grey[300],
  alignSelf: "end",
  borderRadius: "20px 20px 0 0",
  padding: "30px",
}));

const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export default VendingMachine;
