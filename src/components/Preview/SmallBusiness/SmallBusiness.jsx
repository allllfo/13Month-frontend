import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Accordion, Card, Checkbox } from "flowbite-react";
import businessBagImg from "~/assets/images/preview/travel-dynamic-color.png";
import { calculateTaxAmount } from "../Calculator/cacluatedTaxAmount";
function SmallBusiness({ updateTotal }) {
  const [smallBusinessJunior, setSmallBusinessJunior] = useState(false);
  const [smallBusinessSenior, setSmallBusinessSenior] = useState(false);
  const [result, setResult] = useState(0);
  const yearTax = useSelector((state) => state.yearTax);

  useEffect(() => {
    const taxBase = yearTax.earnedIncome;
    let result = 0;
    // totalPeopleNum이 변경될 때마다 totalPrice를 업데이트합니다.
    if (
      (yearTax.data.age <= 35 || yearTax.data.age >= 16) &&
      smallBusinessJunior
    ) {
      result = calculateTaxAmount(taxBase) * 0.9; // 과세표준 금액 * 0.9
    } else if (yearTax.data.age >= 60 && smallBusinessSenior) {
      result = calculateTaxAmount(taxBase) * 0.7; //
    } else if (smallBusinessJunior === false && smallBusinessSenior === false) {
      //체크가다시 풀린경우
      result = 0;
    }
    if (result >= 2000000) {
      result = 2000000;
    }

    setResult(result);
    updateTotal("business", result);
  }, [smallBusinessJunior, smallBusinessSenior]);

  const checkHandler = (option, optionHandler) => {
    console.log(option);
    if (option) {
      optionHandler(false);
    } else {
      optionHandler(true);
    }
  };

  return (
    <Accordion collapseAll className="m-5">
      <Accordion.Panel>
        <Accordion.Title
          className="flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left text-xl text-black-500 dark:text-gray-400 hover:bg-blue-100 focus:ring-4 focus:ring-blue-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
          theme={{
            open: {
              on: "bg-blue-100",
            },
          }}
        >
          <div className="flex flex-row align-center">
            <img src={businessBagImg} className="w-10 h-10 mt-1" />
            <h2 className="ml-2 mt-2"> 중소기업 감면 추가하기</h2>
          </div>
        </Accordion.Title>
        <Accordion.Content className="bg-gray-100">
          {(smallBusinessJunior || smallBusinessSenior) && result > 0 ? (
            <div className="flex items-center ml-2 mb-2">
              <p>
                중소기업 소득세 감면 신청시,
                <br /> 약 {result.toLocaleString()}원 돌려받을 수 있어요!
              </p>
            </div>
          ) : null}
          {(smallBusinessJunior || smallBusinessSenior) && result < 0 ? (
            <div className="flex items-center ml-2 mb-2">
              <p>중소기업 소득세 감면 신청시</p>
            </div>
          ) : null}
          {yearTax.data.age > 34 ? (
            <Card>
              <div className="flex items-center justify-between mb-3">
                <p className=" text-black dark:text-black-400 text-base mt-3">
                  중소기업에 재직 중이고, <br />
                  재직 기간이 3년 미만이신가요?
                </p>
                <Checkbox
                  id="accept"
                  onChange={() =>
                    checkHandler(smallBusinessSenior, setSmallBusinessSenior)
                  }
                  className="mt-3 h-6 w-6"
                />
              </div>
            </Card>
          ) : null}
          {yearTax.data.age <= 34 ? (
            <Card>
              <div className="flex items-center justify-between mb-3">
                <p className=" text-black dark:text-black-400 text-base mt-3">
                  중소기업에 재직 중이고, <br />
                  재직 기간이 5년 미만이신가요?
                </p>
                <Checkbox
                  id="accept"
                  onChange={() =>
                    checkHandler(smallBusinessJunior, setSmallBusinessJunior)
                  }
                  className="mt-3 h-6 w-6"
                />
              </div>
            </Card>
          ) : null}
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

export default SmallBusiness;
