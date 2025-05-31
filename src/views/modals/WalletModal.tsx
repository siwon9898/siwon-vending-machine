import {
  useVendingMachineAction,
  useVendingMachineStore,
} from "@/stores/VendingMachineStore";
import { Box, IconButton, styled, Typography } from "@mui/material";
import DialogLayout from "../layouts/DialogLayout";
import MinusIcon from "@mui/icons-material/RemoveCircle";
import PlusIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import {
  CashUnit,
  Money,
  VendingMachineState,
} from "@/models/VendingMachineModel";
import { getTotalCash, subtractCash, sumCash } from "@/utils/CashCalculator";

const WalletModal = () => {
  const { isWalletOpen, user, machine } = useVendingMachineStore();
  const { setIsWalletOpen, setUser, setMachine } = useVendingMachineAction();
  const [selectedCash, setSelectedCash] = useState<Money>({
    100: 0,
    500: 0,
    1000: 0,
    5000: 0,
    10000: 0,
  });
  const cashUnits: CashUnit[] = [10000, 5000, 1000, 500, 100];

  const handleSelectCash = (unit: CashUnit, isAdd?: boolean) => {
    //+ 버튼
    if (isAdd) {
      if (selectedCash[unit] >= user.cashBalance[unit]) return;
      setSelectedCash({ ...selectedCash, [unit]: selectedCash[unit] + 1 });
    }
    //-버튼
    else {
      if (selectedCash[unit] === 0) return;
      setSelectedCash({ ...selectedCash, [unit]: selectedCash[unit] - 1 });
    }
  };

  //현금 투입 시 user 잔액 차감 + machine balance 추가
  const handleConfirmPay = () => {
    if (getTotalCash(selectedCash) > 0) {
      setMachine({
        ...machine,
        insertedMoney: sumCash(machine.insertedMoney, selectedCash),
        state: VendingMachineState.paid,
      });
      setUser({
        ...user,
        cashBalance: subtractCash(user.cashBalance, selectedCash),
      });
    }
    setIsWalletOpen(false);
  };

  return (
    <DialogLayout
      isOpen={isWalletOpen}
      title="Pay in cash"
      handleClose={() => setIsWalletOpen(false)}
      handleConfirm={() => handleConfirmPay()}
      sx={{ width: "500px" }}
      confirmTxt="Pay"
    >
      <>
        <Balance>
          <Typography variant="h4" sx={style.subTitle}>
            Your Cash Balance
          </Typography>
          <Typography>
            <Box component={"span"}>Total</Box> :{" "}
            {getTotalCash(user.cashBalance)}
          </Typography>
          <Box>
            {cashUnits.map((cash) => (
              <Typography>
                <Box component={"span"}>₩{cash}</Box> : {user.cashBalance[cash]}
              </Typography>
            ))}
          </Box>
        </Balance>
        <Typography variant="h4" sx={style.subTitle}>
          Select Cash
        </Typography>
        <Wallet>
          {cashUnits.map((cash) => (
            <Box key={cash}>
              <UnitTypo>₩{cash}</UnitTypo>
              <PayController>
                <IconButton onClick={() => handleSelectCash(cash)}>
                  <MinusIcon />
                </IconButton>
                <Box>{selectedCash[cash]}</Box>
                <IconButton onClick={() => handleSelectCash(cash, true)}>
                  <PlusIcon />
                </IconButton>
              </PayController>
            </Box>
          ))}
        </Wallet>
      </>
    </DialogLayout>
  );
};

const Balance = styled(Box)({
  marginBottom: "20px",
  "& > .MuiBox-root": {
    display: "flex",
    gap: "10px",
  },
  "& .MuiTypography-root > span": {
    fontWeight: 500,
  },
});
const Wallet = styled(Box)(({ theme }) => ({
  padding: "4px 0",
  marginBottom: "30px",
  "& > .MuiBox-root": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    justifyContent: "center",
  },
}));

const PayController = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  width: "100px",
  "& > .MuiBox-root": {
    width: "20px",
    textAlign: "center",
  },
});

const UnitTypo = styled(Typography)({
  width: "60px",
  fontWeight: 600,
  textAlign: "right",
});

const style = {
  subTitle: {
    fontWeight: 500,
    fontSize: "14px",
    margin: "6px 0",
    paddingBottom: "4px",
    borderBottom: "1px solid #d9d9d9",
    "&::before": {
      content: "''",
      background: "#000",
      width: "4px",
      height: "4px",
      borderRadius: "20px",
      display: "inline-block",
      verticalAlign: "middle",
      marginRight: "4px",
    },
  },
};

export default WalletModal;
