import React from "react";
import { Accordion } from "flowbite-react";
import img1 from "~/assets/images/findout/1.png";
import img2 from "~/assets/images/findout/2.png";
import img3 from "~/assets/images/findout/3.png";
import img4 from "~/assets/images/findout/4.png";
import img5 from "~/assets/images/findout/5.png";

const FindOut = () => {
  return (
    <>
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>연말정산이란?</Accordion.Title>
          <Accordion.Content>
            <p className="mt-3 mb-2 font-bold text-lg">■ 연말정산이란, </p>
            <p> 1년간의 총근로소득에 대한 납부세액을 확정하는 것으로</p>
            <p className="text-bold">
              근로자가 한해 동안 납부한 근로소득세를 정산하는 절차
            </p>
            입니다.
            <p className="mt-8 font-bold text-lg">■ 연말정산의 신고</p>
            <p className="mt-3">
              연말정산의 신고 의무자는 회사(원천징수 의무자)입니다.{" "}
            </p>
            <p>
              근로자에게 필요서류를 받아 회사나 회사에서 의뢰한 세무대리인이
              업무를 처리합니다.
            </p>
            <p className="mt-8 font-bold text-lg mb-5">
              ■ 연말정산 후 환급과 추가 납부
            </p>
            <p>
              그런데 급여가 같은 경우에도 왜 누군가는 돌려받고 누군가는 더
              납부를 해야할까요?
            </p>
            <p className="mb-5">
              간단히 말하면, 소득이 같더라도 나라에서 요구하는 세금이 다르기
              때문입니다.
            </p>
            <p>
              부양가족이 있거나, 기부금을 많이 냈거나, 교육비로 지출하는 비용이
              많은 경우 등 해당되는 사항이 있다면 납부해야하는 세금을 공제 또는
              감면받을 수 있습니다.
            </p>
            <p className="mt-5">
              예를들어, 독신으로 사는 A씨와 부모님과 자녀를 부양하는 B씨가 있을
              때
            </p>
            <p>
              나라에서는 B씨에게 세금공제 혜택을 주어 세금을 적게 낼 수 있도록
              합니다.
            </p>
            <p className="mt-3">
              그런데 이런 사항들을 매월 급여에 반영할 수 없으니 급여지급시에는
              회사가 일괄적인 비율로
            </p>
            <p>
              세금을 미리 공제하여 국가에 납부하고, 1년에 한번 연말정산이라는
              절차로 공제사항을 정확히 반영하여
            </p>
            <p>계산하는 것입니다.</p>
            <p className="mt-10 text-lg font-bold">■ 연말정산 후 세액차이 </p>
            <p className="mt-2 mb-2.5">
              월급여 200만원을 받는 근로자의 예시를 확인해 보겠습니다.{" "}
            </p>
            <img src={img3}></img>
            <p className="mt-8">
              근로자 홍길동씨는 매월 19,520원씩 근로소득세를 내서 연간
              234,240원을 납부했는데, 연말정산을 통해 공제사항을 검토하고
              계산하였더니 근로소득세가 200,000원인 경우, 나라에서는 34,240원을
              환급해주는 것입니다.
            </p>
            <p className="mt-10 text-lg font-bold">■ 환급시기와 방법</p>
            <p className="mt-2">
              연말정산 후 세액의 환급이나 추가 납부가 필요한 경우
            </p>
            <p> 근로자가 세무서에서 직접 환급받거나 납부하는 것이 아니라,</p>
            <p>
              회사(원천징수의무자)가 다음연도 2월분 급여에 반영하여 정산된
              급여를 지급하게 됩니다.
            </p>
            <p className="mt-10 text-lg font-bold">■ 세액을 줄이는 방법</p>
            <p className="mt-2">
              그렇다면, 가장 궁금한 부분은 ..그래서 세금을 어떻게 줄일 수
              있나요?..일 것입니다. 연말정산의 공식을 한번 살펴보겠습니다.{" "}
            </p>
            <p>
              적용되는 소득공제, 세액공제가 크면 클수록 결정되는 세액이 작아지는
              것을 알 수 있습니다.
            </p>
            <img src={img4} />
            <p>
              **공제란, 일정한 금액이나 수량을 빼는 것을 말합니다. 소득공제와
              세액공제 모두 해당하는 항목만큼의 정해진 금액을 감해주는 것이며
              방법과 항목이 다르기 때문에 소득공제, 세액공제로 나눕니다.
            </p>
            <p className="mt-5">결론적으로,</p>
            <p>
              근로자가 ..나는 이 소득공제, 세액공제 항목에 해당하니 이 부분은
              세금을 공제해달..라고 요청해야 합니다.
            </p>
            <p className="mt-3">
              이를 위해 공제항목에 해당함을 증명서류로 제출해야하는데 각각의
              근로자가 해당하는 공제항목은 회사가 알 수 없으니, 근로자가 직접
              확인하여 자료를 제출해야 해당 부분에 대한 세금을 공제받을 수
              있습니다.
            </p>
            <p className="mt-5 font-bold">
              해당여부를 꼭 확인하여 공제사항이 누락되지 않도록 해주시기
              바랍니다.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            연말정산 공제항목별 제출자료 및 유의사항
          </Accordion.Title>
          <Accordion.Content>
            <ul className="font-bold">
              <li>STEP 01. 연말정산 체크리스트 작성하기</li>
              <li>STEP 02. 연말정산 자료 제출하기</li>
              <li>STEP 03. 연말정산 원천징수 영수증 확인하기</li>
            </ul>
            <p className="mt-5">
              STEP 02 단계에서 자료를 제출하실 때 해당되는 항목의 증명자료를
              반드시 제출해 주셔야 공제받으실 수 있습니다. 공제 항목별
              제출자료와 유의사항을 다음과 같이 안내 드리겠습니다.
            </p>
            <p className="mt-10">
              <p className="font-bold mb-4 text-xl">■ 공제 항목별 제출자료</p> ※
              만약, 자비스에서 안내드린 연말정산 체크리스트 작성 및 자료 제출
              기한 내에 미 제출 시, 근로자 본인에 대해 인적공제(기본공제)및
              표준세액공제(13만원)만 적용하여 연말정산합니다.
            </p>
            <div className="mt-10 font-bold">
              <p>1. 대표적인 소득공제</p>
              <img src={img1} />
            </div>
            <div className="mt-10 font-bold">
              <p>2. 대표적인 세액공제</p>
              <img src={img2} />
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>2023년 귀속 연말정산 바뀌는 3가지</Accordion.Title>
          <Accordion.Content>
            <p>2023년 귀속 연말정산부터 변경되는 주요 사항을 안내드립니다.</p>
            <p className="font-bold text-lg mb-8 mt-8">1. 소득공제</p>
            <p>
              ㄱ. 신용카드 등 소득동제 공제율 및 추가소득공제 확대 2023년
              1월부터 12월까지 지출한 대중교통 이용금액에 대한 공제율이
              한시적으로 40%에서 80%로 두 배 상향 조정되었습니다.
            </p>
            <p className="font-bold text-lg mb-8 mt-8">2. 세액감면</p>
            <p>
              ㄱ. 중소기업 취업자에 대한 소득세 감면한도 확대 중소기업 취업자에
              대한 소득세 감면 한도액이 연간 150만원에서 200만원으로 상향
              되었습니다.
            </p>
            <p className="font-bold text-lg mb-8 mt-8">3. 세액공제</p>
            <p>
              ㄱ. 자녀 세액공제 대상 연령조정 아동수당 지급연령이 만 6세
              이하에서 만 7세 이하로 확대됨에 따라, 자녀 세액공제 대상 자녀의
              연령이 만 7세 이상에서 만 8세 이상으로 변경되었습니다.
            </p>
            <p className=" mb-8 mt-8">
              ㄴ. 고소득자에 대한 근로소득 세액공제 한도 축소 총 급여액 1.2억 원
              초과 고소득자에 대해서 근로소득 세액공제액이 기존 66~ 50만원까지
              공제되던 세액공제액이 최대 50~ 최소 20만원으로 한도 축소되었습니다
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>연말정산 간소화 서비스란?</Accordion.Title>
          <Accordion.Content>
            <p className="font-bold mt-7">연말정산 간소화 서비스란,</p>
            <p>은행, 학교, 병원 등 영수증 발급기관에서</p>
            <p>전산파일로 제출한 소득, 세액공제 증명서류를</p>
            <p>
              국세청에서 전산구축하여 홈택스를 통해 근로자에게 제공하는 서비스
              입니다.
            </p>
            <p>
              제출이 필요한 다수의 연말 정산 서류를 이 서비스로 간편하게 확인할
              수 있습니다.
            </p>
            <p className="mt-5">
              연말정산 간소화 서비스에서 제공하는 소득ㆍ세액공제 증명서류는
              아래의 표와 같습니다.
            </p>
            <img src={img5} className="mt-3" />
            <p className="mt-3">
              **연말 정산 간소화 서비스에서 제공받은 내역이 실제와 다르거나,{" "}
            </p>
            <p>
              자료제공 되지 않은 공제 증명 서류는 해당 영수증 발급기관에서
              발급받아 반드시 제출하셔야 합니다.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>
            연말정산 더 많이 환급받는 절세방법은?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mt-3">
              연말정산은 동일한 수입과 지출이 이루어진다 하더라도 공제하는
              방법과 항목이 다르기 때문에 더 많이 공제 받을 수 있도록 꼼꼼히
              확인하는 것이 중요합니다.
            </p>
            <p className="mt-5">
              놓치지 말아야할 절세팁 5가지를 안내해 드립니다.{" "}
            </p>
            <p>1. 소득이 높은 사람에게 부양가족을 몰아주자!</p>
            <p>
              맞벌이 부부의 경우 자녀를 누가 공제받을지, 형제가 모두 직장생활을
              하면 부모님을 누가 공제받을지 고민이 됩니다. 누가 공제를 받느냐에
              따라 세액의 차이가 큽니다. 일반적으로 연봉이 높아 높은 세율을
              적용받는 사람이 공제받는 것이 가족 전체의 세금 합계액을 줄일 수
              있어 유리합니다.
            </p>
            <p>2. 소득이 있는 부모님의 병원비도 공제를 받을 수 있다!</p>
            <p>
              의료비 세액공제는 유일하게 소득과 나이요건 관계없이 공제가 가능한
              항목입니다. 만일 생계를 같이 하는 20세 이상 자녀의 의료비를 근로자
              본인이 지출했다면 의료비 공제를 받을 수 있습니다.
            </p>
            <p>3. 맞벌이 부부의 의료비는 한쪽에 몰아서 공제받자!</p>
            <p>
              맞벌이 부부의 의료비는 소득이 적은 사람에게 몰아주는 것이
              유리합니다.{" "}
            </p>
            <p>
              의료비 세액공제는 총 급여액의 3%를 초과하는 부분부터 공제
              대상입니다. 큰 병을 앓지 않은 이상 의료비가 기준금액을 초과하기란
              쉽지 않습니다.
            </p>
            <p>
              예를 들어 총 급여액이 3,000만 원이라면 의료비로 90만 원 이상
              지출해야 공제받을 금액이 있습니다.
            </p>
            <p>
              따라서 양쪽 모두 각자의 의료비가 해당 금액을 넘지 않는다면 소득이
              낮은 사람에게 몰아주어 공제 금액을 만드는 것이 유리합니다.
            </p>
            <p>4. 잘 쓰면 약이 되는 신용카드 사용법은?</p>
            <p>
              맞벌이 부부는 한쪽 명의의 신용카드만 사용하는게 유리합니다.
              신용카드공제는 총 급여액의 25%가 넘어야 적용되므로 맞벌이 부부라면
              어느 한쪽의 카드만 사용하여 최소 기준 25%를 넘기도록 합니다. 만일
              두 분 모두 해당 기준을 이미 넘는다면 소득이 많은 쪽의 신용카드를
              사용하는 것이 유리합니다.
            </p>
            <p>5.신용카드보다는 현금영수증, 체크카드 사용하기</p>
            <p>
              신용카드 보다는 현금영수증, 체크카드의 공제율이 높습니다. 그러나
              현금영수증, 체크카드는 당장 현금이 있어야 하니 부담이 된다면 일단
              총 급여액의 25%까지는 신용카드를 사용하되 초과액에 대해서는 주로
              현금영수증, 체크카드를 사용하도록 합니다.
            </p>
            <p>6. 모의 계산을 통해 환급액을 미리 확인하자!</p>
            <p>
              각종 사이트에서 제공하는 연말정산 모의계산기를 이용하여 상황별
              환급액을 확인해 보는 것이 좋습니다.
            </p>
            <p>
              특히 맞벌이 부부라면 자녀를 누가 공제 받는지, 의료비를 누가 공제
              받는지에 따라 환급액의 차이가 크므로 미리 확인하고 환급액을 최대한
              늘리도록 합니다.
            </p>
            <p></p>
            <p></p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>연말정산 간소화 서비스란?</Accordion.Title>
          <Accordion.Content></Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            연말정산 더 많이 환급받는 절세방법은?
          </Accordion.Title>
          <Accordion.Content></Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
};

export default FindOut;
