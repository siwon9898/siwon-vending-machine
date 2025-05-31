import {
  Dialog,
  DialogActions,
  IconButton,
  Box,
  DialogContent,
  Typography,
  Button,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CSSObject } from "@emotion/react";

interface DialogLayoutProps {
  isOpen: boolean; //modal open 여부
  children: React.ReactElement; //하위 children
  handleClose: () => void; // modal close handler
  title?: string; //modal 제목
  handleConfirm?: () => void; // modal confirm(확인버튼) handler
  confirmTxt?: string; //confrim 버튼 text
  cancelTxt?: string; //cancel 버튼 text
  sx?: CSSObject; //style overrides
}

const DialogLayout = (props: DialogLayoutProps) => {
  return (
    <Dialog
      onClose={props.handleClose}
      open={props.isOpen}
      sx={styles.dialogArea}
    >
      <DialogBox sx={{ ...styles, ...(props.sx && props.sx) }}>
        <DialogTop>
          <DialogTitle variant="h4">{props.title}</DialogTitle>
          <IconButton aria-label="close" onClick={props.handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTop>
        <DialogContent>{props.children}</DialogContent>
        <DialogActions>
          <DialogButton onClick={props.handleClose}>
            {props.cancelTxt ?? "Cancel"}
          </DialogButton>
          <DialogButton isprimary onClick={props.handleConfirm}>
            {props.confirmTxt ?? "Confirm"}
          </DialogButton>
        </DialogActions>
      </DialogBox>
    </Dialog>
  );
};

export default DialogLayout;

const DialogBox = styled(Box)({
  padding: "14px 30px 30px 30px",
});

const DialogTop = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "10px",
});

const DialogTitle = styled(Typography)({
  fontSize: "18px",
  fontWeight: 600,
});
const styles = {
  "& > div:last-of-type": {
    padding: "0px",
  },
  "& > div:last-of-type > div": {
    flex: "1",
  },
  "& > div:last-of-type > div > button:last-of-type": {
    marginLeft: "6px",
  },
  dialogArea: {
    "& ~ .MuiDialog-root": {
      ".MuiDialog-container": { left: "20px", top: "20px" },
      "& ~ .MuiDialog-root": {
        ".MuiDialog-container": { left: "40px", top: "40px" },
      },
    },
  },
};

const DialogButton = styled(Button)<{ isprimary?: boolean }>(
  ({ theme, isprimary }) => ({
    width: "80px",
    background: isprimary
      ? `${theme.palette.primary.main}`
      : theme.palette.grey[300],
    textTransform: "none",
    color: isprimary ? "#fff" : theme.palette.grey[800],
    height: "30px",
    fontWeight: 600,
  })
);
