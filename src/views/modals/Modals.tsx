import { useVendingMachineStore } from "@/stores/VendingMachineStore";
import WalletModal from "./WalletModal";
import PayInfoModal from "./ChangeInfoModal";
import SettingsModal from "./SettingsModal";

const Modals = () => {
  const { isWalletOpen, changeInfoModal, isSettingsOpen } =
    useVendingMachineStore();
  return (
    <>
      {isWalletOpen && <WalletModal />}
      {changeInfoModal.isOpen && <PayInfoModal />}
      {isSettingsOpen && <SettingsModal />}
    </>
  );
};

export default Modals;
