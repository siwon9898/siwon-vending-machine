import { useVendingMachineStore } from "@/stores/VendingMachineStore";
import { Box, styled, Typography } from "@mui/material";

const OutletSection = () => {
  const { machine } = useVendingMachineStore();
  return (
    <Container>
      <Typography variant="h3">Outlet</Typography>
      <Outlet>
        {machine.selectedDrink.map((drink, index) => (
          <Box
            component={"img"}
            src={drink.img}
            key={`${drink.drinkId}_${index}`}
          />
        ))}
      </Outlet>
      <OutletFloor />
    </Container>
  );
};

const Container = styled(Box)({
  marginTop: "20px",
  height: "160px",
  background: "#fff",
  borderRadius: "20px",
  padding: "10px 20px 0 20px",
  "& > h3": {
    fontWeight: 600,
  },
});

const Outlet = styled(Box)({
  position: "absolute",
  display: "flex",
  bottom: "30px",
  width: "calc(100% - 40px)",
  flexWrap: "wrap",
  left: "20px",
  "& > img": {
    width: "40px",
  },
});
const OutletFloor = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  background: theme.palette.grey[400],
  height: "30px",
  borderRadius: "0 0 20px 20px",
}));

export default OutletSection;
