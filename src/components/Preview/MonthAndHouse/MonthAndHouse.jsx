import React, { useState, useEffect } from "react";
import { Accordion } from "flowbite-react";
import houseImg from "~/assets/images/preview/house.png";
import HouseProgressBar from "./HouseProgressBar";
import { useSelector } from "react-redux";
import {
  LOAN_PERCENTAGE,
  MAX_HOUSING_DEPOSIT,
  MAX_LOAN_AMOUNT,
} from "~/constants/Preview/index";
import { determineMonthResult, getHouseDeduction } from "~/utils/preview";
import MonthAndHouseCard from "./MonthAndHouseCard";

const MonthAndHouse = ({ updateTotal, myData }) => {
  const [userCheck, setUserCheck] = useState({
    checkLoan: false, // 대출 보유 여부
    checkMonthly: false, // 월세 체크
    checkYearly: false, // 전세 체크
  });
  const [result, setResult] = useState({
    monthResult: 0, //월세 공제 금액
    housingDepositResult: 0, //청약 공제 금액
    loanResult: 0, // 전세 공제 금액
    houseTotalResult: 0, // 주택 관련 총 공제 금액
  });
  const [monthlyPay, setMonthlyPay] = useState(0); //월세 금액
  const [loan, setLoan] = useState(0); //대출
  const [housingDeposit, setHousingDeposit] = useState(0); // 저축연금
  const yearTax = useSelector((state) => state.yearTax);

  //월세 및 전세금 있는 지 여부 체크 버튼 핸들링
  const handleCheckLoanChange = (checkLoan) => {
    if (checkLoan) {
      setUserCheck((prev) => ({
        ...prev,
        checkLoan: false,
      }));
      setResult((prev) => ({
        ...prev,
        monthResult: 0,
        houseTotalResult: 0,
      }));
      updateTotal({
        house: 0,
        momth: 0,
      });
    } else {
      setUserCheck((prev) => ({
        ...prev,
        checkLoan: true,
      }));
    }
  };

  //월세,전세 두개중 하나 체크 버튼 핸들링
  const handleRadioChange = (event) => {
    if (event.target.value === "monthly") {
      setUserCheck((prev) => ({
        ...prev,
        checkMonthly: event.target.checked,
        checkYearly: false,
      }));
    }
    if (event.target.value === "yearly") {
      setUserCheck((prev) => ({
        // 자가 선택 시 checkMonthly 상태를 false로 설정
        ...prev,
        checkYearly: event.target.checked,
        checkMonthly: false,
      }));
    }
  };

  //월세 입력 핸들링 함수
  const handleMonthlyPay = (event) => {
    setMonthlyPay(event.target.value);
  };

  // 월세 공제 결과 계산 함수
  const monthlyResultCalculate = () => {
    let result = determineMonthResult(yearTax.data.salary, monthlyPay);
    setResult((prev) => ({
      ...prev,
      monthResult: result,
    }));
    updateTotal({ month: result });
  };

  //주택 공제 결과 계산 함수
  const houseResultCalculate = () => {
    let promiseAmount = Math.min(
      housingDeposit * 12 * LOAN_PERCENTAGE,
      MAX_HOUSING_DEPOSIT
    ); //주택청약 공제금 => 공제한도 240만원이랑, 실제 공제금이랑 비교해서 작은거 리턴
    let loanAmount = Math.min(
      loan * LOAN_PERCENTAGE,
      MAX_LOAN_AMOUNT - promiseAmount
    ); //대출 공제금 => 400만원-주택청약 공제금 vs 대출공제금 중에 작은걸로 리턴

    const houseResult = getHouseDeduction(
      promiseAmount,
      loanAmount,
      yearTax.data.salary
    );

    setResult((prev) => ({
      ...prev,
      ...houseResult,
    }));
    updateTotal({ house: houseResult.houseTotalResult });
  };

  useEffect(() => {
    if (myData.주택) {
      if (myData.주택.전세원리금상환액) {
        setLoan(myData.주택.전세원리금상환액);
      }
      if (myData.주택.주택청약납입액) {
        setHousingDeposit(myData.주택.주택청약납입액);
      }
    }
    if (userCheck.checkMontly) {
      monthlyResultCalculate();
    } else {
      houseResultCalculate();
    }
  }, [monthlyPay, userCheck, result, yearTax, myData]);

  return (
    <>
      <div>
        <Accordion collapseAll className="m-5">
          <Accordion.Panel>
            <Accordion.Title
              className="flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left text-xl text-black-500 dark:text-gray-400 hover:bg-blue-100 focus:ring-4 focus:ring-blue-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800 "
              theme={{
                open: {
                  on: "bg-blue-100",
                },
              }}
            >
              <div className="flex flex-row">
                <img src={houseImg} className="w-10 h-10" />
                <h2 className="ml-2 mb-1">
                  월세 및 주택 대출 <br />
                  상환 공제 추가하기
                </h2>
              </div>
            </Accordion.Title>
            <Accordion.Content className="bg-gray-100">
              <div>
                {userCheck.checkMonthly && userCheck.checkLoan ? (
                  <div className="flex items-center ml-2 mb-2">
                    <p>
                      월세 공제 시,
                      <br /> 약 {result.monthResult.toLocaleString()}원 돌려받을
                      수 있어요!
                    </p>
                  </div>
                ) : null}
                {userCheck.checkYearly &&
                userCheck.checkLoan &&
                (result.housingDepositResult !== 0 ||
                  result.loanResult !== 0) ? (
                  <>
                    <div className="flex items-center ml-2 mb-2">
                      <p>
                        전세 대출 공제 시, <br /> 약{" "}
                        {result.houseTotalResult.toLocaleString()}원 돌려받을 수
                        있어요!
                      </p>
                    </div>
                    <div>
                      <HouseProgressBar
                        housingDeposit={result.housingDepositResult}
                        loanResult={result.loanResult}
                      />
                    </div>
                  </>
                ) : null}
                {userCheck.checkYearly &&
                userCheck.checkLoan &&
                result.housingDepositResult === 0 &&
                result.loanResult === 0 ? (
                  <>
                    <div className="flex items-center ml-2 mb-2">
                      <p>
                        주택청약금과 전세대출금이 없어서 <br />
                        공제 금액이 없어요 🧐
                      </p>
                    </div>
                  </>
                ) : null}
              </div>
              <MonthAndHouseCard
                userCheck={userCheck}
                handleCheckLoanChange={handleCheckLoanChange}
                handleRadioChange={handleRadioChange}
                handleMonthlyPay={handleMonthlyPay}
                monthlyPay={monthlyPay}
              />
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </>
  );
};

export default MonthAndHouse;
