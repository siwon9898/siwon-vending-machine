import { CashUnit } from "@/models/VendingMachineModel";
import DialogLayout from "../layouts/DialogLayout";
import {
  useVendingMachineAction,
  useVendingMachineStore,
} from "@/stores/VendingMachineStore";
import { Box, styled, Typography } from "@mui/material";

const ChangeInfoModal = () => {
  const { changeInfoModal } = useVendingMachineStore();
  const { setChangeInfoModal } = useVendingMachineAction();
  const cashUnits: CashUnit[] = [10000, 5000, 1000, 500, 100];
  return (
    <DialogLayout
      isOpen={changeInfoModal.isOpen}
      title="Change Detail"
      handleClose={() =>
        setChangeInfoModal({ ...changeInfoModal, isOpen: false })
      }
      handleConfirm={() =>
        setChangeInfoModal({ ...changeInfoModal, isOpen: false })
      }
      noAction
      sx={{ width: "260px" }}
    >
      <Container>
        <Box>
          {cashUnits.map((value) => (
            <InfoBox>
              <Typography>₩{value} :</Typography>
              <Typography variant="h5">
                {changeInfoModal.changes[value]}
              </Typography>
            </InfoBox>
          ))}
        </Box>
      </Container>
    </DialogLayout>
  );
};

const Container = styled(Box)({
  padding: "10px",
  display: "flex",
  justifyContent: "center",
});
const InfoBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
  "&> p": {
    textAlign: "right",
    width: "70px",
    fontSize: "16px",
  },
  "& > h5": {
    fontWeight: 500,
    fontSize: "16px",
  },
});

export default ChangeInfoModal;
