import { forwardRef } from 'react';
import styled from '@emotion/styled';
import { SnackbarContent, CustomContentProps } from 'notistack';
import { Typography } from '@mui/material';
import { decodeHTML } from '../../utils/StringUtils';

const AlertIconSvg = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        id="Union"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10ZM20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM9.44704 12.4407C9.45547 12.7388 9.69952 12.976 9.99769 12.976C10.2959 12.976 10.5399 12.7388 10.5483 12.4407L10.7372 5.768L10.7654 4.79017C10.7779 4.35751 10.4305 4 9.99769 4C9.56484 4 9.2175 4.35751 9.22998 4.79017L9.25819 5.768L9.44704 12.4407ZM8.86719 15.781C8.86719 16.478 9.37719 16.954 9.98919 16.954C10.6182 16.954 11.1112 16.478 11.1112 15.781C11.1112 15.067 10.6182 14.574 9.98919 14.574C9.37719 14.574 8.86719 15.067 8.86719 15.781Z"
        fill="black"
      />
    </svg>
  );
};

const StyledSnackbar = styled(SnackbarContent)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(255, 255, 255, 0.80)',
  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
  backdropFilter: 'blur(10px)',
  borderRadius: '8px',
  padding: '30px',
  minWidth: '400px',
  '& > svg': {
    marginRight: '10px',
  },
  opacity: '0', // FadeSnackBar
});

const CustomSnackbar = forwardRef<HTMLDivElement, CustomContentProps>(({ ...props }, ref) => {
  return (
    <StyledSnackbar ref={ref}>
      {props.variant === 'warning' && <AlertIconSvg />}
      <Typography variant="h5" fontWeight="500" sx={{ whiteSpace: 'pre-line', textAlign: 'center' }}>
        {props.message}
      </Typography>
    </StyledSnackbar>
  );
});

export default CustomSnackbar;
