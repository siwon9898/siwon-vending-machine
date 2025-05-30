import { Box, Button, ButtonBase, styled, Typography } from "@mui/material";
import { Drink, VendingMachineExeption } from "@/models/VendingMachineModel";
import {
  useVendingMachineAction,
  useVendingMachineStore,
} from "@/stores/VendingMachineStore";
import { useCustomSnackbar } from "../snackbar/useCustomSnackbar";

interface DrinkButtonProps {
  drinkInfo: Drink;
  isactive: boolean;
}

const DrinkButton = (props: DrinkButtonProps) => {
  const { showWarning } = useCustomSnackbar();
  const { machine } = useVendingMachineStore();
  const { setMachine } = useVendingMachineAction();

  const handleSelectDrink = (drinkId: number, isSoldOut?: boolean) => {
    //품절인 경우
    if (isSoldOut) {
      showWarning(VendingMachineExeption.OutofStock);
      return;
    }
    if (machine.insertedMoney === 0) {
      showWarning(VendingMachineExeption.unpaid);
      return;
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
        isactive={props.isactive && props.drinkInfo.stock > 0}
        onClick={() =>
          handleSelectDrink(
            props.drinkInfo.drinkId,
            props.drinkInfo.stock === 0
          )
        }
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
