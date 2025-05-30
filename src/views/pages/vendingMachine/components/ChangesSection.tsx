import { Box, styled, Typography } from "@mui/material";

const ChangesSection = () => {
  return (
    <Container>
      <Typography variant="h3">Changes</Typography>
      <Box>
        <PayStatus>
          <Typography>Price</Typography>
          <Box>-</Box>
        </PayStatus>
        <PayStatus>
          <Typography>Inserted</Typography>
          <Box>-</Box>
        </PayStatus>
        <PayStatus isprimary>
          <Typography>Changes</Typography>
          <Box>-</Box>
        </PayStatus>
      </Box>
    </Container>
  );
};

const Container = styled(Box)({
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
});

const PayStatus = styled(Box)<{ isprimary?: boolean }>(
  ({ theme, isprimary }) => ({
    "& > .MuiTypography-root": {
      fontSize: "14px",
      marginBottom: "4px",
    },
    "& > .MuiBox-root": {
      border: `1px solid ${theme.palette.grey[isprimary ? 800 : 300]}`,
      padding: "8px",
      borderRadius: "4px",
      textAlign: "center",
    },
  })
);

export default ChangesSection;
