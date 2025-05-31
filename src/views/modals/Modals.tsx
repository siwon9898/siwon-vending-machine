import { useVendingMachineStore } from "@/stores/VendingMachineStore";
import WalletModal from "./WalletModal";
import PayInfoModal from "./ChangeInfoModal";

const Modals = () => {
  const { isWalletOpen, changeInfoModal } = useVendingMachineStore();
  return (
    <>
      {isWalletOpen && <WalletModal />}
      {changeInfoModal.isOpen && <PayInfoModal />}
    </>
  );
};

export default Modals;
