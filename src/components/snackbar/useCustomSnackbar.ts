import { useSnackbar, type VariantType } from "notistack";
import Fade from "./Fade";
import {
  VendingMachineExeption,
  warningMessages,
} from "@/models/VendingMachineModel";

// 커스텀 훅 정의
export const useCustomSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();

  const showSnackbar = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, {
      variant: variant,
      TransitionComponent: Fade,
    });
  };

  const showWarning = (state: VendingMachineExeption) => {
    if (!warningMessages[state]) return;
    enqueueSnackbar(warningMessages[state], {
      variant: "warning",
      TransitionComponent: Fade,
    });
  };

  return { showSnackbar, showWarning };
};
