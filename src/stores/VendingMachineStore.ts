import { Machine, VendingMachineState } from "@/models/VendingMachineModel";
import CokeImg from "@images/img-coke.png";
import WaterImg from "@images/img-water.png";
import CoffeeImg from "@images/img-coffee.png";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface VendingMachineStore {
  machine: Machine;
  actions: {
    setMachine: (machine: Machine) => void;
  };
}

export const initMachine: Machine = {
  drinks: [
    {
      drinkId: 0,
      name: "Coke",
      price: 1100,
      img: CokeImg,
      stock: 3,
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
  selectedDrink: null,
  balance: {
    100: 20,
    500: 10,
    1000: 5,
    5000: 3,
    10000: 1,
  },
  insertedMoney: 0,
  state: VendingMachineState.Success,
};

export const useVendingMachineStore = create<VendingMachineStore>()(
  immer((set) => ({
    machine: initMachine,
    actions: {
      setMachine: (machine: Machine) => {
        set((state) => {
          state.machine = machine;
        });
      },
    },
  }))
);

export const useVendingMachineAction = () =>
  useVendingMachineStore((state) => state.actions);
