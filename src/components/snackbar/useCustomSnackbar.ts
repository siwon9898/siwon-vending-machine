import { useSnackbar, type VariantType } from 'notistack';
import Fade from './Fade';

// 커스텀 훅 정의
export const useCustomSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();

  const showSnackbar = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, {
      variant: variant,
      TransitionComponent: Fade,
    });
  };

  return { showSnackbar };
};
