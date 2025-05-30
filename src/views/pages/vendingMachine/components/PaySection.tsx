import { Box, Button, styled, Typography } from "@mui/material";
import React, { useState } from "react";

const PaySection = () => {
  const [inserted, setInserted] = useState<number>(0);

  return (
    <Container>
      <Typography variant="h3">Pay here</Typography>
      <PayButtonBox>
        <Button>Card</Button>
        <Button>Cash</Button>
      </PayButtonBox>
      <InsertedBox>
        <Typography>Inserted</Typography>
        <Box>₩{inserted.toLocaleString()}</Box>
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
  marginTop: "42px !important",
  "& > .MuiBox-root": {
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: "4px",
    textAlign: "center",
    padding: "10px",
  },
}));

export default PaySection;
