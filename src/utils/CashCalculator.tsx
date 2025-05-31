import { CashUnit, Money } from "@/models/VendingMachineModel";

//거스름돈 반환 함수
//return value : 거스름돈 반환 가능하면 Money(금액권별 거스름돈 구성), 불가능하면 false
export function getChanges(
  change: number,
  machineBalance: Money
): Money | false {
  const changeUnits: CashUnit[] = [10000, 5000, 1000, 500, 100];
  let remaining = change;
  const result: Money = {
    100: 0,
    500: 0,
    1000: 0,
    5000: 0,
    10000: 0,
  };

  const balanceCopy = { ...machineBalance };

  for (const unit of changeUnits) {
    const needed = Math.floor(remaining / unit);
    const available = balanceCopy[unit];

    const use = Math.min(needed, available);
    if (use > 0) {
      result[unit] = use;
      balanceCopy[unit] -= use;
      remaining -= unit * use;
    }
  }

  return remaining === 0 ? result : false;
}

//금액권별로 현금 수량을 더하는 함수
//return value : Money
export function sumCash(a: Money, b: Money): Money {
  const units: CashUnit[] = [100, 500, 1000, 5000, 10000];
  const result: Money = {
    100: 0,
    500: 0,
    1000: 0,
    5000: 0,
    10000: 0,
  };

  for (const unit of units) {
    result[unit] = (a[unit] || 0) + (b[unit] || 0);
  }

  return result;
}
//금액권별로 현금 수량을 빼는 함수
//return value : Money
export function subtractCash(a: Money, b: Money): Money {
  const units: CashUnit[] = [100, 500, 1000, 5000, 10000];
  const result: Money = {
    100: 0,
    500: 0,
    1000: 0,
    5000: 0,
    10000: 0,
  };

  for (const unit of units) {
    result[unit] = (a[unit] || 0) - (b[unit] || 0);
  }

  return result;
}

//가지고있는 현금을 계산하는 함수
//return value : number
export function getTotalCash(money: Money): number {
  const units: CashUnit[] = [100, 500, 1000, 5000, 10000];
  return units.reduce((sum, unit) => sum + unit * money[unit], 0);
}
