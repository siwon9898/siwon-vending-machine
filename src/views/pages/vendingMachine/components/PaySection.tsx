import { PayMethod, VendingMachineState } from "@/models/VendingMachineModel";
import {
  useVendingMachineAction,
  useVendingMachineStore,
} from "@/stores/VendingMachineStore";
import { getTotalCash } from "@/utils/\bCashCalculator";
import { Box, Button, styled, Typography } from "@mui/material";
import { useState } from "react";

const PaySection = () => {
  const { machine } = useVendingMachineStore();
  const { setMachine, setIsWalletOpen } = useVendingMachineAction();
  const [isPaying, setIsPaying] = useState<boolean>(false);

  const handleClickPay = (payMethod: PayMethod) => {
    if (payMethod === "CASH") {
      setMachine({
        ...machine,
        payMethod: payMethod,
      });
      setIsWalletOpen(true);
    } else if (payMethod === "CARD") {
      //카드결제는 카드 투입한 순간 paid 상태
      setMachine({
        ...machine,
        payMethod: payMethod,
        state: VendingMachineState.paid,
      });
    }
  };

  return (
    <Container>
      <Typography variant="h3">Pay here</Typography>
      <PayButtonBox>
        <Button
          onClick={() => handleClickPay("CARD")}
          disabled={machine.payMethod === "CASH"}
        >
          Card
        </Button>
        <Button
          onClick={() => handleClickPay("CASH")}
          disabled={machine.payMethod === "CARD"}
        >
          Cash
        </Button>
      </PayButtonBox>
      <InsertedBox>
        <Typography>Inserted</Typography>
        {machine.state !== VendingMachineState.initial ? (
          <Box>
            {machine.payMethod === "CARD"
              ? "AUTO"
              : `₩${getTotalCash(machine.insertedMoney).toLocaleString()}`}
          </Box>
        ) : (
          <Box>-</Box>
        )}
      </InsertedBox>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => ({
  height: "320px",
  background: "#fff",
  padding: "30px",
  borderRadius: "20px",
  "& > h3": {
    fontWeight: 600,
  },
  "& > .MuiBox-root": {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
}));

const PayButtonBox = styled(Box)(({ theme }) => ({
  "& > .MuiButtonBase-root": {
    background: theme.palette.secondary.main,
    height: "40px",
  },
}));

const InsertedBox = styled(Box)(({ theme }) => ({
  marginTop: "48px !important",
  gap: "4px !important",
  "& > .MuiBox-root": {
    border: `1px solid ${theme.palette.grey[800]}`,
    borderRadius: "4px",
    textAlign: "center",
    padding: "10px",
  },
}));

export default PaySection;
