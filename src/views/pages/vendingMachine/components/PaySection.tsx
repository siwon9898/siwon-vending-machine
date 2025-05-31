import { PayMethod, VendingMachineState } from "@/models/VendingMachineModel";
import {
  useVendingMachineAction,
  useVendingMachineStore,
} from "@/stores/VendingMachineStore";
import { Box, Button, styled, Typography } from "@mui/material";
import React, { useState } from "react";

const PaySection = () => {
  const { machine } = useVendingMachineStore();
  const { setMachine } = useVendingMachineAction();

  const handleClickPay = (payMethod: PayMethod) => {
    setMachine({
      ...machine,
      payMethod: payMethod,
      state: VendingMachineState.paid,
    });
  };

  return (
    <Container>
      <Typography variant="h3">Pay here</Typography>
      <PayButtonBox>
        <Button onClick={() => handleClickPay("CARD")}>Card</Button>
        <Button onClick={() => handleClickPay("CASH")}>Cash</Button>
      </PayButtonBox>
      <InsertedBox>
        <Typography>Inserted</Typography>
        {machine.state === VendingMachineState.paid ? (
          <Box>
            {machine.payMethod === "CARD"
              ? "AUTO"
              : `₩${machine.insertedMoney.toLocaleString()}`}
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
