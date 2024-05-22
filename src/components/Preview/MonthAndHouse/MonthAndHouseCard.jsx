import React from "react";
import { Checkbox, Label, Radio, Card } from "flowbite-react";

const MonthAndHouseCard = ({
  userCheck,
  handleCheckLoanChange,
  handleRadioChange,
  handleMonthlyPay,
  monthlyPay,
}) => {
  const radios = [
    {
      id: "monthly",
      value: "monthly",
      label: "월세",
      checked: userCheck.checkMonthly,
    },
    {
      id: "yearly",
      value: "yearly",
      label: "전세",
      checked: userCheck.checkYearly,
    },
  ];

  return (
    <Card>
      <div>
        <div className="flex justify-between items-center gap-2 mb-3">
          <p>무주택 세대 해당 여부</p>{" "}
          <Checkbox id="accept" defaultChecked className="w-6 h-6" />
        </div>
        <div className="flex justify-between items-center gap-2">
          <Label htmlFor="promotion" className=" mt-1 text-base">
            월세 및 전세 대출 보유 여부
          </Label>
          <Checkbox
            id="promotion"
            onChange={handleCheckLoanChange(userCheck.checkLoan)}
            className="mt-1 w-6 h-6"
          />
        </div>
      </div>
      {userCheck.checkLoan && (
        <div>
          <div className="mt-1">
            <div className="max-w-md">
              <fieldset className="flex max-w-md flex-row gap-4 items-center justify-center mb-5">
                {radios.map((radio) => (
                  <div key={radio.id} className="flex items-center gap-2">
                    <Radio
                      id={radio.id}
                      name="type"
                      value={radio.value}
                      checked={radio.checked}
                      onChange={handleRadioChange}
                    />
                    <Label htmlFor={radio.id}>{radio.label}</Label>
                  </div>
                ))}
              </fieldset>
              {userCheck.checkMonthly ? (
                <div className="flex justify-between items-center gap-2 ml-2 mr-2">
                  <p className="text-nowrap">월세</p>
                  <div className="flex justify-end items-center gap-2 text-nowrap">
                    <input
                      name="price"
                      id="price"
                      className="text-right block w-1/3 rounded-md border-0 py-1.5 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={monthlyPay}
                      onChange={handleMonthlyPay}
                    />
                    <span>만원</span>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default MonthAndHouseCard;
