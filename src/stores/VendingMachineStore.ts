import {
  Machine,
  User,
  VendingMachineState,
} from "@/models/VendingMachineModel";
import CokeImg from "@images/img-coke.png";
import WaterImg from "@images/img-water.png";
import CoffeeImg from "@images/img-coffee.png";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface VendingMachineStore {
  machine: Machine;
  user: User;
  isWalletOpen: boolean;
  actions: {
    setMachine: (machine: Machine) => void;
    setUser: (user: User) => void;
    setIsWalletOpen: (isOpen: boolean) => void;
  };
}
export const initMoney = {
  100: 0,
  500: 0,
  1000: 0,
  5000: 0,
  10000: 0,
};
export const initMachine: Machine = {
  drinks: [
    {
      drinkId: 0,
      name: "Coke",
      price: 1100,
      img: CokeImg,
      stock: 0,
    },
    {
      drinkId: 1,
      name: "Water",
      price: 600,
      img: WaterImg,
      stock: 4,
    },
    {
      drinkId: 2,
      name: "Coffee",
      price: 700,
      img: CoffeeImg,
      stock: 5,
    },
  ],
  selectedDrink: [],
  balance: {
    100: 20,
    500: 10,
    1000: 5,
    5000: 3,
    10000: 1,
  },
  payMethod: undefined,
  insertedMoney: initMoney,
  state: VendingMachineState.initial,
};

export const initUser: User = {
  cashBalance: {
    100: 5,
    500: 5,
    1000: 5,
    5000: 5,
    10000: 5,
  },
  cardBalance: 10000,
};

export const useVendingMachineStore = create<VendingMachineStore>()(
  immer((set) => ({
    machine: initMachine,
    user: initUser,
    isWalletOpen: false,
    actions: {
      setMachine: (machine: Machine) => {
        set((state) => {
          state.machine = machine;
        });
      },
      setUser: (user: User) => {
        set((state) => {
          state.user = user;
        });
      },
      setIsWalletOpen: (isOpen: boolean) => {
        set((state) => {
          state.isWalletOpen = isOpen;
        });
      },
    },
  }))
);

export const useVendingMachineAction = () =>
  useVendingMachineStore((state) => state.actions);
