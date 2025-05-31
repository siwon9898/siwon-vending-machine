import DrinkButton from "@/components/buttons/DrinkButton";
import { Drink, VendingMachineState } from "@/models/VendingMachineModel";
import { useVendingMachineStore } from "@/stores/VendingMachineStore";
import { getTotalCash } from "@/utils/\bCashCalculator";
import { Box, styled, Typography } from "@mui/material";

const DrinkSection = () => {
  const { machine } = useVendingMachineStore();

  const checkIsAvailable = (drink: Drink) => {
    if (drink.stock === 0) return false;
    if (machine.payMethod === "CARD") return true;
    if (getTotalCash(machine.insertedMoney) >= drink.price) return true;
    else return false;
  };
  return (
    <Container>
      <Typography variant="h3">Select Drink</Typography>
      <Box>
        {machine.drinks.map((item) => (
          <DrinkButton
            drinkInfo={item}
            key={item.drinkId}
            isactive={checkIsAvailable(item)}
          />
        ))}
      </Box>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => ({
  width: "50%",
  background: theme.palette.primary.light,
  padding: "30px",
  borderRadius: "20px",
  height: "500px",
  "& > h3": {
    fontWeight: 600,
  },
  "& > .MuiBox-root": {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
}));

export default DrinkSection;
