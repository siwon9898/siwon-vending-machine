import { Box, styled, useTheme } from "@mui/material";
import DrinkSection from "./components/DrinkSection";
import PaySection from "./components/PaySection";
import ChangesSection from "./components/ChangesSection";
import OutletSection from "./components/OutletSection";

const VendingMachine = () => {
  const theme = useTheme();

  return (
    <Container>
      {/* 자판기 body */}
      <MachineBody>
        <FlexBox>
          {/* 음료 선택 section */}
          <DrinkSection />
          <Box>
            <FlexBox>
              {/* 결제 section */}
              <PaySection />
              {/* 거스름돈 section */}
              <ChangesSection />
            </FlexBox>
            {/* 상품 출구 section */}
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
  padding: "60px 30px 30px 30px",
}));

const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  "& > div": {
    width: "50%",
  },
});

export default VendingMachine;
