import DialogLayout from "../layouts/DialogLayout";
import {
  initMachine,
  initUser,
  useVendingMachineAction,
  useVendingMachineStore,
} from "@/stores/VendingMachineStore";
import { Box, IconButton, Input, Typography } from "@mui/material";
import MinusIcon from "@mui/icons-material/RemoveCircle";
import PlusIcon from "@mui/icons-material/AddCircle";
import { styled } from "@mui/system";
import { useState } from "react";
import { CashUnit, Machine, User } from "@/models/VendingMachineModel";
import { useCustomSnackbar } from "@/components/snackbar/useCustomSnackbar";

const SettingsModal = () => {
  const { showSnackbar } = useCustomSnackbar();
  const cashUnits: CashUnit[] = [10000, 5000, 1000, 500, 100];
  const { isSettingsOpen, machineSetting, userSetting } =
    useVendingMachineStore();
  const {
    setMachineSetting,
    setIsSettingsOpen,
    setUserSetting,
    setUser,
    setMachine,
  } = useVendingMachineAction();

  const [tempSettings, setTempSettings] = useState<Machine>(machineSetting);
  const [tempUserSettings, setTempUserSettings] = useState<User>(userSetting);

  //자판기 - 재고 변경 Handler
  const handleChangeStock = (drinkId: number, isAdd?: boolean) => {
    const targetDrink = tempSettings.drinks.find(
      (drink) => drink.drinkId === drinkId
    );
    if (!targetDrink) return;

    if (isAdd) {
      if (targetDrink.stock >= 5) {
        showSnackbar("Maximum stock is 5", "warning");
        return;
      }
    } else {
      if (targetDrink.stock === 0) return;
    }

    const delta = isAdd ? 1 : -1;

    setTempSettings({
      ...tempSettings,
      drinks: tempSettings.drinks.map((drink) =>
        drink.drinkId === drinkId
          ? { ...drink, stock: drink.stock + delta }
          : drink
      ),
    });
  };

  //자판기 - 현금 시재 변경 handler
  const handleChangeMachineBalance = (unit: CashUnit, isAdd?: boolean) => {
    if (isAdd) {
      if (tempSettings.balance[unit] >= 20) {
        showSnackbar("Maximum value is 20", "warning");
        return;
      }
    } else {
      if (tempSettings.balance[unit] === 0) return;
    }

    const delta = isAdd ? 1 : -1;
    setTempSettings({
      ...tempSettings,
      balance: {
        ...tempSettings.balance,
        [unit]: tempSettings.balance[unit] + delta,
      },
    });
  };

  //사용자 - 카드 잔액 변경 handler
  const handleChangeCardBalance = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsed = Number(value);

    if (value.trim() === "" || isNaN(parsed) || parsed < 0 || parsed > 50000) {
      showSnackbar(`Please enter a number between 0 and 50000`, "warning");
      e.target.value = initUser.cardBalance.toString();
    } else {
      setTempUserSettings((prev) => ({
        ...prev,
        cardBalance: parsed,
      }));
    }
  };

  //사용자 - 현금 잔액 변경 handler
  const handleChangeUserBalance = (unit: CashUnit, isAdd?: boolean) => {
    if (isAdd) {
      if (tempUserSettings.cashBalance[unit] >= 20) {
        showSnackbar("Maximum value is 20", "warning");
        return;
      }
    } else {
      if (tempUserSettings.cashBalance[unit] === 0) return;
    }
    const delta = isAdd ? 1 : -1;
    setTempUserSettings({
      ...tempUserSettings,
      cashBalance: {
        ...tempUserSettings.cashBalance,
        [unit]: tempUserSettings.cashBalance[unit] + delta,
      },
    });
  };

  const handleSave = () => {
    setMachineSetting(tempSettings);
    setUserSetting(tempUserSettings);
    setMachine(tempSettings);
    setUser(tempUserSettings);
    setIsSettingsOpen(false);
  };

  return (
    <DialogLayout
      isOpen={isSettingsOpen}
      title="Change Settings"
      handleClose={() => setIsSettingsOpen(false)}
      handleConfirm={handleSave}
      sx={{ width: "500px" }}
      confirmTxt="Save"
    >
      <Box>
        <Box>
          <Typography sx={style.subTitle}>Machine</Typography>
          <SettingBox>
            <Typography>Product Stock</Typography>
            <FlexBox>
              {tempSettings.drinks.map((product) => (
                <FlexBox key={`settings_${product.drinkId}`}>
                  <Typography mr={1} variant="h5">
                    {product.name}
                  </Typography>
                  <PayController>
                    <IconButton
                      onClick={() => handleChangeStock(product.drinkId)}
                    >
                      <MinusIcon />
                    </IconButton>
                    <Box>{product.stock}</Box>
                    <IconButton
                      onClick={() => handleChangeStock(product.drinkId, true)}
                    >
                      <PlusIcon />
                    </IconButton>
                  </PayController>
                </FlexBox>
              ))}
            </FlexBox>
          </SettingBox>
          <SettingBox>
            <Typography>Machine Cash Balance</Typography>
            <FlexBox>
              {cashUnits.map((unit) => (
                <FlexBox key={`settings_machine_${unit}`}>
                  <Typography mr={1} variant="h5">
                    ₩{unit}
                  </Typography>
                  <PayController>
                    <IconButton
                      onClick={() => handleChangeMachineBalance(unit)}
                    >
                      <MinusIcon />
                    </IconButton>
                    <Box>{tempSettings.balance[unit]}</Box>
                    <IconButton
                      onClick={() => handleChangeMachineBalance(unit, true)}
                    >
                      <PlusIcon />
                    </IconButton>
                  </PayController>
                </FlexBox>
              ))}
            </FlexBox>
          </SettingBox>
        </Box>
        <Box mt={3}>
          <Typography sx={style.subTitle}>User</Typography>
          <SettingBox>
            <Typography mb={1}>User Card Balance</Typography>
            <FlexBox>
              <Input
                type="number"
                inputProps={{ min: 0, max: 50000 }}
                defaultValue={tempUserSettings.cardBalance}
                onBlur={handleChangeCardBalance}
              />
            </FlexBox>
          </SettingBox>
          <SettingBox>
            <Typography>User Cash Balance</Typography>
            <FlexBox>
              {cashUnits.map((unit) => (
                <FlexBox key={`settings_user_${unit}`}>
                  <Typography mr={1} variant="h5">
                    ₩{unit}
                  </Typography>
                  <PayController>
                    <IconButton onClick={() => handleChangeUserBalance(unit)}>
                      <MinusIcon />
                    </IconButton>
                    <Box>{tempUserSettings.cashBalance[unit]}</Box>
                    <IconButton
                      onClick={() => handleChangeUserBalance(unit, true)}
                    >
                      <PlusIcon />
                    </IconButton>
                  </PayController>
                </FlexBox>
              ))}
            </FlexBox>
          </SettingBox>
        </Box>
      </Box>
    </DialogLayout>
  );
};

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

const SettingBox = styled(Box)({
  //   display: "flex",
  //   alignItems: "center",
  marginBottom: "10px",
  "& > .MuiTypography-root": {
    fontWeight: 600,
  },
});
const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  marginRight: "10px",
  "& > h5": {
    width: "60px",
    fontSize: "14px",
  },
});

const style = {
  subTitle: {
    fontWeight: 500,
    fontSize: "14px",
    margin: "6px 0",
    paddingBottom: "4px",
    marginBottom: "10px",
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

export default SettingsModal;
