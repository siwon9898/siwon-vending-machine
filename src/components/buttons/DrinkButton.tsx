import { Box, ButtonBase, styled, Typography } from "@mui/material";
import {
  Drink,
  VendingMachineExeption,
  VendingMachineState,
} from "@/models/VendingMachineModel";
import {
  useVendingMachineAction,
  useVendingMachineStore,
} from "@/stores/VendingMachineStore";
import { useCustomSnackbar } from "../snackbar/useCustomSnackbar";
import { getChanges, getTotalCash, sumCash } from "@/utils/CashCalculator";

interface DrinkButtonProps {
  drinkInfo: Drink;
  isactive: boolean;
}

const DrinkButton = (props: DrinkButtonProps) => {
  const { showWarning } = useCustomSnackbar();
  const { machine, user } = useVendingMachineStore();
  const { setMachine } = useVendingMachineAction();

  const checkException = (drink: Drink) => {
    const insertedCashTotal = getTotalCash(machine.insertedMoney);
    //품절인 경우
    if (drink.stock === 0) {
      showWarning(VendingMachineExeption.OutofStock);
      return false;
    }
    //결제하지 않고 선택한 경우
    if (machine.state === VendingMachineState.initial) {
      showWarning(VendingMachineExeption.unpaid);
      return false;
    }

    //카드결제 case
    if (machine.payMethod === "CARD") {
      //잔액이 부족한경우
      if (machine.payMethod === "CARD" && user.cardBalance < drink.price) {
        showWarning(VendingMachineExeption.InsufficientBalance);
        return false;
      }
    }
    //현금결제 case
    if (machine.payMethod === "CASH") {
      //투입금액이 부족한경우
      if (insertedCashTotal < drink.price) {
        showWarning(VendingMachineExeption.InsufficientCash);
        return false;
      }
      //잔돈 반환이 불가능한 경우
      if (
        !getChanges(
          insertedCashTotal - drink.price,
          sumCash(machine.balance, machine.insertedMoney)
        )
      ) {
        showWarning(VendingMachineExeption.InsufficientBalance);
        return false;
      }
    }
  };

  const handleSelectDrink = (drink: Drink) => {
    if (checkException(drink)) {
      setMachine({
        ...machine,
        selectedDrink: drink,
        state: VendingMachineState.drinkSelected,
        balance:
          machine.payMethod === "CASH"
            ? sumCash(machine.balance, machine.insertedMoney)
            : machine.balance,
      });
    }
  };

  return (
    <Container>
      <Box>
        <Box component={"img"} src={props.drinkInfo.img} />
        <DrinkLabel>
          <Box>
            <Typography variant="h4">{props.drinkInfo.name}</Typography>
            {/* 품절 badge */}
            {props.drinkInfo.stock === 0 && (
              <SoldOutBadge>sold out</SoldOutBadge>
            )}
          </Box>
          <Typography>₩{props.drinkInfo.price.toLocaleString()}</Typography>
        </DrinkLabel>
      </Box>
      <SelectButton
        isactive={props.isactive}
        onClick={() => handleSelectDrink(props.drinkInfo)}
      >
        {props.drinkInfo.stock > 0 ? "select" : "sold out"}
      </SelectButton>
    </Container>
  );
};

const Container = styled(Box)<{ isactive?: boolean }>(({ isactive }) => ({
  background: "#fff",
  borderRadius: "20px",
  width: "100%",
  padding: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& img": {
    width: "60px",
  },
  "& > .MuiBox-root": {
    display: "flex",
    alignItems: "center",
  },
}));

const DrinkLabel = styled(Box)({
  "& > .MuiBox-root": {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  "& h4": {
    fontWeight: 600,
  },
});

const SelectButton = styled(ButtonBase)<{ isactive: boolean }>(
  ({ theme, isactive }) => ({
    width: "100px",
    background: isactive ? theme.palette.info.main : theme.palette.grey[300],
    "&:hover": {
      background: isactive ? theme.palette.info.main : theme.palette.grey[300],
    },
  })
);

const SoldOutBadge = styled(Box)(({ theme }) => ({
  background: theme.palette.warning.main,
  borderRadius: "4px",
  textAlign: "center",
  fontSize: "10px",
  padding: "4px 10px",
  lineHeight: 1,
  fontWeight: 600,
  whiteSpace: "nowrap",
}));

export default DrinkButton;
