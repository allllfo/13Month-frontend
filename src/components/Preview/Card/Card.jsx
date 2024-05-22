import React, { useEffect, useState, useMemo } from "react";
import "./Accordion-custom.css";
import cardImg from "~/assets/images/preview/card-dynamic-color.png";
import ProgressBar from "~/components/Preview/Card/ProgressBar";
import { Card, Tooltip } from "flowbite-react";
import { useSelector } from "react-redux";
import { LIMITHRESHOLD, UNIT } from "~/constants/Preview";

const CardComponent = ({ updateTotal, myData }) => {
  const yearTaxState = useSelector((state) => state.yearTax);
  const [isAnimationWork, setIsAnimationWork] = useState(false);
  const [msgGroup, setMsgGroup] = useState({
    msg1: "",
    msg2: "",
  });
  // user data
  const [assetAmount, setAssetAmount] = useState({
    creditAmount: 0, //신용카드
    checkAmount: 0, //체크카드
    cashAmount: 0, //현금영수증
    creditDeductionAmount: 0, //신용카드공제액
    cashDeductionAmount: 0, //현금영수증, 직불, 선불카드 공제액
  });
  const [salary, setSalary] = useState(0);
  const [limitAmount, setLimitAmount] = useState({
    minAmount: 0, // 최소 공제 기준 금액
    limit: 0, // 공제 한도
  });
  const [flag, setFlag] = useState(true);

  const progressBarList = useMemo(() => [
    {
      label: "신용카드",
      amount: assetAmount.creditAmount,
      color: "#8DB4FF",
      limit: salary,
    },
    {
      label: "체크카드, 현금, 페이",
      amount: assetAmount.cashAmount + assetAmount.checkAmount,
      color: "#FEA6FA",
      limit: salary,
    },
    {
      label: "현금 및 신용카드 공제",
      amount: flag
        ? assetAmount.cashDeductionAmount + assetAmount.creditDeductionAmount
        : 0,
      color: "#FFDB97",
      limit: limitAmount.limit,
    },
  ]);

  useEffect(() => {
    setLimitAmount((prev) => ({
      minAmount: salary * 0.25,
      limit: salary <= LIMITHRESHOLD ? 3000000 : 2500000,
    }));
  }, [salary]);

  useEffect(() => {
    setSalary(yearTaxState.data.salary);
  }, [yearTaxState.data.salary]);

  useEffect(() => {
    if (myData) {
      if (myData.카드) {
        setAssetAmount((prev) => ({
          ...prev,
          checkAmount: myData.카드.체크카드,
          creditAmount: myData.카드.신용카드,
          creditDeductionAmount: myData.카드.신용카드 * 0.15,
          cashAmount: myData.카드.현금영수증,
          cashDeductionAmount:
            (myData.카드.체크카드 + myData.카드.현금영수증) * 0.3,
        }));
      }
    }
  }, [myData]);

  useEffect(() => {
    updateTotal(
      "card",
      assetAmount.cashDeductionAmount + assetAmount.creditDeductionAmount
    );
  }, [assetAmount.cashDeductionAmount, assetAmount.creditDeductionAmount]);

  useEffect(() => {
    if (
      assetAmount.cashAmount +
        assetAmount.checkAmount +
        assetAmount.creditAmount <
      limitAmount.minAmount
    ) {
      // 최소 공제 기준 금액을 넘지 못했을 경우
      setMsgGroup((prev) => ({
        ...prev,
        msg1: "소비금액이 적어 \n 카드 소득공제를 받을 수 없어요. 😅",
        msg2: `앞으로 지출은 ${limitAmount.minAmount / UNIT}만원까지 신용카드,
        그 이상은 체크카드를 써보아요!\n`,
      }));
      setFlag(false);
    } else if (
      assetAmount.cashDeductionAmount + assetAmount.creditDeductionAmount >=
      limitAmount.limit
    ) {
      // 공제 한도를 모두 채웠을 경우
      setMsgGroup((prev) => ({
        ...prev,
        msg1: "소비금액이 많아 카드 소득공제를 최대로 받을 수 있어요!",
        msg2: `앞으로 지출은 혜택이 좋은 신용카드를 사용해도 좋아요 😊`,
      }));
    } else {
      setMsgGroup((prev) => ({
        ...prev,
        msg1: "황금비율로 쓰면 카드 소득 공제를 최대로 받을 수 있어요.",
      }));
      // 최소 공제 기준 이상 공제 한도 미만
      if (assetAmount.creditAmount < limitAmount.minAmount) {
        // 신용카드 사용액이 최소 공제 기준을 넘지 못했을 경우
        setMsgGroup((prev) => ({
          ...prev,
          msg2: `혜택이 좋은 신용카드를 ${
            (limitAmount.minAmount - assetAmount.creditAmount) / UNIT
          }만원 추가로 사용 후 공제율이 높은 체크카드, 현금을 사용하세요!`,
        }));
      } else {
        // 한도까지 체크카드 권유
        if (assetAmount.cashDeductionAmount < limitAmount.limit) {
          setMsgGroup((prev) => ({
            ...prev,
            msg2: `체크카드 공제 한도가 ${(
              (limitAmount.limit - assetAmount.cashDeductionAmount) /
              UNIT
            ).toFixed()}만원 남았어요!`,
          }));
        } else {
          // 한도 다채우면 다시 신용카드
          setMsgGroup((prev) => ({
            ...prev,
            msg2: `앞으로 지출은 혜택이 좋은 신용카드를 사용해도 좋아요 😊`,
          }));
        }
      }
    }
  }, [assetAmount, limitAmount]);

  const handleButton = () => {
    const accordionBody = document.getElementById("accordion-color-body-1");
    if (isAnimationWork) {
      setIsAnimationWork(false);
      accordionBody.classList.add("hidden");
    } else {
      setIsAnimationWork(true);
      accordionBody.classList.remove("hidden");
    }
  };

  return (
    <>
      <div
        className="pl-5 pr-5"
        id="accordion-color"
        data-accordion="collapse"
        data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
      >
        <h2 id="accordion-color-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border  border-gray-200 rounded-t-xl rounded-b-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-color-body-1"
            aria-expanded="true"
            aria-controls="accordion-color-body-1"
            onClick={handleButton}
            style={
              isAnimationWork
                ? {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    backgroundColor: "#E1EFFE",
                  }
                : null
            }
          >
            <div className="flex items-center">
              <img src={cardImg} alt="card" className="w-11 h-13 mr-2 mb-1" />
              <span className="text-xl text-black">카드 공제 사용하기</span>
            </div>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-color-body-1"
          className="hidden"
          aria-labelledby="accordion-color-heading-1"
        >
          <div className="p-5 border border-gray-200 rounded-b-xl dark:border-gray-700 dark:bg-gray-900 bg-gray-100">
            <Card>
              <p className="text-center text-pretty	text-start font-bold whitespace-pre-line">
                {msgGroup.msg1}
              </p>
              <div className="flex gap-2 item-center">
                <p className="text-center text-xs text-start text-pretty text-blue-500 whitespace-pre-line">
                  {msgGroup.msg2}
                </p>

                {msgGroup.msg2 ? (
                  <Tooltip
                    style="light"
                    placement="top"
                    content={
                      <div>
                        <p className="text-sm font-bold">💡 TIP</p>
                        <p className="text-xs">
                          {">"} 급여의 25%인 {limitAmount.minAmount / UNIT}만원
                          이상 소비금액부터 카드 소득 공제 대상이에요. <br />{" "}
                          {">"}
                          체크카드는 신용카드보다 공제율이 2배 높아요.
                        </p>
                      </div>
                    }
                  >
                    <button>
                      <svg
                        className="h-5 w-5 text-neutral-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <circle cx="12" cy="12" r="9" />{" "}
                        <line x1="12" y1="17" x2="12" y2="17.01" />{" "}
                        <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                      </svg>
                    </button>
                  </Tooltip>
                ) : (
                  ""
                )}
              </div>
              <div className="flex flex-col gap-5 items-start">
                {progressBarList.map((item, index) => (
                  <ProgressBar
                    key={index}
                    label={item.label}
                    amount={item.amount}
                    color={item.color}
                    limit={item.limit}
                    isAnimationWork={isAnimationWork}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
