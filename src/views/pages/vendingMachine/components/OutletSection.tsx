import { Box, styled, Typography } from "@mui/material";

const OutletSection = () => {
  return (
    <Container>
      <Typography variant="h3">Outlet</Typography>
      <OutletFloor />
    </Container>
  );
};

const Container = styled(Box)({
  marginTop: "20px",
  height: "160px",
  background: "#fff",
  borderRadius: "20px",
  padding: "30px 30px 0 30px",
  "& > h3": {
    fontWeight: 600,
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
