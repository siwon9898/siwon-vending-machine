import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import "./App.css";
import { defaultTheme } from "./theme/theme";
import Fade from "./components/snackbar/Fade";
import CustomSnackbar from "./components/snackbar/CustomSnackbar";
import { Route, Routes } from "react-router-dom";
import CommonLayout from "./views/layouts/CommonLayout";
import VendingMachiine from "./views/pages/vendingMachine/VendingMachine";
import VendingMachine from "./views/pages/vendingMachine/VendingMachine";
import Diagram from "./views/pages/diagram/Diagram";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SnackbarProvider
        maxSnack={3}
        TransitionComponent={Fade}
        Components={{ default: CustomSnackbar, warning: CustomSnackbar }}
        autoHideDuration={1500}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <CssBaseline />
        <Routes>
          <Route element={<CommonLayout />}>
            <Route index element={<VendingMachine />} />
            <Route path="/diagram" element={<Diagram />} />
          </Route>
        </Routes>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
