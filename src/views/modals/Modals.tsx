import { useVendingMachineStore } from "@/stores/VendingMachineStore";
import React from "react";
import WalletModal from "./WalletModal";

const Modals = () => {
  const { isWalletOpen } = useVendingMachineStore();
  return <>{isWalletOpen && <WalletModal />}</>;
};

export default Modals;
