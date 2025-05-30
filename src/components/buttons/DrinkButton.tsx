import { Box, Button, ButtonBase, styled, Typography } from "@mui/material";
import { Drink } from "@/models/VendingMachineModel";

interface DrinkButtonProps {
  drinkInfo: Drink;
}
const DrinkButton = (props: DrinkButtonProps) => {
  return (
    <Container>
      <Box>
        <Box component={"img"} src={props.drinkInfo.img} />
        <Box>
          <Typography variant="h4">{props.drinkInfo.name}</Typography>
          <Typography>₩{props.drinkInfo.price.toLocaleString()}</Typography>
        </Box>
      </Box>
      <SelectButton>select</SelectButton>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => ({
  background: "#fff",
  borderRadius: "20px",
  width: "100%",
  padding: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& > div": {
    display: "flex",
    alignItems: "center",
    "& > img": {
      width: "60px",
    },
    "& h4": {
      fontWeight: 600,
    },
  },
}));

const SelectButton = styled(ButtonBase)(({ theme }) => ({
  width: "100px",
  background: theme.palette.info.main,
  "&:hover": {
    background: theme.palette.info.main,
  },
}));

export default DrinkButton;
