import { Box, Button, styled, Typography, useTheme } from "@mui/material";
import DrinkSection from "./components/DrinkSection";
import PaySection from "./components/PaySection";
import ChangesSection from "./components/ChangesSection";
import OutletSection from "./components/OutletSection";
import {
  initMachine,
  useVendingMachineAction,
  useVendingMachineStore,
} from "@/stores/VendingMachineStore";
import SettingsIcon from "@mui/icons-material/Construction";
const VendingMachine = () => {
  const { setMachine, setUser, setIsSettingsOpen } = useVendingMachineAction();
  const { machineSetting, userSetting } = useVendingMachineStore();

  const handleClickReset = () => {
    setMachine(machineSetting);
    setUser(userSetting);
  };

  const handleClickSettings = () => {
    setIsSettingsOpen(true);
  };

  return (
    <Container>
      {/* 자판기 body */}
      <MachineBody>
        <MachineTop>
          <Typography>Siwon Vending Machine</Typography>
          <ButtonBox>
            {/* 설정 변경 button */}
            <ResetButton onClick={handleClickSettings}>
              <SettingsIcon />
              Change Settings
            </ResetButton>
          </ButtonBox>
        </MachineTop>
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
        <MachineBottom>
          {/* reset(처음으로) button*/}
          <ResetButton
            onClick={handleClickReset}
            isprimary
            sx={{ alignSelf: "end" }}
          >
            Reset
          </ResetButton>
        </MachineBottom>
      </MachineBody>
    </Container>
  );
};

const Container = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
});

const MachineBody = styled(Box)(({ theme }) => ({
  minWidth: "1000px",
  width: "60vw",
  background: theme.palette.grey[300],
  // alignSelf: "end",
  borderRadius: "20px",
  padding: "30px",
  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
}));

const MachineTop = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
  "& > .MuiTypography-root": {
    fontWeight: 600,
    fontSize: "16px",
  },
});

const MachineBottom = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "20px",
});

const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  "& > div": {
    width: "50%",
  },
});

const ButtonBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

const ResetButton = styled(Button)<{ isprimary?: boolean }>(
  ({ theme, isprimary }) => ({
    background: theme.palette.primary.main,
    color: "#fff",
    height: "36px",
    textTransform: "none",
    minWidth: "100px",
    padding: "0 10px",
    fontWeight: 600,
  })
);

export default VendingMachine;
