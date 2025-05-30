export interface Drink {
  drinkId: number;
  name: string;
  price: number;
  img: string;
  stock: number;
}

export interface Machine {
  drinks: Drink[];
  selectedDrink: number | null;
  balance: MachineBalance;
  insertedMoney: number;
  state: VendingMachineState;
}

export type MachineBalance = {
  100: number;
  500: number;
  1000: number;
  5000: number;
  10000: number;
};

export enum VendingMachineState {
  Success = "SUCCESS",
  OutofStock = "OUT_OF_STOCK", //음료 품절
  InsufficientMoney = "INSUFFICIENT_MONEY", //결제 잔액 부족 (사용자)
  InsufficientChange = "INSUFFICIENT_CHANGE", //거스름돈 부족 (자판기)
}
