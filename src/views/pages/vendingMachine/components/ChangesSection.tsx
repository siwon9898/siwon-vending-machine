import { Money, VendingMachineState } from "@/models/VendingMachineModel";
import {
  initMoney,
  useVendingMachineStore,
} from "@/stores/VendingMachineStore";
import { getChanges, getTotalCash } from "@/utils/\bCashCalculator";
import { Box, styled, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

const ChangesSection = () => {
  const { machine } = useVendingMachineStore();
  const [change, setChange] = useState<Money>();

  useMemo(() => {
    if (
      machine.state === VendingMachineState.drinkSelected &&
      machine.selectedDrink
    ) {
      if (machine.payMethod === "CASH") {
        const calculated: false | Money = getChanges(
          getTotalCash(machine.insertedMoney) -
            machine.selectedDrink.reduce((a, b) => a + b.price, 0),
          machine.balance
        );
        if (calculated) setChange(calculated);
      } else {
        setChange(initMoney);
      }
    }
  }, [machine.insertedMoney, machine.selectedDrink, machine.state]);

  useEffect(() => {
    console.log("machine", machine);
  }, [machine]);

  return (
    <Container>
      <Typography variant="h3">Changes</Typography>
      <Box>
        <PayStatus>
          <Typography>Price</Typography>
          <Box>
            {machine.selectedDrink
              ? machine.selectedDrink.reduce((a, b) => a + b.price, 0)
              : "-"}
          </Box>
        </PayStatus>
        <PayStatus>
          <Typography>Paid</Typography>
          <Box>
            {machine.selectedDrink
              ? machine.payMethod === "CARD"
                ? machine.selectedDrink.reduce((a, b) => a + b.price, 0)
                : getTotalCash(machine.insertedMoney).toLocaleString()
              : "-"}
          </Box>
        </PayStatus>
        <PayStatus isprimary>
          <Typography>Changes</Typography>
          <Box>{change ? getTotalCash(change).toLocaleString() : "-"}</Box>
        </PayStatus>
      </Box>
    </Container>
  );
};

const Container = styled(Box)({
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
});

const PayStatus = styled(Box)<{ isprimary?: boolean }>(
  ({ theme, isprimary }) => ({
    "& > .MuiTypography-root": {
      fontSize: "14px",
      marginBottom: "4px",
    },
    "& > .MuiBox-root": {
      border: `1px solid ${theme.palette.grey[isprimary ? 800 : 300]}`,
      padding: "8px",
      borderRadius: "4px",
      textAlign: "center",
    },
  })
);

export default ChangesSection;
