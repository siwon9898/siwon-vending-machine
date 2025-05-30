import DrinkButton from "@/components/buttons/DrinkButton";
import { Drink } from "@/models/VendingMachineModel";
import { Box, styled, Typography } from "@mui/material";
import CokeImg from "@images/img-coke.png";
import WaterImg from "@images/img-water.png";
import CoffeeImg from "@images/img-coffee.png";

const DrinkSection = () => {
  const drinks: Drink[] = [
    {
      drinkId: 0,
      name: "Coke",
      price: 1100,
      img: CokeImg,
    },
    {
      drinkId: 1,
      name: "Water",
      price: 600,
      img: WaterImg,
    },
    {
      drinkId: 2,
      name: "Coffee",
      price: 700,
      img: CoffeeImg,
    },
  ];

  return (
    <Container>
      <Typography variant="h3">Select Drink</Typography>
      <Box>
        {drinks.map((item) => (
          <DrinkButton drinkInfo={item} key={item.drinkId} />
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
  "& > .MuiBox-root": {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
}));

export default DrinkSection;
