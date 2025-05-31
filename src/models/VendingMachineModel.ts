export interface Drink {
  drinkId: number;
  name: string;
  price: number;
  img: string;
  stock: number;
}

export interface Machine {
  drinks: Drink[];
  selectedDrink: Drink | null;
  balance: Money;
  payMethod: PayMethod;
  insertedMoney: Money;
  state: VendingMachineState | VendingMachineExeption;
}

export type CashUnit = 100 | 500 | 1000 | 5000 | 10000;

export type Money = Record<CashUnit, number>;

export type PayMethod = "CASH" | "CARD" | undefined;

export enum VendingMachineState {
  initial = "INIT", //초기 상태
  paid = "PAID", //돈 투입 완료
  drinkSelected = "DRINK_SELECTED", //음료 선택 완료
  changeReturned = "CHANGE_RETURNED", //잔돈 반환 완료
  Success = "SUCCESS", //음료 정상 수령 완료
}

export enum VendingMachineExeption {
  OutofStock = "OUT_OF_STOCK", // 예외 : 음료 품절
  InsufficientCash = "INSUFFICIENT_CASH", //예외 : 현금 결제 잔액 부족 (사용자)
  InsufficientBalance = "INSUFFICIENT_BALANCE", //예외 : 카드 결제 잔액 부족 (사용자)
  InsufficientChange = "INSUFFICIENT_CHANGE", //예외 : 거스름돈 부족 (자판기)
  timeout = "TIME_OUT", //예외 : 결제 후 10초이상 음료를 고르지 않은 경우
  unpaid = "UNPAID", //예외 : 먼저 결제하지 않고 음료를 선택한 경우
}

export const warningMessages: Record<VendingMachineExeption, string> = {
  [VendingMachineExeption.OutofStock]: "This drink is currently out of stock.",
  [VendingMachineExeption.InsufficientCash]:
    "Inserted cash is not enough to complete the purchase. Please insert more.",
  [VendingMachineExeption.InsufficientBalance]:
    "You do not have enough balance to purchase this drink.",
  [VendingMachineExeption.InsufficientChange]:
    "Unable to provide change. Please use exact amount or try another drink.",
  [VendingMachineExeption.timeout]: "Session timed out. Please start again.",
  [VendingMachineExeption.unpaid]:
    "Please insert money before selecting a drink.",
};

export interface User {
  cashBalance: Money; //사용자 현금 잔액
  cardBalance: number; //사용자 카드 잔액
}
