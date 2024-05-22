import React, { useEffect, useState } from "react";
import CardComponent from "~/components/Preview/Card";
import PersonComponent from "~/components/Preview/Person";
import SmallBusiness from "~/components/Preview/SmallBusiness";
import PendingAndIRP from "~/components/Preview/PendingAndIRP";
import MonthAndHouse from "~/components/Preview/MonthAndHouse/MonthAndHouse";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getMyData } from "~/lib/apis/myData";
import { updateResult } from "~/lib/apis/result";
import {
  getEITC,
  getTax,
  getTaxToPaid,
  getTotalValue,
} from "~/lib/utils/calculator";
import "./previewSolution.css";

export default function PreviewSolutionPage() {
  const [eitc, setEITC] = useState(0); // 근로소득공제
  const [total, setTotal] = useState({
    person: 0,
    house: 0,
    month: 0,
    business: 0,
    pending: 0,
    irp: 0,
    card: 0,
  });
  const [cidRate, setCIDRate] = useState(0); // 종합소득공제율
  const [result, setResult] = useState(0);
  const userState = useSelector((state) => state.user13th);
  const yearTaxState = useSelector((state) => state.yearTax);
  const [mydata, setMydata] = useState({});
  const unit = 10000;
  const [salary, setSalary] = useState(0); // 총급여
  const navigate = useNavigate(); // useHistory 추가

  useEffect(() => {
    getMyData(userState.userId).then((resp) => {
      setMydata(resp);
    });
  }, []);

  useEffect(() => {
    setSalary(yearTaxState.data.salary);
  }, [yearTaxState.data.salary]);

  useEffect(() => {
    // 근로소득공제
    setEITC(getEITC(salary));

    // 종합 소득 공제율
    if (salary <= 10000 * unit) setCIDRate(0.15);
    else setCIDRate(0.12);
  }, [salary]);

  useEffect(() => {
    // totalPeopleNum이 변경될 때마다 totalPrice를 업데이트합니다.
    setResult(getTotalValue(total));
  }, [total]);

  function updateTotal(type, value) {
    setTotal((prevTotal) => ({
      ...prevTotal,
      [type]: value,
    }));
  }

  const updateResultData = async () => {
    const 전통시장도서문화 = mydata.카드.전통시장비 + mydata.카드.문화생활비;
    const cid = {
      카드공제: total.card,
      가족공제: total.person,
      전통시장도서문화: 전통시장도서문화, // TODO: 소득공제 추가 계산 필요
      "4대보험": mydata.보험["4대보험"],
      주택공제: total.house,
      기타공제: 0, // TODO: 추후 추가
    };
    cid.종합소득공제 = getTotalValue(cid) * cidRate;
    const 소득공제 = cid.종합소득공제 + eitc;
    // 총급여 - 근로소득공제 - 각종 소득 공제 혜택 = 과세표준
    const 공제후세금 = getTaxToPaid(salary - 소득공제); // 산출세액
    const taxD = {
      중소기업감면: total.business,
      월세공제: total.month,
      연금공제: total.irp + total.pending,
      보험료: mydata.보험.보험료,
      // 의료비: mydata.카드.의료비, // TODO: 의료비 세액 공제 계산 필요
      교육비: Math.min(mydata.카드.교육비 * 0.15, 900 * unit), // TODO: 교육비 세액 공제 계산 필요 = ( 초중고 ⇒ 인당 300한도 / 대학생 ⇒ 인당 900한도 )
      기타: Math.min(mydata.기부금 * 0.2, 500 * unit), // TODO: 기부금 세액공제 계산 필요 = 20 % ⇒ 한도 500으로?
    };
    taxD.세금공제 = getTotalValue(taxD);
    const 낸세금 = getTax(salary); // 기납부세금
    const 결정세액 = 공제후세금 - taxD.세금공제; // 산출 세액 – (세액 감면·공제) = 결정 세액

    const returnMoney = 낸세금 - 결정세액;
    // (결정 세액) – (기 납부 세액) = 세금 환급 또는 납부
    const data = {
      총급여: salary,
      근로소득공제: eitc,
      종합소득공제: cid,
      공제후세금: 공제후세금,
      세금공제: taxD,
      돌려받는돈: returnMoney,
    };

    updateResult(yearTaxState.resultId, data).then(() => {
      // 결과 업데이트 후 페이지 이동
      navigate("/preview/result/detail");
    });
  };

  return (
    <>
      <div className="flex flex-col items-center fixed-header">
        <h1 className="text-xl font-semibold mb-1 mt-4 text-center">
          솔루션 이행 시, <br />
          최대{" "}
          <span className="font-bold">
            {result.toLocaleString("ko-KR")}원
          </span>{" "}
          아낄 수 있어요!
        </h1>

        <div className="text-center">
          <p className="mediumGreyText mb-1 text-base">
            공제를 추가해보세요. <br />
            추가할 때마다 아낄 수 있는 돈이 늘어나요.
          </p>
        </div>
      </div>
      <div style={{ marginTop: "9.5rem" }}>
        <CardComponent updateTotal={updateTotal} myData={mydata} />
        <PersonComponent updateTotal={updateTotal} myData={mydata} />
        <MonthAndHouse updateTotal={updateTotal} myData={mydata} />
        <SmallBusiness updateTotal={updateTotal} myData={mydata} />
        <PendingAndIRP updateTotal={updateTotal} myData={mydata} />
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 text-white text-lg w-full py-3 rounded-[15px] font-semibold"
          onClick={() => updateResultData()}
        >
          결과 확인하기
        </button>
      </div>
    </>
  );
}
