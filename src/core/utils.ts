import { updateCalculatorState } from "./models";
import store from "./store";

export const sendRequest = (
  money: number,
  months: number,
  interestRate: number
) => {
  const interest = money * interestRate;
  const totalAmount = money + interest;
  const monthlyPayment = totalAmount / months;
  // Simulated lag to show spinner
  setTimeout(() => {
    const roundedMonthlyPayment =
      Math.round(Number(monthlyPayment) * 100) / 100;
    const roundedTotalAmount = Math.round(Number(totalAmount) * 100) / 100;
    store.dispatch(
      updateCalculatorState({
        monthlyPayment: roundedMonthlyPayment as number,
        totalAmount: roundedTotalAmount as number,
      })
    );
  }, 500);
};
