import { createTheme, PaletteOptions } from "@mui/material";
import type {} from "@mui/lab/themeAugmentation";

declare module "@mui/material/styles" {}

const palette: PaletteOptions = {
  primary: {
    light: "#F1F5FA",
    main: "#313B49",
    dark: "#1F2633",
  },
  error: {
    light: "#F6EFE9",
    main: "#FF4545",
    dark: "#F44007",
  },
  info: {
    light: "#E9F4FF",
    main: "#AFEBDD",
    dark: "#0E489F",
  },
  success: {
    light: "#DCF3F2",
    main: "#1EBFC7",
    dark: "#116E72",
  },
  warning: {
    light: "#FFF5E1",
    main: "#FCC4C4",
    dark: "#C58E00",
  },
  secondary: {
    main: "#E4F0F6",
    dark: "",
  },
  background: {
    default: "#FFFFFF",
  },
  grey: {
    50: "#F6F7FB",
    100: "#E7EAF1",
    200: "#E0E4EB",
    300: "#DCE1E6",
    400: "#9D9D9D",
    500: "#6A7380",
    600: "#313B49",
    700: "#1F2633",
  },
  text: {
    primary: "#212121",
    disabled: "#808080",
  },
};

const components = {
  MuiCssBaseline: {
    styleOverrides: {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        scrollbarWidth: "thin",
        scrollbarColor: "#bbb #eee",
      },
      html: {
        fontFamily: "Pretendard",
        lineHeight: "140%",
        fontSize: "14px", // scrollbarGutter: 'stable',
      },
      body: {
        fontFamily: "Pretendard",
        lineHeight: "140%",
        fontSize: "14px",
        padding: "0px",
        margin: "0px",
        boxSizing: "border-box",
        overflow: "auto",
        minWidth: 1280,
        wordBreak: "keep-all",
        wordWrap: "break-word",
        overflowWrap: "break-word",
      },
      div: {
        position: "relative",
      },
      button: {
        border: "none",
        outline: "none",
        background: "none",
        cursor: "pointer",
        fontFamily: "Pretendard",
      },
      input: {
        fontFamily: "Pretendard",
        "&::placeholder": {
          fontSize: "14px",
        },
      },
      a: {
        textDecoration: "none",
        color: (palette.primary as { main: string })?.main, // 2024-04-25 추가
      },
      "::-webkit-scrollbar": {
        width: "6px",
        height: "6px",
        backgroundColor: "#eee",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "#999",
        height: "50px",
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        minWidth: "0px",
        TextTransform: "none",
        padding: "0px",
        margin: "0px",
        height: "20px",
        "&:disabled": {
          background: "#555",
          opacity: 0.3,
          color: "#fff",
        },
        "&:focus": {
          outline: "none",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: "400",
        color: "#000",
        lineHeight: "normal",
      },
    },
  },
  MuiButtonBase: {
    styleOverrides: {
      root: {
        minWidth: "0px",
        TextTransform: "none",
        padding: "0px",
        margin: "0px",
        height: "36px",
        "&:disabled": {
          background: "#555",
          opacity: 0.3,
          color: "#fff",
        },
        "&:focus": {
          outline: "none",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: "500",
        color: "#000",
        lineHeight: "normal",
      },
    },
  },

  MuiDivider: {
    styleOverrides: {
      root: {
        margin: "0px",
        padding: "0px",
        borderColor: "none",
        border: "none",
        background: "#eeeeee",
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        background: "#fff",
        padding: "0px",
        borderRadius: "8px",
        border: "1px solid #ddd",
        boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.10)",
        maxWidth: "none",
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        padding: "0px",
        margin: "0px",
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      root: {
        "&::before": {
          display: "none",
        },
        "&::after": {
          display: "none",
        },
        "& input::placeholder": {
          opacity: 1,
          color: "#777",
        },
        width: "100%",
        height: "44px",
        background: "#fff",
        border: `1px solid ${palette.grey?.[300]}`,
        borderRadius: "4px",
        fontSize: "16px",
        fontWeight: "400",
        color: "#000",
        paddingLeft: "18px",
        paddingRight: "40px",
        "&.Mui-focused": {
          borderColor: palette.grey?.[600],
        },
        "&.Mui-disabled": {
          backgroundColor: "#F6F6F6",
          color: palette.grey?.[500],
          "MuiInputAdornment-root": {
            pointerEvents: "none",
            filter: "grayscale(100%)",
            opacity: "0.5",
          },
        },
        "&.MuiInputBase-sizeSmall": {
          height: "38px",
          ".MuiInputBase-input": {
            padding: 0,
          },
        },
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        padding: "0px",
        margin: "0px",
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        padding: "0px",
        margin: "0px",
        minHeight: "0px",
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        padding: "0px",
        margin: "0px",
        listStyle: "none",
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        padding: "0px",
        margin: "0px",
        maxWidth: "none",
      }, // S: 2024-04-19 추가
      root: {
        "& ~ &": {
          ".MuiBackdrop-root": { display: "none" },
        },
      }, // E: 2024-04-19 추가
    },
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        margin: "0px",
        padding: "0px",
        fontWeight: "400",
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: "0px",
        margin: "0px",
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        padding: "0px",
        margin: "0px",
        svg: {
          fontSize: 25,
        },
        "&:hover": {
          backgroundColor: "transparent",
          ".MuiSvgIcon-root:first-of-type": {
            fill: (palette.primary as { main: string })?.main,
          },
        }, // "&:not(.Mui-checked)": { //   svg: { //     fill: palette.grey?.[400], //   }, // },
        "&.Mui-disabled": {
          opacity: 0.4,
        },
      },
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: {
        padding: 0,
        borderRadius: 50,
        "&.MuiSwitch-sizeMedium": {
          width: 60,
          height: 36,
          ".MuiSwitch-thumb": {
            width: 30,
            height: 30,
          },
          ".MuiSwitch-switchBase": {
            padding: "3px",
            "&.Mui-checked": {
              transform: "translateX(24px)",
            },
          },
        },
        "&.MuiSwitch-sizeSmall": {
          width: 46,
          height: 26,
          ".MuiSwitch-thumb": {
            width: 22,
            height: 22,
          },
        },
        ".MuiSwitch-switchBase": {
          padding: "2px",
          "&.Mui-checked": {
            transform: "translateX(20px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
              border: `1px solid ${
                (palette.primary as { main: string })?.main
              }`,
              backgroundColor: (palette.primary as { main: string })?.main,
              opacity: 1,
            },
          },
        },
        ".MuiSwitch-thumb": {
          backgroundColor: "#bbb",
          boxShadow: "none",
        },
        ".Mui-checked": {
          ".MuiSwitch-thumb": {
            backgroundColor: "#fff",
          },
        },
        ".MuiSwitch-track": {
          border: `1px solid #ddd`,
          backgroundColor: "#ddd",
          borderRadius: 50,
          opacity: 1,
        },
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        "&:hover": {
          "&:not(.Mui-disabled)": {
            ".MuiRadio-root": {
              ".MuiSvgIcon-root:first-of-type": {
                fill: (palette.primary as { main: string })?.main,
              },
            },
          },
        },
      },
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        padding: 0,
        svg: {
          fontSize: 25,
        },
        "&:hover": {
          backgroundColor: "transparent",
          ".MuiSvgIcon-root:first-of-type": {
            fill: (palette.primary as { main: string })?.main,
          },
        },
        "&:not(.Mui-checked)": {
          svg: {
            fill: palette.grey?.[400],
          },
        },
        "&.Mui-disabled": {
          background: "#",
        },
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        boxShadow: "none",
        ".MuiAccordionSummary-root": {
          minHeight: "auto",
          "& .Mui-expanded": {
            margin: "0 !important",
            minHeight: "auto", // padding :
          },
        },
        ".MuiAccordionSummary-content": {
          margin: 0,
          "&.Mui-expanded": {
            // margin: "12px 0",
          },
        },
        "&.Mui-expanded": {
          margin: 0,
        },
      },
    },
  },
  MuiPopover: {
    styleOverrides: {
      root: {
        ".MuiPaper-root": {
          boxShadow: "0px 7px 28px 0px rgba(0, 0, 0, 0.12)",
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        ".MuiInputBase-multiline": {
          padding: "10px",
          "&.Mui-focused": {
            ".MuiOutlinedInput-notchedOutline": {
              borderWidth: "1px",
              borderColor: palette.grey?.[600],
            },
          },
        },

        textarea: {
          fontFamily: "Pretendard",
          "&::placeholder": {
            fontSize: "14px",
            opacity: 1,
            color: "#777",
          },
        },
      },
    },
  },
  MuiPickersDay: {
    styleOverrides: {
      root: {
        fontSize: "14px",
      },
    },
  },
  MuiPickersCalenderHeader: {
    styleOverrides: {
      root: {
        background: palette.grey?.[200],
      },
    },
  },
};

const typography = {
  fontFamily: "Pretendard", // NOTE: node_modules 내 d.ts 를 수정해야하므로 사용 불가 // test123: { //   fontSize: '80px', //   lineHeight: '130%', // },
  h1: {
    fontSize: "36px",
    lineHeight: "130%",
  },
  h2: {
    fontSize: "30px",
    lineHeight: "130%",
  },
  h3: {
    fontSize: "24px",
    lineHeight: "130%",
  },
  h4: {
    fontSize: "20px",
    lineHeight: "130%",
  }, // BODY XL
  h5: {
    fontSize: "18px",
    lineHeight: "130%",
  },
  h6: {
    fontSize: "16px",
    lineHeight: "130%",
  },
  body1: {
    fontSize: "14px",
    lineHeight: "130%",
  },
  body2: {
    fontSize: "12px",
    lineHeight: "130%",
  },
  subtitle1: {
    fontSize: "10px",
    lineHeight: "130%",
  },
};

export const defaultTheme = createTheme({ palette, typography, components });
