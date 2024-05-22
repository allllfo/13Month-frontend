import { MAX_LOAN_AMOUNT } from "~/constants/Preview";

export const determineMonthResult = (salary, monthlyPay) => {
  let result; // result 변수를 선언합니다.

  if (salary > 55000000 && salary <= 70000000) {
    result = monthlyPay * 10000 * 12 * 0.17;
    if (result > 7500000) {
      result = 7500000;
    }
  } else {
    result = monthlyPay * 10000 * 12 * 0.15;
  }

  return result;
};

export const getHouseDeduction = (promiseAmount, loanAmount, salary) => {
  if (salary <= 70000000) {
    const result = Math.min(promiseAmount + loanAmount, MAX_LOAN_AMOUNT);
    return {
      housingDepositResult: promiseAmount,
      loanResult: Math.min(loanAmount, MAX_LOAN_AMOUNT),
      houseTotalResult: result,
    };
  } else {
    const result = Math.min(loanAmount, MAX_LOAN_AMOUNT);
    return {
      loanResult: Math.min(loanAmount, MAX_LOAN_AMOUNT),
      houseTotalResult: result,
    };
  }
};
